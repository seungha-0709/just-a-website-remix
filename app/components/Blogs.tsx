import { root } from "@/styles/root.css";
import {
  blogSection,
  blog_contents_container,
  blog_section_title,
  blogs_container_1,
  blogs_container_1_img,
  blogs_container_2_img,
  blogs_container_2,
  blogs_container_2_title,
  blogs_container_2_tag,
} from "@/styles/blogs.css";
// import * as animationData from "@/assets/lottie/blog.json";
import { useRouteLoaderData } from "@remix-run/react";
// import Lottie from "react-lottie";
import { Button as MuiButton, styled } from "@mui/material";
import { getBlogUrl } from "@/data/util";
import BlogSvg from "@/assets/svgs/blog";
import woman from "@/assets/photo/woman.jpg";
import man from "@/assets/photo/man.jpg";
import startup from "@/assets/photo/startup.jpg";
import create from "@/assets/photo/create.jpg";

// const animationOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const Blogs = () => {
  const data = useRouteLoaderData<any>("routes/_index");
  const posts = data.posts;
  const featuredPosts = data.featuredPosts;

  const featuredPost = featuredPosts?.[0];

  const css = (content) => {
    return `
    <div>
      <style>
        p {
          margin: 0;
          font-size: 14px;
          font-weight: 200;
        }
      </style>
      ${content}
      </div>
    `;
  };

  return (
    <section id="blogs_mobile" className={blogSection}>
      <div style={{ position: "absolute", right: 20, top: 90 }}>
        {/* <Lottie options={animationOptions} width={280} height={200} /> */}
      </div>
      <div className={blog_contents_container}>
        <h2 className={blog_section_title}>
          블로그를 통해 더 많은
          <br />
          법률 정보를 확인해보세요
        </h2>

        <div
          style={{
            display: "flex",
            width: 860,
            gap: 20,
            paddingBottom: 2,
            boxSizing: "border-box",
            margin: "0 auto",
          }}
        >
          <div className={blogs_container_1}>
            <img
              className={blogs_container_1_img}
              src={woman}
              alt={featuredPost.contentObj.title}
            />
            <div>
              <p className={blogs_container_2_tag} style={{ marginBottom: 8 }}>
                {featuredPost.contentObj.tag}
              </p>
              <h3 className={blogs_container_2_title}>
                {featuredPost.contentObj.title}
              </h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: css(featuredPost.html) }} />
          </div>
          <div className={blogs_container_1}>
            <div
              className={blogs_container_2}
              style={{ background: root.color2.COLOR_07 }}
            >
              {posts[3] && (
                <>
                  <img
                    className={blogs_container_2_img}
                    src={man}
                    alt={posts[3].contentObj.title}
                  />
                  <p className={blogs_container_2_tag}>
                    {posts[3].contentObj.tag}
                  </p>
                  <h3 className={blogs_container_2_title}>
                    {posts[3].contentObj.title}
                  </h3>
                </>
              )}
            </div>
            <div
              className={blogs_container_2}
              style={{ background: root.color2.COLOR_04 }}
            >
              {posts[2] && (
                <>
                  <img
                    className={blogs_container_2_img}
                    src={working}
                    alt={posts[2].contentObj.title}
                  />
                  <p className={blogs_container_2_tag}>
                    {posts[2].contentObj.tag}
                  </p>
                  <h3 className={blogs_container_2_title}>
                    {posts[2].contentObj.title}
                  </h3>
                </>
              )}
            </div>
            <div
              className={blogs_container_2}
              style={{ background: root.color2.BLUE_01 }}
            >
              {posts[4] && (
                <>
                  <img
                    className={blogs_container_2_img}
                    src={startup}
                    alt={posts[4].contentObj.title}
                  />
                  <p className={blogs_container_2_tag}>
                    {posts[4].contentObj.tag}
                  </p>
                  <h3 className={blogs_container_2_title}>
                    {posts[4].contentObj.title}
                  </h3>
                </>
              )}
            </div>
            <div className={blogs_container_2}>
              {posts[1] && (
                <>
                  <img
                    className={blogs_container_2_img}
                    src={create}
                    alt={posts[1].contentObj.title}
                  />
                  <p className={blogs_container_2_tag}>
                    {posts[1].contentObj.tag}
                  </p>
                  <h3 className={blogs_container_2_title}>
                    {posts[1].contentObj.title}
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
