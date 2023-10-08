import React from "react";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import ClientStylesContext from "./styles/ClientStylesContext";
import type { LinksFunction } from "@remix-run/node";
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cssBundleHref },
];

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export const loader = async () => {
  return json({
    ENV: {
      CONTENT_API_KEY: process.env.CONTENT_API_KEY,
      ADMIN_API_KEY: process.env.ADMIN_API_KEY,
      API_URL: process.env.API_URL,
      KAKAO_JS_KEY: process.env.KAKAO_JS_KEY,
    },
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
    <div>
      <aside>side</aside>
      <main>{children}</main>
      <aside>side</aside>
    </div>
  );
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
