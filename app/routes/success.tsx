import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import { getRawPosts } from "@/utils/getRawPosts";
import {
  success_list_excerpt,
  success_list_item,
  success_list_item_container,
  success_list_item_img,
  success_list_item_img_skeleton,
  success_list_item_title,
  success_list_title,
} from "@/styles/success.css";

export const loader = async ({ context }) => {
  const posts = await getRawPosts();

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
      <h1 className={success_list_title}>
        공지연 & 정진권 변호사
        <br />
        변호 승소 및 성공 사례
      </h1>
      {success.map((item) => {
        const css = (content) => {
          return `
            <div>
              <style>
                p {
                  display: inline;
                  margin: 0;
                }
                h2 {
                  display: none;
                }
              </style>
              ${content}
            </div>
          `;
        };
        return (
          <Fragment key={item.id}>
            <a href={`/${item.slug}`}>
              <div className={success_list_item_container}>
                <div className={success_list_item_img_skeleton}>
                  <img
                    src={item.feature_image}
                    alt={item.contentObj.title}
                    className={success_list_item_img}
                    loading="lazy"
                  />
                </div>
                <div className={success_list_item}>
                  <p className={success_list_item_title}>
                    {item.contentObj.title}
                  </p>
                  <div
                    className={success_list_excerpt}
                    dangerouslySetInnerHTML={{ __html: css(item.html) }}
                  ></div>
                </div>
              </div>
            </a>
          </Fragment>
        );
      })}
    </div>
  );
};

export default SuccessPage;
