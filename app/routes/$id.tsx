import { root, text } from "@/styles/root.css";
import { success_detail_img } from "@/styles/success.css";
import { getSinglePost } from "@/utils/posts.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const post = await getSinglePost(params.id);

  return json({ id: params.id, post });
};

const SuccessItemPage = () => {
  const { id, post } = useLoaderData<typeof loader>();

  const css = (content) => {
    return `
      <div>
        <style>
          p {
            margin: 16px;
          }
          h2 {
            font-size: 18px;
            margin: 24px 16px;
            font-weight: 600;
          }
        </style>
        ${content}
      </div>
    `;
  };

  return (
    <>
      <img
        className={success_detail_img}
        loading="lazy"
        src={post.feature_image}
        alt={post.title}
      />
      <div style={{ padding: 40 }}>
        <h1
          className={text}
          style={{
            padding: "0px 16px",
            fontSize: 28,
            fontWeight: 600,
            color: root.color2.COLOR_00,
            marginBottom: 100,
          }}
        >
          {post.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: css(post.html) }} />
      </div>
    </>
  );
};

export default SuccessItemPage;
