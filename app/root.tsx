import React from "react";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import ClientStylesContext from "./styles/ClientStylesContext";
import type { LinksFunction } from "@remix-run/node";
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  aside_left,
  aside_right,
  container,
  main_container,
} from "./styles/layout.css";
import { getPosts } from "@/utils/posts.server";
import { PostsOrPages } from "@tryghost/content-api";
import Lnb from "./components/Lnb";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/styles/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: cssBundleHref as string, as: "style" }];
};

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const loader = async () => {
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
      },
    };
  });

  return json({
    ENV: {
      CONTENT_API_KEY: process.env.CONTENT_API_KEY,
      ADMIN_API_KEY: process.env.ADMIN_API_KEY,
      API_URL: process.env.API_URL,
      KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
    },
    posts,
  });
};

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStylesContext);

    useEnhancedEffect(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      clientStyleData.reset();
    }, []);

    const data = useLoaderData<typeof loader>();

    return (
      <html lang="ko">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <body>
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <aside className={aside_left}>
        <Lnb />
      </aside>
      <main className={main_container}>{children}</main>
      <aside className={aside_right}></aside>
    </div>
  );
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
