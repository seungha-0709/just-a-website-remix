import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
  version: "v5.0",
});

export const getPosts = async () => {
  return await api.posts
    .browse({
      limit: "all",
      include: ["tags", "authors"],
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getPostsByTag = async () => {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags",
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getSinglePost = async (postSlug) => {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
};
