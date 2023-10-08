import { useState, useRef, useEffect } from "react";

import { getPosts } from "@/utils/posts.server";
import { PostsOrPages } from "@tryghost/content-api";
import { useLoaderData } from "@remix-run/react";
import Success from "@/components/Success";
import Main from "@/components/Main";
import Place from "@/components/Place";
import Profile from "@/components/Profile";
import Blogs from "@/components/Blogs";
import { json } from "@remix-run/node";
import HTMLParser from "html-to-json-parser";

export const loader = async ({ context }) => {
  const rawPosts = (await getPosts()) as PostsOrPages;

  if (!rawPosts) {
    return json({
      featuredPosts: [],
      posts: [],
      success: [],
    });
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
        text: HTMLParser("<div>" + item.html + "</div>", false),
      },
    };
  });

  return {
    featuredPosts: posts.filter((post) =>
      post.tags.map((v) => v.name).includes("main_featured")
    ),
    posts: posts.filter((post) =>
      post.tags.map((v) => v.name).includes("blog-list")
    ),
    success: posts.filter((post) =>
      post.tags.map((v) => v.name).includes("success")
    ),
  };
};

export default function Component() {
  return (
    <>
      <script
        defer
        async
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=93b6e1f465e1f23c4f13b18572656676&libraries=services,clusterer&autoload=false`}
      />
      <script
        defer
        async
        src="https://cdn.megadata.co.kr/dist/prod/v2/mtm.js?adverId=livertem&device=B"
      />
      <meta
        name="ahrefs-site-verification"
        content="bce11dd1e79258121a73a137633566152ab1d60a8584185afcc2f880797effa5"
      />
      <Main />
      <Profile />
      <Success />
      <Blogs />
      <Place />
    </>
  );
}
