import { getPosts } from "./posts.server";
import { PostsOrPages } from "@tryghost/content-api";

export const getRawPosts = async () => {
  const rawPosts = (await getPosts()) as PostsOrPages;

  if (!rawPosts) {
    return [];
  }

  const posts = rawPosts.map((item) => {
    const tagRegex = /\[([^\]]+)\]/g;
    const titleRegex = /\]\s*(.*)/g;
    const tag = tagRegex.exec(item.title)?.[1] || "";
    const title = titleRegex.exec(item.title)?.[1] || "";

    return {
      id: item.id,
      uuid: item.uuid,
      slug: item.slug,
      html: item.html,
      updated_at: item.updated_at,
      created_at: item.created_at,
      feature_image: item.feature_image,
      canonical_url: null,
      tags: item.tags,
      authors: item.authors,
      url: item.url,
      contentObj: {
        tag: tag.trim(),
        title: title.trim(),
        // text: HTMLParser("<div>" + item.html + "</div>", false),
      },
    };
  });

  return posts;
};
