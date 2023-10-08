import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import { getPosts } from "@/utils/posts.server";
import { PostsOrPages } from "@tryghost/content-api";
import { json } from "@remix-run/node";
import { getRawPosts } from "@/utils/getRawPosts";

export const loader = async ({ context }) => {
  const posts = await getRawPosts();
  console.log(posts);

  return {
    success: posts.filter((post) =>
      post.tags.map((v) => v.name).includes("success")
    ),
  };
};

const SuccessPage = () => {
  const data = useLoaderData<typeof loader>();
  const success = data.success;

  return (
    <div>
      {success.map((item) => {
        return (
          <Fragment key={item.id}>
            <a href={`/${item.slug}`}>
              <img
                src={item.feature_image}
                alt={item.contentObj.title}
                width={140}
                height={80}
                style={{
                  objectFit: "cover",
                }}
              />
              <p>{item.contentObj.title}</p>
            </a>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SuccessPage;
