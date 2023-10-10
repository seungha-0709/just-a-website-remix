var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import React3 from "react";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-IXEPVEBV.css";

// app/styles/ClientStylesContext.tsx
import * as React from "react";
var ClientStylesContext_default = React.createContext({
  reset: () => {
  }
});

// app/root.tsx
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// app/styles/layout.css.ts
var container = "layout_container__mdzhs90";
var aside_left = "layout_aside_left__mdzhs92 layout_aside__mdzhs91", aside_right = "layout_aside_right__mdzhs93 layout_aside__mdzhs91", main_container = "layout_main_container__mdzhs94", lnb_container = "layout_lnb_container__mdzhs95", hamburger_li = "layout_hamburger_li__mdzhs96";

// app/utils/posts.server.ts
import GhostContentAPI from "@tryghost/content-api";
var api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.CONTENT_API_KEY,
  version: "v5.0"
}), getPosts = async () => await api.posts.browse({
  limit: "all",
  include: ["tags", "authors"]
}).catch((err) => {
  console.error(err);
});
var getSinglePost = async (postSlug) => await api.posts.read({
  slug: postSlug
}).catch((err) => {
  console.error(err);
});

// app/assets/svgs/Logo.js
import "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var SvgLogo = (props) => /* @__PURE__ */ jsxDEV2(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 100,
    height: 60,
    fill: "none",
    viewBox: "0 0 116 50",
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV2("g", { clipPath: "url(#logo_svg__a)", children: [
        /* @__PURE__ */ jsxDEV2(
          "mask",
          {
            id: "logo_svg__b",
            width: 154,
            height: 153,
            x: -20,
            y: -49,
            maskUnits: "userSpaceOnUse",
            style: {
              maskType: "luminance"
            },
            children: /* @__PURE__ */ jsxDEV2("path", { fill: "#fff", d: "M133.31-49H-20v152.3h153.31V-49Z" }, void 0, !1, {
              fileName: "app/assets/svgs/Logo.js",
              lineNumber: 23,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/assets/svgs/Logo.js",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV2("g", { fill: "#401107", mask: "url(#logo_svg__b)", children: [
          /* @__PURE__ */ jsxDEV2("path", { d: "M49.31 14.42v2.41h-9.27v1.44h7.56v5.92H32.43v1.03H47.6v2.42H29.24v-5.87h15.18v-1.09H29.24v-2.41h7.57v-1.44h-9.27v-2.41h21.77ZM38.43 10.83h.25l.23-.02.25-.04.23-.06.23-.06.23-.1.23-.08.22-.11.21-.11.19-.14.19-.15.17-.15.17-.15.15-.17.13-.19.13-.19.12-.19.09-.21.08-.21.08-.21.06-.23.04-.21.02-.23.02-.23-.02-.23-.02-.21-.04-.23-.06-.23-.08-.21-.08-.21-.09-.21-.12-.19-.13-.19-.13-.19-.15-.17-.17-.15-.17-.15-.19-.15-.19-.14-.21-.11-.22-.1-.23-.1-.23-.1-.23-.06-.23-.06-.25-.04-.23-.02h-.5l-.23.02-.25.04-.23.06-.23.06-.23.1-.23.1-.21.1-.21.11-.19.14-.19.15-.17.15-.17.15-.15.17-.14.19-.13.19-.11.19-.1.21-.08.21-.08.21-.06.23-.04.23-.02.21-.02.23.02.23.02.23.04.21.06.23.08.21.08.21.1.21.11.19.13.19.14.19.15.17.17.15.17.15.19.15.19.14.21.11.21.11.23.08.23.1.23.06.23.06.25.04.23.02h.25Zm2.55-9.15.38.17.38.19.36.21.37.23.32.26.33.27.29.31.29.31.25.33.23.34.21.37.17.36.16.36.13.4.1.38.06.4.06.4v.81l-.06.4-.06.4-.1.38-.13.4-.16.36-.17.38-.21.35-.23.34-.25.32-.29.33-.29.29-.33.26-.32.27-.37.23-.36.21-.38.19-.38.17-.42.14-.4.11-.42.1-.44.08-.42.04H38l-.42-.04-.44-.08-.42-.1-.4-.11-.42-.14-.38-.17-.38-.19-.38-.21-.34-.23-.35-.27-.31-.26-.31-.29-.27-.33-.25-.32-.23-.34-.21-.35-.17-.38-.15-.36-.14-.4-.1-.38-.07-.4-.04-.4-.02-.41.02-.4.04-.4.07-.4.1-.38.14-.4.15-.36.17-.36.21-.37.23-.34.25-.33.27-.31.31-.31.31-.27.35-.26.34-.23.38-.21.38-.19.38-.17.42-.14.4-.11.42-.1.44-.06.42-.04.44-.02.44.02.42.04.44.06.42.1.4.11.42.14ZM12.61 1.42l10.62 15.91-2.51 1.45-8.11-12.13-8.05 12-2.51-1.46L12.61 1.42Z" }, void 0, !1, {
            fileName: "app/assets/svgs/Logo.js",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("path", { d: "M23.17 23.42v2.41H2.03v-2.41h8.95v-7.43h3.24v7.43h8.95ZM111.72 48.08v1.43h-9.89v-5.52h1.91v4.09h7.98ZM111.72 34.54h-1.92v10.72h1.92V34.54ZM102.48 40.36l.15.07.15.07.16.05.16.05.16.04.16.03h.66l.17-.03.16-.04.16-.05.16-.05.15-.07.15-.07.14-.09.14-.09.12-.09.13-.1.11-.11.1-.12.1-.12.08-.13.08-.14.07-.15.06-.14.06-.15.03-.16.02-.15.02-.15v-.32l-.02-.15-.02-.15-.03-.16-.06-.15-.06-.14-.07-.15-.08-.14-.08-.12-.1-.12-.1-.12-.11-.11-.13-.1-.12-.09-.14-.09-.14-.09-.15-.07-.15-.07-.16-.05-.16-.05-.16-.03-.17-.03h-.66l-.16.03-.16.03-.16.05-.16.05-.15.07-.15.07-.15.09-.12.09-.14.09-.11.1-.11.11-.11.12-.09.12-.09.12-.08.14-.07.15-.06.14-.05.15-.04.16-.03.15v.15l-.02.16v.16l.02.15.03.15.04.16.05.15.06.14.07.15.08.14.09.13.09.12.11.12.11.11.11.1.14.09.12.09.15.09Zm5.43-2.29v.5l-.02.26-.05.25-.07.25-.08.24-.09.24-.11.24-.12.21-.15.22-.16.22-.17.19-.19.18-.21.18-.2.16-.23.15-.23.14-.25.11-.25.11-.25.09-.26.07-.27.06-.27.05-.27.02h-.55l-.27-.02-.27-.05-.26-.06-.26-.07-.26-.09-.25-.11-.24-.11-.24-.14-.22-.15-.21-.16-.19-.18-.19-.18-.17-.19-.16-.22-.15-.22-.12-.21-.11-.24-.1-.24-.08-.24-.06-.25-.04-.25-.04-.26v-.5l.04-.26.04-.25.06-.25.08-.24.1-.24.11-.24.12-.22.15-.23.16-.2.17-.19.19-.18.19-.18.21-.16.22-.15.24-.13.24-.13.25-.1.26-.09.26-.07.26-.06.27-.05.27-.02h.55l.27.02.27.05.27.06.26.07.25.09.25.1.25.13.23.13.23.15.2.16.21.18.19.18.17.19.16.2.15.23.12.22.11.24.09.24.08.24.07.25.05.25.02.26ZM79.95 43.47v6.03H69.7v-6.03h1.92v1.4h6.42v-1.4h1.92-.01Zm-1.92 2.81h-6.42v1.79h6.42v-1.79ZM79.95 34.54v7.8h-1.92v-4.06h-1.57v-1.43h1.57v-2.31h1.92Z" }, void 0, !1, {
            fileName: "app/assets/svgs/Logo.js",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("path", { d: "M76.46 38.28v4.06h-8.2v-7.8h1.92v2.31h4.37v-2.31h1.92v3.74h-.01Zm-1.92 0h-4.37v2.63h4.37v-2.63ZM48.3 43.37v1.43h-5.29v4.66H41.1V44.8h-5.3v-1.43h12.5ZM47.63 41.53H36.47v-7h11.16v7Zm-1.92-5.58h-7.33v4.16h7.33v-4.16ZM15.56 43.47v6.03H5.31v-6.03h1.92v1.4h6.42v-1.4h1.91Zm-1.91 2.81H7.23v1.79h6.42v-1.79ZM15.56 34.54v7.8h-1.91v-4.06h-1.58v4.06h-8.2v-7.8h1.92v2.31h4.37v-2.31h1.91v2.31h1.58v-2.31h1.91Zm-5.41 3.74H5.78v2.63h4.37v-2.63ZM53.815 23.723v-10.91h2.523v.836h-1.569v9.239h1.569v.835h-2.523ZM110.772 12.814v10.909h-2.523v-.835h1.568v-9.24h-1.568v-.834h2.523ZM73.906 2.256h1.243v2.69h-1.243v-2.69Zm-.119 8.004h1.09v6.982h-1.09V10.26Zm-3.764-6.046h9.265v1.124h-9.265V4.214Zm6.523 5.927h1.124v5.858c0 .358.017.562.085.63.051.068.136.085.239.085h.374c.136 0 .239-.017.307-.068.068-.068.119-.204.17-.425.034-.29.051-.852.051-1.618.222.17.545.34.835.425-.017.75-.069 1.601-.154 1.874-.085.306-.221.51-.425.63-.17.119-.477.17-.733.17h-.715c-.29 0-.63-.085-.851-.29-.239-.22-.307-.493-.307-1.55v-5.721Zm-5.45.034h1.124v2.077c0 1.959-.323 4.07-2.81 5.62a4.745 4.745 0 0 0-.834-.817c2.282-1.362 2.52-3.202 2.52-4.82v-2.06Zm-1.124-1.942c2.044-.068 5.11-.221 8.056-.391V8.88c-2.862.204-5.842.391-7.954.527l-.102-1.175Zm2.98-3.32 1.244.408c-.664 1.243-1.482 2.691-2.163 3.645l-.954-.392c.647-.988 1.448-2.554 1.874-3.661ZM75.61 6.41l.971-.477c1.124 1.056 2.401 2.555 2.963 3.577l-1.039.562c-.528-1.005-1.754-2.555-2.895-3.662ZM64.046 3.278h5.415v1.14h-5.415v-1.14Zm.477 4.104h1.039v7.834h-1.04V7.382Zm-1.056 7.8c1.669-.443 4.274-1.21 6.744-1.942l.17 1.141c-2.333.716-4.802 1.482-6.608 2.027l-.306-1.226ZM67.4 9.085h2.657v1.158H67.4V9.085Zm1.669-5.807h.29l.255-.085.817.596c-.766 1.107-1.89 2.35-2.827 3.116a5.764 5.764 0 0 0-.732-.715c.783-.698 1.72-1.84 2.197-2.674v-.238Zm-2.333 2.588 1.14.137v8.685h-1.14V5.866ZM87.847 22.041h.41v2.386h-.41v-2.386Zm.297 1.045h.777v.341h-.777v-.341Zm-3.154.851h.347c.92 0 1.44-.03 2.04-.148l.044.331c-.614.129-1.144.159-2.084.159h-.347v-.342Zm0-1.604h1.97v.337h-1.564v1.5h-.406v-1.837Zm.446 2.337h.406v.55h2.01v-.55h.405v1.772h-2.821V24.67Zm.406.876v.56h2.01v-.56h-2.01ZM92.4 22.04h.411v2.386h-.41v-2.386Zm.297 1.045h.777v.341h-.777v-.341Zm-3.153.851h.347c.92 0 1.44-.03 2.039-.148l.045.331c-.614.129-1.144.159-2.084.159h-.347v-.342Zm0-1.604h1.97v.337H89.95v1.5h-.406v-1.837Zm.446 2.337h.406v.55h2.01v-.55h.405v1.772H89.99V24.67Zm.406.876v.56h2.01v-.56h-2.01Zm6.558-3.52h.41v2.47h-.41v-2.47Zm.238 1.075h.836v.346h-.837v-.346Zm-2.669 1.623h2.842v1h-2.426v.545h-.406v-.842h2.43v-.39h-2.44v-.313Zm.01 1.426h2.995v.317h-2.995v-.317Zm-.628-3.708h2.643v.322h-2.643v-.322Zm1.321.52c.644 0 1.07.282 1.07.738 0 .45-.426.727-1.07.727-.653 0-1.074-.277-1.074-.727 0-.456.42-.738 1.074-.738Zm0 .302c-.415 0-.683.168-.683.436 0 .262.267.43.683.43.411 0 .678-.168.678-.43 0-.268-.267-.436-.678-.436Zm-.208-1.272h.411v.673h-.41v-.673ZM103.479 24.145h.406v.688h-.406v-.688Zm.208-2.05c.985 0 1.574.273 1.574.773s-.589.777-1.574.777c-.99 0-1.574-.277-1.574-.777s.584-.772 1.574-.772Zm0 .313c-.732 0-1.153.168-1.153.46 0 .297.421.465 1.153.465.728 0 1.149-.168 1.149-.465 0-.292-.421-.46-1.149-.46Zm-2.024 1.524h4.044v.337h-4.044v-.337Zm.49.748h3.039v1.01h-2.624v.544h-.405v-.842h2.623v-.395h-2.633v-.317Zm.01 1.465h3.163v.322h-3.163v-.322ZM64.927 24.452h3.074v.332h-3.074v-.332Zm-.52 1.148h4.055v.342h-4.055V25.6Zm.52-3.178h3.025v.337h-2.609v1.797h-.416v-2.134Zm.282 1h2.649v.327h-2.649v-.327Zm5.004-1.217c.669 0 1.159.406 1.159.995 0 .584-.49.99-1.159.99-.663 0-1.153-.406-1.153-.99 0-.59.49-.995 1.153-.995Zm0 .336c-.43 0-.757.273-.757.659s.327.653.757.653c.436 0 .758-.267.758-.653s-.322-.659-.758-.659Zm2-.5h.416v2.292h-.416v-2.292Zm-2.48 2.51h2.896v1.089h-2.485v.673h-.4v-.98h2.48v-.45h-2.49v-.332Zm.01 1.579h3.035v.327h-3.035v-.327ZM76.238 25.595h4.054v.342h-4.054v-.342Zm1.801-1.084h.406v1.198h-.406v-1.198Zm-.01-2.173h.357v.347c0 .955-.916 1.693-1.817 1.88l-.173-.34c.787-.144 1.633-.803 1.633-1.54v-.347Zm.075 0h.356v.347c0 .742.852 1.396 1.639 1.54l-.179.34c-.9-.187-1.816-.925-1.816-1.88v-.347ZM87.535 3.516h4.734v.886h-4.734v-.886Zm2.043-1.311h.988v5.739h-.988v-5.74Zm11.002 1.788c.545.954 1.601 2.044 2.469 2.571-.238.17-.562.511-.749.767-.852-.664-1.873-1.959-2.418-3.014l.698-.324Zm-10.133.528c.358.255 1.618 1.209 1.907 1.499l-.664.8c-.306-.46-1.311-1.499-1.754-1.873l.51-.426Zm-.903-.58.699.324c-.596 1.21-1.618 2.606-2.623 3.304-.085-.272-.307-.698-.46-.953.886-.545 1.89-1.67 2.384-2.674Zm8.004-.425h5.126v.903h-5.126v-.903Zm-4.257-.477h3.934v.8H93.29v-.8Zm-1.107 1.703H97.6v.8h-5.416v-.8Zm7.238-2.537h.987v5.739h-.987v-5.74Zm-4.939 1.124h.97v4.07h-.97v-4.07Zm-2.997 6.25.425-.375c.307.17.716.46.92.664l-.443.409a4.485 4.485 0 0 0-.902-.698Zm.374 2.946.443-.324c.307.222.647.511.835.733l-.46.374a5.156 5.156 0 0 0-.818-.783Zm1.857-1.43.425-.341c.324.17.733.46.937.681l-.426.392a5.424 5.424 0 0 0-.936-.732Zm-4.036.034.442-.324c.307.17.682.443.869.63l-.443.392a4.103 4.103 0 0 0-.868-.698Zm3.934-1.448.647.204c-.954 1.175-2.419 2.3-3.713 3.032-.12-.12-.375-.358-.562-.46 1.329-.698 2.759-1.703 3.628-2.776Zm-3.185.681.494-.392c1.277.699 2.81 1.737 3.593 2.487l-.51.443c-.767-.733-2.283-1.823-3.577-2.538Zm-1.584-.272h.92v3.031h5.262V10.09h.97v3.848h-7.152V10.09Zm3.78-4.207h.801v1.158h3.049V5.883h.817v1.925h-4.666V5.883ZM87.74 8.25h14.612v2.776h-1.158V9.204h-12.33v1.822H87.74V8.25Zm1.107 5.944h1.039v2.265c0 .392.153.46 1.056.46h3.184c.63 0 .75-.12.818-1.073.221.153.63.272.92.323-.12 1.329-.46 1.635-1.601 1.635H90.89c-1.618 0-2.044-.238-2.044-1.328v-2.282Zm5.586.017.732.664c-1.413.562-3.678.954-5.552 1.158-.034-.221-.17-.545-.29-.75 1.806-.22 3.969-.595 5.11-1.072Zm5.33-4.666.954.408c-.954.954-2.503 1.789-3.849 2.283-.17-.239-.477-.529-.732-.733 1.294-.443 2.81-1.158 3.627-1.958Zm.716 2.094.97.375c-1.004 1.26-2.741 2.3-4.479 2.895a3.897 3.897 0 0 0-.715-.8c1.618-.511 3.321-1.448 4.224-2.47Zm.919 2.078 1.039.358c-1.107 1.839-3.253 3.082-5.875 3.797a3.618 3.618 0 0 0-.665-.902c2.453-.545 4.531-1.67 5.501-3.253Zm-2.18-9.741.682.255c-.41 1.175-1.192 2.487-2.01 3.15a4.855 4.855 0 0 0-.698-.748c.817-.511 1.618-1.635 2.026-2.657Zm-5.892-1.754.886.12c-.256.85-.63 1.668-1.26 2.366a2.766 2.766 0 0 0-.733-.494c.562-.596.903-1.345 1.107-1.992Z" }, void 0, !1, {
            fileName: "app/assets/svgs/Logo.js",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/assets/svgs/Logo.js",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/assets/svgs/Logo.js",
        lineNumber: 11,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2("defs", { children: /* @__PURE__ */ jsxDEV2("clipPath", { id: "logo_svg__a", children: /* @__PURE__ */ jsxDEV2("path", { fill: "#fff", d: "M0 0h116v50H0z" }, void 0, !1, {
        fileName: "app/assets/svgs/Logo.js",
        lineNumber: 33,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/assets/svgs/Logo.js",
        lineNumber: 32,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/assets/svgs/Logo.js",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/svgs/Logo.js",
    lineNumber: 3,
    columnNumber: 3
  },
  this
), Logo_default = SvgLogo;

// app/components/Lnb.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Lnb = () => /* @__PURE__ */ jsxDEV3("div", { className: lnb_container, children: /* @__PURE__ */ jsxDEV3("div", { children: [
  /* @__PURE__ */ jsxDEV3(Logo_default, {}, void 0, !1, {
    fileName: "app/components/Lnb.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV3(
    "ul",
    {
      style: {
        listStyle: "none",
        margin: "60px 0 20px",
        padding: 0,
        textAlign: "left"
      },
      children: [
        /* @__PURE__ */ jsxDEV3("a", { href: "#profile_mobile", children: /* @__PURE__ */ jsxDEV3("li", { className: hamburger_li, children: "\uBCC0\uD638\uC0AC \uC18C\uAC1C" }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("a", { href: "#success_mobile", children: /* @__PURE__ */ jsxDEV3("li", { className: hamburger_li, children: "\uC131\uACF5 \uC0AC\uB840" }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("a", { href: "#blogs_mobile", children: /* @__PURE__ */ jsxDEV3("li", { className: hamburger_li, children: "\uBE14\uB85C\uADF8 \uC18C\uAC1C" }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("a", { href: "#place-mobile", children: /* @__PURE__ */ jsxDEV3("li", { className: hamburger_li, children: "\uC624\uC2DC\uB294 \uAE38" }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Lnb.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Lnb.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Lnb.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Lnb.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Lnb_default = Lnb;

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: cssBundleHref, as: "style" }], loader = async () => {
  let rawPosts = await getPosts();
  if (!rawPosts)
    return json({
      featuredPosts: [],
      posts: [],
      success: []
    });
  let posts = rawPosts.map((item) => {
    let tagRegex = /\[([^\]]+)\]/g, titleRegex = /\]\s*(.*)/g, tag = tagRegex.exec(item.title)?.[1] || "", title = titleRegex.exec(item.title)?.[1] || "";
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
        title: title.trim()
      }
    };
  });
  return json({
    ENV: {
      CONTENT_API_KEY: process.env.CONTENT_API_KEY,
      ADMIN_API_KEY: process.env.ADMIN_API_KEY,
      API_URL: process.env.API_URL,
      KAKAO_JS_KEY: process.env.KAKAO_JS_KEY
    },
    posts
  });
}, Document = withEmotionCache(
  ({ children, title }, emotionCache) => {
    let clientStyleData = React3.useContext(ClientStylesContext_default);
    useEnhancedEffect(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData.reset();
    }, []);
    let data = useLoaderData();
    return /* @__PURE__ */ jsxDEV4("html", { lang: "ko", children: [
      /* @__PURE__ */ jsxDEV4("head", { children: [
        /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        title ? /* @__PURE__ */ jsxDEV4("title", { children: title }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 100,
          columnNumber: 20
        }, this) : null,
        /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "meta",
          {
            name: "emotion-insertion-point",
            content: "emotion-insertion-point"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 103,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("body", { children: [
        children,
        /* @__PURE__ */ jsxDEV4(
          "script",
          {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 110,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this);
  }
), Layout = ({ children }) => /* @__PURE__ */ jsxDEV4("div", { className: container, children: [
  /* @__PURE__ */ jsxDEV4("aside", { className: aside_left, children: /* @__PURE__ */ jsxDEV4(Lnb_default, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 126,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV4("main", { className: main_container, children }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 129,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV4("aside", { className: aside_right }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 125,
  columnNumber: 5
}, this);
function App() {
  return /* @__PURE__ */ jsxDEV4(Document, { children: /* @__PURE__ */ jsxDEV4(Layout, { children: /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 139,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}

// app/routes/success.tsx
var success_exports = {};
__export(success_exports, {
  default: () => success_default,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import { Fragment } from "react";

// app/utils/getRawPosts.ts
var getRawPosts = async () => {
  let rawPosts = await getPosts();
  return rawPosts ? rawPosts.map((item) => {
    let tagRegex = /\[([^\]]+)\]/g, titleRegex = /\]\s*(.*)/g, tag = tagRegex.exec(item.title)?.[1] || "", title = titleRegex.exec(item.title)?.[1] || "";
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
        title: title.trim()
        // text: HTMLParser("<div>" + item.html + "</div>", false),
      }
    };
  }) : [];
};

// app/styles/success.css.ts
var successSection = "success_successSection__1fbx4l70", success_content_area = "success_success_content_area__1fbx4l71", success_title = "success_success_title__1fbx4l72", success_subtitle = "success_success_subtitle__1fbx4l73", success_example_item = "success_success_example_item__1fbx4l74", success_item_container = "success_success_item_container__1fbx4l75", success_item_content_container = "success_success_item_content_container__1fbx4l76", success_list_item_container = "success_success_list_item_container__1fbx4l77", success_list_item_img = "success_success_list_item_img__1fbx4l78", success_list_item_img_skeleton = "success_success_list_item_img_skeleton__1fbx4l79", success_list_item = "success_success_list_item__1fbx4l7a", success_list_item_title = "success_success_list_item_title__1fbx4l7b root_text__1a58cmf0", success_list_excerpt = "success_success_list_excerpt__1fbx4l7c root_text__1a58cmf0", success_list_title = "success_success_list_title__1fbx4l7d root_text__1a58cmf0", success_detail_img = "success_success_detail_img__1fbx4l7e";

// app/routes/success.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader2 = async ({ context }) => ({
  success: (await getRawPosts()).filter(
    (post) => post.tags.map((v2) => v2.name).includes("success")
  )
}), SuccessPage = () => {
  let success = useLoaderData2().success;
  return /* @__PURE__ */ jsxDEV5("div", { children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: success_list_title, children: [
      "\uACF5\uC9C0\uC5F0 & \uC815\uC9C4\uAD8C \uBCC0\uD638\uC0AC",
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "app/routes/success.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      "\uBCC0\uD638 \uC2B9\uC18C \uBC0F \uC131\uACF5 \uC0AC\uB840"
    ] }, void 0, !0, {
      fileName: "app/routes/success.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    success.map((item) => {
      let css = (content) => `
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
      return /* @__PURE__ */ jsxDEV5(Fragment, { children: /* @__PURE__ */ jsxDEV5("a", { href: `/${item.slug}`, children: /* @__PURE__ */ jsxDEV5("div", { className: success_list_item_container, children: [
        /* @__PURE__ */ jsxDEV5("div", { className: success_list_item_img_skeleton, children: /* @__PURE__ */ jsxDEV5(
          "img",
          {
            src: item.feature_image,
            alt: item.contentObj.title,
            className: success_list_item_img,
            loading: "lazy"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/success.tsx",
            lineNumber: 57,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/success.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: success_list_item, children: [
          /* @__PURE__ */ jsxDEV5("p", { className: success_list_item_title, children: item.contentObj.title }, void 0, !1, {
            fileName: "app/routes/success.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "div",
            {
              className: success_list_excerpt,
              dangerouslySetInnerHTML: { __html: css(item.html) }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/success.tsx",
              lineNumber: 68,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/success.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/success.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/success.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, item.id, !1, {
        fileName: "app/routes/success.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this);
    })
  ] }, void 0, !0, {
    fileName: "app/routes/success.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, success_default = SuccessPage;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Component,
  loader: () => loader3
});

// app/assets/lottie/success.json
var success_exports2 = {};
__export(success_exports2, {
  assets: () => assets,
  ddd: () => ddd,
  default: () => success_default2,
  fr: () => fr,
  h: () => h,
  ip: () => ip,
  layers: () => layers,
  markers: () => markers,
  meta: () => meta,
  nm: () => nm,
  op: () => op,
  v: () => v,
  w: () => w
});
var v = "4.8.0", meta = { g: "LottieFiles AE 2.0.4", a: "", k: "", d: "", tc: "" }, fr = 30, ip = 0, op = 30, w = 512, h = 512, nm = "Rander", ddd = 0, assets = [{ id: "comp_0", layers: [{ ddd: 0, ind: 1, ty: 0, nm: "Stars", refId: "comp_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [736, 345, 0], ix: 2 }, a: { a: 0, k: [75, 75, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, w: 150, h: 150, ip: 6, op: 21, st: 6, bm: 0 }, { ddd: 0, ind: 2, ty: 0, nm: "Stars", refId: "comp_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [736, 518, 0], ix: 2 }, a: { a: 0, k: [75, 75, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, w: 150, h: 150, ip: 2, op: 17, st: 2, bm: 0 }, { ddd: 0, ind: 3, ty: 0, nm: "Stars", refId: "comp_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [323, 518, 0], ix: 2 }, a: { a: 0, k: [75, 75, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, w: 150, h: 150, ip: 0, op: 15, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Layer 2 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-5] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 12, s: [9] }, { t: 29, s: [-5] }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [294.994, 689.801, 0], to: [4.333, -8.167, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 12, s: [320.994, 640.801, 0], to: [0, 0, 0], ti: [4.333, -8.167, 0] }, { t: 29, s: [294.994, 689.801, 0] }], ix: 2 }, a: { a: 0, k: [320.994, 687.801, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[19.201, -14.801], [-24.799, 0.402], [-20.002, 14.801], [24.799, 0.402]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [662.049, 565.734], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[19.998, -14.801], [-25.6, 0.402], [-20.803, 14.801], [25.6, -0.399]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [646.85, 525.734], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 2, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[20.398, -15.199], [-26, 0.801], [-21.204, 15.199], [26, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [631.251, 485.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 2, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[4.401, 37.199], [18.798, 32.398], [-4.401, -37.199], [-18.798, -31.602]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.290196078431, 0.290196078431, 0.337254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [484.049, 578.534], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 2, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[206.655, -35.766], [-198.204, 132.568], [-206.654, 19.957], [174.655, -132.568]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.290196078431, 0.290196078431, 0.337254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [264.994, 689.902], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 2, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[24, -64.401], [-56, -32.401], [-24, 64.4], [56, 31.599]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.403921598547, 0.419607873056, 0.498039245605, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [495.649, 589.735], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 2, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.402, 8], [0, 0], [8.8, -3.199], [0, 0], [0, 0], [1.602, -4.801], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-2.399, 1.602], [0, 0]], o: [[0, 0], [-3.203, -8], [0, 0], [0, 0], [-4.801, 2.399], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.199, 0], [0, 0], [7.199, -4]], v: [[184.398, -3.202], [138.8, -125.599], [118, -135.201], [117.199, -135.201], [29.199, -96.799], [19.597, -85.599], [13.199, -53.599], [-186.801, 26.401], [-186.801, 138.401], [45.199, 42.401], [104.398, 49.599], [113.199, 47.997], [176.398, 16.798]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254961799, 0.800000059838, 0.749019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [506.449, 578.935], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 2, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [6.398, 0], [0, 0], [0, 0], [0, 0], [-2.402, -6.398], [0, 0], [0, 0]], o: [[-2.398, -6.402], [0, 0], [0, 0], [0, 0], [-4.8, 4.8], [0, 0], [0, 0], [0, 0]], v: [[57.599, -24.398], [43.201, -34.8], [11.201, -34.8], [-32.799, -17.2], [-55.999, 5.2], [-59.999, 22.8], [-55.202, 34.8], [62.4, -11.597]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [649.248, 697.733], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 2, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[44, -44], [0, 0], [0, 0.801], [0, 0]], o: [[0, 0], [35.203, -35.199], [0, 0], [1.601, 3.199]], v: [[-16, 57.199], [-27.203, 46], [-28, -48.399], [-14.402, -57.199]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.929411824544, 0.756862804936, 0.486274539723, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [581.25, 345.733], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 2, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [13.602, 34.398], [0, 0], [-8, 3.204], [0, 0], [0, 0], [-3.203, -8], [0, 0], [22.398, -25.602], [0, 0], [0, 0], [0, 0], [-1.598, -6.398], [0, 0], [0, 0], [0, 0], [-4.8, 4.801], [0, 0]], o: [[0, 0], [-36, -3.199], [0, 0], [-3.199, -8], [0, 0], [0, 0], [8, -3.204], [0, 0], [10.402, 32], [0, 0], [0, 0], [0, 0], [6.398, 0], [0, 0], [0, 0], [0, 0], [-2.402, -6.398], [0, 0], [0, 0]], v: [[-22.401, -36.398], [-53.6, -39.597], [-134.401, -100.398], [-155.202, -153.199], [-146.401, -174], [-145.6, -174], [23.201, -234.796], [44.001, -225.199], [61.599, -172.398], [43.201, -79.597], [21.599, -54.796], [107.201, 169.204], [139.201, 169.204], [153.599, 179.602], [158.4, 191.602], [40.798, 238], [36.001, 226], [40.001, 208.403], [63.201, 186]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.956862804936, 0.643137254902, 0.133333333333, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [553.248, 492.932], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 2, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-2.402, 24], [-15.203, 6.399], [0, 0], [0, 0], [0, 0], [-5.598, -14.398], [-10.398, -0.801], [0, 0]], o: [[0, 0], [-24, -2.403], [1.598, -16.801], [0, 0], [0, 0], [0, 0], [-14.398, 5.602], [4, 9.602], [0, 0], [0, 0]], v: [[51.199, 48], [-11.199, 40.801], [-50.399, -8], [-22.399, -44.801], [-15.199, -48], [-9.602, -32.801], [-16.801, -29.602], [-32.801, 7.199], [-9.602, 24.801], [52.801, 32]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [419.649, 397.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 2, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [4, 8.8], [13.601, -4.8], [0, 0], [0, 0], [0, 0], [-8, -21.601], [9.598, -12]], o: [[0, 0], [0, 0], [6.399, -7.203], [-4.8, -13.598], [0, 0], [0, 0], [0, 0], [21.598, -8.801], [5.601, 14.399], [0, 0]], v: [[-21.203, 64.801], [-34, 55.199], [9.199, 0.801], [13.199, -25.601], [-20.402, -40.801], [-25.203, -39.199], [-30.801, -54.402], [-26, -56], [28.399, -32], [22, 10.399]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [627.25, 329.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 2, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[19.201, -14.801], [-24.799, 0.402], [-20.002, 14.801], [24.799, 0.402]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [662.049, 565.734], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 2, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[19.998, -14.801], [-25.6, 0.402], [-20.803, 14.801], [25.6, -0.399]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [646.85, 525.734], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 2, cix: 2, bm: 0, ix: 14, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[20.398, -15.199], [-26, 0.801], [-21.204, 15.199], [26, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.847058883368, 0.705882352941, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [631.251, 485.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 15", np: 2, cix: 2, bm: 0, ix: 15, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[4.401, 37.199], [18.798, 32.398], [-4.401, -37.199], [-18.798, -31.602]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.290196078431, 0.290196078431, 0.337254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [484.049, 578.534], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 16", np: 2, cix: 2, bm: 0, ix: 16, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[76, 16.801], [-76, 80], [-76, -32], [44, -80]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.290196078431, 0.290196078431, 0.337254901961, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [395.649, 637.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 17", np: 2, cix: 2, bm: 0, ix: 17, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[24, -64.401], [-56, -32.401], [-24, 64.4], [56, 31.599]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.403921598547, 0.419607873056, 0.498039245605, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [495.649, 589.735], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 18", np: 2, cix: 2, bm: 0, ix: 18, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.402, 8], [0, 0], [8.8, -3.199], [0, 0], [0, 0], [1.602, -4.801], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-2.399, 1.602], [0, 0]], o: [[0, 0], [-3.203, -8], [0, 0], [0, 0], [-4.801, 2.399], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.199, 0], [0, 0], [7.199, -4]], v: [[184.398, -3.202], [138.8, -125.599], [118, -135.201], [117.199, -135.201], [29.199, -96.799], [19.597, -85.599], [13.199, -53.599], [-186.801, 26.401], [-186.801, 138.401], [45.199, 42.401], [104.398, 49.599], [113.199, 47.997], [176.398, 16.798]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.937254961799, 0.800000059838, 0.749019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [506.449, 578.935], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 19", np: 2, cix: 2, bm: 0, ix: 19, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [6.398, 0], [0, 0], [0, 0], [0, 0], [-2.402, -6.398], [0, 0], [0, 0]], o: [[-2.398, -6.402], [0, 0], [0, 0], [0, 0], [-4.8, 4.8], [0, 0], [0, 0], [0, 0]], v: [[57.599, -24.398], [43.201, -34.8], [11.201, -34.8], [-32.799, -17.2], [-55.999, 5.2], [-59.999, 22.8], [-55.202, 34.8], [62.4, -11.597]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [649.248, 697.733], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 20", np: 2, cix: 2, bm: 0, ix: 20, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[44, -44], [0, 0], [0, 0.801], [0, 0]], o: [[0, 0], [35.203, -35.199], [0, 0], [1.601, 3.199]], v: [[-16, 57.199], [-27.203, 46], [-28, -48.399], [-14.402, -57.199]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.929411824544, 0.756862804936, 0.486274539723, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [581.25, 345.733], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 21", np: 2, cix: 2, bm: 0, ix: 21, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [13.602, 34.398], [0, 0], [-8, 3.204], [0, 0], [0, 0], [-3.203, -8], [0, 0], [22.398, -25.602], [0, 0], [0, 0], [0, 0], [-1.598, -6.398], [0, 0], [0, 0], [0, 0], [-4.8, 4.801], [0, 0]], o: [[0, 0], [-36, -3.199], [0, 0], [-3.199, -8], [0, 0], [0, 0], [8, -3.204], [0, 0], [10.402, 32], [0, 0], [0, 0], [0, 0], [6.398, 0], [0, 0], [0, 0], [0, 0], [-2.402, -6.398], [0, 0], [0, 0]], v: [[-22.401, -36.398], [-53.6, -39.597], [-134.401, -100.398], [-155.202, -153.199], [-146.401, -174], [-145.6, -174], [23.201, -234.796], [44.001, -225.199], [61.599, -172.398], [43.201, -79.597], [21.599, -54.796], [107.201, 169.204], [139.201, 169.204], [153.599, 179.602], [158.4, 191.602], [40.798, 238], [36.001, 226], [40.001, 208.403], [63.201, 186]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.956862804936, 0.643137254902, 0.133333333333, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [553.248, 492.932], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 22", np: 2, cix: 2, bm: 0, ix: 22, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-2.402, 24], [-15.203, 6.399], [0, 0], [0, 0], [0, 0], [-5.598, -14.398], [-10.398, -0.801], [0, 0]], o: [[0, 0], [-24, -2.403], [1.598, -16.801], [0, 0], [0, 0], [0, 0], [-14.398, 5.602], [4, 9.602], [0, 0], [0, 0]], v: [[51.199, 48], [-11.199, 40.801], [-50.399, -8], [-22.399, -44.801], [-15.199, -48], [-9.602, -32.801], [-16.801, -29.602], [-32.801, 7.199], [-9.602, 24.801], [52.801, 32]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [419.649, 397.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 23", np: 2, cix: 2, bm: 0, ix: 23, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [4, 8.8], [13.601, -4.8], [0, 0], [0, 0], [0, 0], [-8, -21.601], [9.598, -12]], o: [[0, 0], [0, 0], [6.399, -7.203], [-4.8, -13.598], [0, 0], [0, 0], [0, 0], [21.598, -8.801], [5.601, 14.399], [0, 0]], v: [[-21.203, 64.801], [-34, 55.199], [9.199, 0.801], [13.199, -25.601], [-20.402, -40.801], [-25.203, -39.199], [-30.801, -54.402], [-26, -56], [28.399, -32], [22, 10.399]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.909803981407, 0.509803921569, 0.109803929048, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [627.25, 329.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 24", np: 2, cix: 2, bm: 0, ix: 24, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30, st: 0, bm: 0 }] }, { id: "comp_1", layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Layer 4 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [75, 75, 0], ix: 2 }, a: { a: 0, k: [367.649, 501.335, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 6, s: [100, 100, 100] }, { t: 12, s: [0, 0, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [26.398, 0], [0, -26.402], [0, 0], [0, 0], [-26.398, 0], [0, 26.398]], o: [[0, 0], [0, 26.398], [26.398, 0], [0, 0], [0, 0], [0, -26.402], [-26.398, 0], [0, 0]], v: [[0, -56], [0, -48], [-48, 0], [0, 48], [0, 56], [0, 48], [48, 0], [0, -48]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.956862804936, 0.756862804936, 0.403921598547, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [367.649, 501.335], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 20, st: 0, bm: 0 }] }], layers = [{ ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 1", td: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [269, 281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [500, 500], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [0.074509998396, 0.062744997062, 0.133333004222, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098042488, 0.945098042488, 0.945098042488, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-13, -25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 0, nm: "success (2)", tt: 1, refId: "comp_0", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [199, 256, 0], ix: 2 }, a: { a: 0, k: [483, 483, 0], ix: 1 }, s: { a: 0, k: [80, 80, 100], ix: 6 } }, ao: 0, w: 966, h: 966, ip: 0, op: 30, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Shape Layer 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [269, 281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [500, 500], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [0.074509998396, 0.062744997062, 0.133333004222, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.945098042488, 0.945098042488, 0.945098042488, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-13, -25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 30, st: 0, bm: 0 }], markers = [], success_default2 = { v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers };

// app/components/Success.tsx
import { useDraggable } from "react-use-draggable-scroll";
import { useState, useRef } from "react";

// app/styles/root.css.ts
var text = "root_text__1a58cmf0", root = { color: { BLACK: "var(--color-BLACK__1a58cmf1)", COLOR_01: "var(--color-COLOR_01__1a58cmf2)", COLOR_02: "var(--color-COLOR_02__1a58cmf3)", COLOR_03: "var(--color-COLOR_03__1a58cmf4)", COLOR_04: "var(--color-COLOR_04__1a58cmf5)", COLOR_05: "var(--color-COLOR_05__1a58cmf6)", COLOR_06: "var(--color-COLOR_06__1a58cmf7)", COLOR_07: "var(--color-COLOR_07__1a58cmf8)", COLOR_08: "var(--color-COLOR_08__1a58cmf9)", COLOR_09: "var(--color-COLOR_09__1a58cmfa)", WHITE: "var(--color-WHITE__1a58cmfb)", POINT_01: "var(--color-POINT_01__1a58cmfc)", POINT_02: "var(--color-POINT_02__1a58cmfd)", POINT_03: "var(--color-POINT_03__1a58cmfe)", POINT_04: "var(--color-POINT_04__1a58cmff)" }, color2: { BLACK: "var(--color2-BLACK__1a58cmfg)", COLOR_00: "var(--color2-COLOR_00__1a58cmfh)", COLOR_01: "var(--color2-COLOR_01__1a58cmfi)", COLOR_02: "var(--color2-COLOR_02__1a58cmfj)", COLOR_03: "var(--color2-COLOR_03__1a58cmfk)", COLOR_04: "var(--color2-COLOR_04__1a58cmfl)", COLOR_05: "var(--color2-COLOR_05__1a58cmfm)", COLOR_06: "var(--color2-COLOR_06__1a58cmfn)", COLOR_07: "var(--color2-COLOR_07__1a58cmfo)", COLOR_08: "var(--color2-COLOR_08__1a58cmfp)", GRAY_01: "var(--color2-GRAY_01__1a58cmfq)", GRAY_02: "var(--color2-GRAY_02__1a58cmfr)", BLUE_01: "var(--color2-BLUE_01__1a58cmfs)", BLUE_02: "var(--color2-BLUE_02__1a58cmft)", BLUE_03: "var(--color2-BLUE_03__1a58cmfu)", BLUE_04: "var(--color2-BLUE_04__1a58cmfv)", RED_01: "var(--color2-RED_01__1a58cmfw)" } };

// app/data/contants.ts
var JEONG_BLOG_URL = "https://blog.naver.com/attorney_j2k";
var KONG_BLOG_URL = "https://blog.naver.com/lawyer-kong/";

// app/data/util.ts
var getBlogUrl = (post) => {
  let url = post.url.split("/").slice(-2)[0];
  return post.authors[0].slug === "jiyeon" ? `${KONG_BLOG_URL}/${url}` : `${JEONG_BLOG_URL}/${url}`;
};

// app/components/Success.tsx
import { useRouteLoaderData as useRouteLoaderData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var defaultOptions = {
  loop: !0,
  autoplay: !0,
  animationData: JSON.stringify(success_exports2),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}, SuccessItem = ({ onClick, selected, itemId, item }) => {
  let targetUrl = getBlogUrl(item);
  return /* @__PURE__ */ jsxDEV6("a", { href: targetUrl, target: "_blank", children: /* @__PURE__ */ jsxDEV6(
    "button",
    {
      className: success_example_item,
      style: {
        width: 200,
        height: 300,
        background: "transparent",
        padding: 0,
        border: "none"
      },
      children: [
        /* @__PURE__ */ jsxDEV6(
          "div",
          {
            style: {
              position: "relative",
              width: "100%",
              height: 120,
              borderRadius: 8,
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsxDEV6(
              "img",
              {
                src: item.feature_image,
                loading: "lazy",
                alt: item.title,
                width: 200,
                height: 120,
                style: { opacity: 1, objectFit: "cover" }
              },
              void 0,
              !1,
              {
                fileName: "app/components/Success.tsx",
                lineNumber: 51,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Success.tsx",
            lineNumber: 42,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("div", { style: { height: 120, marginTop: 20 }, children: [
          /* @__PURE__ */ jsxDEV6(
            "p",
            {
              style: {
                fontSize: 16,
                fontWeight: 400,
                color: root.color2.RED_01,
                marginBottom: 8,
                marginTop: 0
              },
              children: item.contentObj.tag
            },
            void 0,
            !1,
            {
              fileName: "app/components/Success.tsx",
              lineNumber: 61,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            "p",
            {
              style: {
                fontWeight: 500,
                fontSize: 18,
                color: root.color2.BLACK,
                position: "relative",
                zIndex: 40,
                height: 40,
                margin: 0
              },
              children: item.contentObj.title
            },
            void 0,
            !1,
            {
              fileName: "app/components/Success.tsx",
              lineNumber: 72,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Success.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Success.tsx",
      lineNumber: 32,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Success.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}, Success = () => {
  let success = useRouteLoaderData2("routes/_index").success, [selected, setSelected] = useState([]), isItemSelected = (id) => !!selected.find((el) => el === id), imageContainerRef = useRef(), { events } = useDraggable(imageContainerRef), handleClick = (item, index) => {
    let itemSelected = isItemSelected(index);
    setSelected(
      (currentSelected) => itemSelected ? currentSelected.filter((el) => el !== index) : currentSelected.concat(index)
    );
  };
  return /* @__PURE__ */ jsxDEV6("section", { id: "success_mobile", className: successSection, children: [
    /* @__PURE__ */ jsxDEV6("div", { style: { position: "absolute", right: 80, top: -16 } }, void 0, !1, {
      fileName: "app/components/Success.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: success_content_area, children: [
      /* @__PURE__ */ jsxDEV6("a", { href: "/success", children: /* @__PURE__ */ jsxDEV6("h2", { className: success_title, children: "\uBCC0\uD638 \uC2B9\uC18C & \uC131\uACF5 \uC0AC\uB840" }, void 0, !1, {
        fileName: "app/components/Success.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Success.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("h3", { className: success_subtitle, children: [
        "\uACF5\uC815\uD55C \uBCC0\uD638\uC0AC\uB4E4\uC774",
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/components/Success.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        "\uCD5C\uC801\uC758 \uBC29\uBC95\uC73C\uB85C",
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/components/Success.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        "\uB2F9\uC2E0\uB9CC\uC744 \uC704\uD574 \uC2F8\uC6B4 \uACB0\uACFC\uC785\uB2C8\uB2E4."
      ] }, void 0, !0, {
        fileName: "app/components/Success.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(
        "div",
        {
          className: success_item_container,
          ref: imageContainerRef,
          ...events,
          children: /* @__PURE__ */ jsxDEV6("div", { className: success_item_content_container, children: success.map((item, index) => /* @__PURE__ */ jsxDEV6(
            SuccessItem,
            {
              onClick: () => {
                handleClick(item, index);
              },
              itemId: index,
              item,
              selected: isItemSelected(index)
            },
            index,
            !1,
            {
              fileName: "app/components/Success.tsx",
              lineNumber: 148,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Success.tsx",
            lineNumber: 145,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Success.tsx",
          lineNumber: 140,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Success.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Success.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
}, Success_default = Success;

// app/styles/mobileStyle.css.ts
var mainSection = "mobileStyle_mainSection__1dw659v1";
var main_title_area = "mobileStyle_main_title_area__1dw659v5";
var place_section = "mobileStyle_place_section__1dw659v9";
var main_words_list_container = "mobileStyle_main_words_list_container__1dw659vi";
var main_words_list_item = "mobileStyle_main_words_list_item__1dw659vk", mail_bottom_sheet_container = "mobileStyle_mail_bottom_sheet_container__1dw659vl", place_content_area = "mobileStyle_place_content_area__1dw659vm";

// app/assets/lottie/law.json
var law_default = { v: "5.2.1", fr: 60, ip: 0, op: 120, w: 800, h: 600, nm: "Comp 1", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 44", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [652, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [-100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[81.625, 199.625], [64.5, 188.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [2.375, -1], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[73, 205.75], [62.25, 199.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [2.375, -1], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[81, 203.25], [55.25, 186.75]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 2, lj: 2, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 83, s: [0], e: [100] }, { t: 87 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 79, s: [0], e: [100] }, { t: 83 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 4, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Shape Layer 43", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [400, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[81.625, 199.625], [64.5, 188.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [2.375, -1], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[73, 205.75], [62.25, 199.25]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [2.375, -1], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[81, 203.25], [55.25, 186.75]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, lc: 2, lj: 2, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "tm", s: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 83, s: [0], e: [100] }, { t: 87 }], ix: 1 }, e: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 79, s: [0], e: [100] }, { t: 83 }], ix: 2 }, o: { a: 0, k: 0, ix: 3 }, m: 1, ix: 4, nm: "Trim Paths 1", mn: "ADBE Vector Filter - Trim", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Shape Layer 42", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 45, ix: 10 }, p: { a: 0, k: [515.625, 509.875, 0], ix: 2 }, a: { a: 0, k: [203.125, 200.625, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [1, 1, 0.667], y: [1, 1, 1] }, o: { x: [1, 1, 0.333], y: [0, 0, 0] }, n: ["1_1_1_0", "1_1_1_0", "0p667_1_0p333_0"], t: 65, s: [0, 0, 100], e: [191.465, 191.465, 100] }, { i: { x: [1, 1, 0.667], y: [1, 1, 1] }, o: { x: [0, 0, 0.333], y: [0, 0, 0] }, n: ["1_1_0_0", "1_1_0_0", "0p667_1_0p333_0"], t: 77, s: [191.465, 191.465, 100], e: [191.465, 191.465, 100] }, { i: { x: [0, 0, 0.667], y: [1, 1, 1] }, o: { x: [0, 0, 0.333], y: [0, 0, 0] }, n: ["0_1_0_0", "0_1_0_0", "0p667_1_0p333_0"], t: 81, s: [191.465, 191.465, 100], e: [0, 0, 100] }, { t: 90 }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[194.75, 191.5], [199.5, 200.25], [194.75, 209.75], [204, 205.25], [212.25, 209.75], [207.5, 199.75], [212.25, 191.25], [202.997, 195.882]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [203, 201], ix: 2 }, a: { a: 0, k: [203, 201], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 3, nm: "Null 2", sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 1, k: [{ i: { x: [0], y: [1] }, o: { x: [1], y: [0] }, n: ["0_1_1_0"], t: 56.5, s: [30], e: [0] }, { t: 84 }], ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.333, y: 0 }, n: "0_1_0p333_0", t: 0, s: [1055, 454.5, 0], e: [734, 454.5, 0], to: [-64.5, -44, 0], ti: [102.5, -71, 0] }, { t: 56.5 }], ix: 2 }, a: { a: 0, k: [46.959, 54.054, 0], ix: 1 }, s: { a: 0, k: [296, 296, 100], ix: 6 } }, ao: 0, ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Shape Layer 36", parent: 4, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-64.865, 1.689, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [33.088, 33.784, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [63.75, 54.25], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 10, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.823529471603, 0.635294117647, 0.235294132607, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [125.875, 154.875], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Shape Layer 39", parent: 4, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-65.878, 1.689, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [33.784, 33.784, 100], ix: 6 } }, ao: 0, shapes: [], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Shape Layer 40", parent: 4, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-65.878, 1.689, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [33.784, 33.784, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 12.25]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, -12.25]], v: [[332, 142], [180.25, 146.25], [174.75, 161.5], [331.5, 166.25], [343.5, 155.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [7.25, 30.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [179.125, 155], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 3", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [17.75, 23.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [166.875, 154.375], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 2", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [7.25, 40.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [159.875, 155.125], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 4, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Shape Layer 38", parent: 4, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-65.878, 1.689, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [33.784, 33.784, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [79.25, 22.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [126.125, 107.75], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 2", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [79.25, 22.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [126.125, 201], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "Shape Layer 37", parent: 4, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [-65.878, 1.689, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [33.784, 33.784, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [53.25, 75.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [125.875, 154.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [57.125, 3.125], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [126.063, 185.813], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 2", np: 4, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [57.125, 3.125], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 6, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [126.063, 123.813], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 4, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 10, ty: 4, nm: "Shape Layer 24", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 355.5, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [75.58, 75.58, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[279.375, 216.625], [110.875, 216.625], [110.844, 220.531], [279.375, 220.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313732386, 0.190177187324, 0.097962319851, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [8.25, 0], [0, 0], [0, 0], [0, 0], [0, 7]], o: [[0, 0], [-8.25, 0], [0, 0], [0, 0], [0, 0], [0, -7]], v: [[283, 220.5], [112, 220.5], [102.75, 227.75], [102.75, 239], [290.75, 240.5], [290.75, 229.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.248759610045, 0.202998845717, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [18.75, 8.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [89.607, 89.607], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [8.25, 0], [0, 0], [0, 0], [0, 0], [0, 7]], o: [[0, 0], [-8.25, 0], [0, 0], [0, 0], [0, 0], [0, -7]], v: [[283, 220.5], [112, 220.5], [102.75, 227.75], [102.75, 239], [290.75, 240.5], [290.75, 229.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.345098039216, 0.248759610045, 0.202998845717, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 4, nm: "Shape Layer 23", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [3, 0], [0, 0], [0, 0.5]], o: [[0, 0], [-3, 0], [0, 0], [0, -5.5]], v: [[-120.5, 90], [-169.5, 90], [-173.25, 96.25], [-116.25, 96.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.57647061348, 0.352941185236, 0.21960785985, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [2.5, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [244, 6.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.262745112181, 0, 0.06274510175, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-143.5, 106.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[47.5, 0], [16, -2.5], [0, 0], [0, 0], [0, 0], [-0.75, 0], [0, 0], [0, 0], [0, 0], [0, 9], [0, 0], [0, 5], [0, 0]], o: [[-47.5, 0], [-4.747, 0.179], [0, 0], [0, 0], [0, 0], [-8, 0], [0, 0], [0, 0], [0, 0], [0, -9], [0, 0], [0, -5], [0, 0]], v: [[-139.5, 81.25], [-257.75, 90], [-265, 97.75], [-265, 107.75], [-265.063, 110.25], [-267.75, 110.25], [-277.75, 118.25], [-277.75, 127.75], [-7.25, 127.75], [-7, 118.75], [-21.25, 110.5], [-21.25, 100.5], [-28, 92.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 12, ty: 4, nm: "Shape Layer 20", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [35.5, 19], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-143, -75.75], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [29.464, 29.464], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 2", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [35.5, 19], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313762188, 0.227450996637, 0.152941182256, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-143, -75.75], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 13, ty: 4, nm: "Shape Layer 17", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [46.838, 43.676, 0], ix: 2 }, a: { a: 0, k: [-17.5, -225.5, 0], ix: 1 }, s: { a: 0, k: [11.988, 11.988, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 14, ty: 4, nm: "Shape Layer 14", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [45.059, 44.664, 0], ix: 2 }, a: { a: 0, k: [-17.5, -225.5, 0], ix: 1 }, s: { a: 0, k: [11.988, 11.988, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 15, ty: 4, nm: "Shape Layer 19", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [234, 182, 0], ix: 2 }, a: { a: 0, k: [-17.5, -225.5, 0], ix: 1 }, s: { a: 0, k: [30.329, 30.329, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 16, ty: 4, nm: "Shape Layer 18", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [251.625, 412.5, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 17, ty: 4, nm: "Shape Layer 16", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [54.743, 135.771, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 18, ty: 4, nm: "Shape Layer 13", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [52.964, 135.771, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [19.75, 19.75], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 2", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-17.375, -224.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [122.281, 122.281], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 4, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 19, ty: 4, nm: "Shape Layer 12", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.81568627451, 0.81568627451, 0.81568627451, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 2, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 20, ty: 4, nm: "Shape Layer 15", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -22.992, ix: 10 }, p: { a: 0, k: [241.75, 71.25, 0], ix: 2 }, a: { a: 0, k: [-144, -214, 0], ix: 1 }, s: { a: 0, k: [18.987, 18.987, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [48.5, 48.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.576470588235, 0.352941176471, 0.219607858097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-143.75, -212.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [80.583, 126.804], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 21, ty: 4, nm: "Shape Layer 11", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [48.5, 48.5], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.380392186782, 0.227450995352, 0.149019607843, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-143.75, -212.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [80.583, 126.804], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 22, ty: 4, nm: "Shape Layer 10", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 0, s: [2], e: [-2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, n: ["0p667_1_0p333_0"], t: 60, s: [-2], e: [2] }, { t: 119 }], ix: 10 }, p: { a: 0, k: [234, 79.75, 0], ix: 2 }, a: { a: 0, k: [-135.5, -220.25, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-7.5, -231.5], [-262.5, -231.5], [-261.5, -219], [-135, -207], [-7.5, -219]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.262745098039, 0, 0.062745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 23, ty: 4, nm: "Shape Layer 41", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 301.5, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [145.21, 100.851, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [663, 11], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [2.5, 240.5], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 24, ty: 4, nm: "Shape Layer 1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 301.5, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [111.677, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [14.775, 226], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.262745098039, 0, 0.062745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-128.72, -148], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 2", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 25, ty: 4, nm: "Shape Layer 9", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.25, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0]], v: [[-207.75, 175.25], [-211.25, 194.25], [-204, 194.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921604156, 0.254901975393, 0.015686275437, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 26, ty: 4, nm: "Shape Layer 8", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-147.25, 159.75], [-157.5, 159.75], [-161, 188], [-166.25, 160.75], [-172.75, 160.75], [-178.75, 188], [-181.5, 161.25], [-189.75, 161.25], [-185.5, 210.75], [-175.75, 210.75], [-169.75, 183.75], [-164.25, 210.5], [-154.75, 210.5]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 0.564705882353, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-201.75, 160.5], [-211.75, 160.5], [-223.5, 210.25], [-213.75, 210.25], [-212.5, 200.5], [-201.25, 200.5], [-199.5, 209.75], [-190, 209.75]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 0.564705882353, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-241.5, 161.25], [-250.75, 161.25], [-250.25, 210.5], [-226.25, 210.5], [-226.25, 201.75], [-241.5, 201.75]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.882352941176, 0.466375134038, 0.062283732844, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 0.564705882353, 0, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 27, ty: 4, nm: "Shape Layer 6", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 302.5, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-66.5, 162], [-66.5, 163.75], [114.813, 163.75], [114.813, 162.188]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.678431372549, 0.678431372549, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 28, ty: 4, nm: "Shape Layer 5", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 339, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-66.5, 162], [-66.5, 163.75], [114.813, 163.75], [114.813, 162.188]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.678431372549, 0.678431372549, 0.678431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 29, ty: 4, nm: "Shape Layer 3", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[13.25, -1.5], [1.75, -43.75], [-37.25, 0], [0, 27.25], [0, 0]], o: [[-13.25, 1.5], [-1.75, 43.75], [-29.75, 0], [0, -27.25], [0, 0]], v: [[-100, 135], [-112.25, 191.5], [-65.75, 233.25], [-92.25, 167.75], [-75.25, 134]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921568627, 0.253869598987, 0.017424067329, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 30, ty: 4, nm: "Shape Layer 7", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [158.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -29.5], [0, 0]], o: [[0, 0], [0, 29.5], [0, 0]], v: [[-113.5, 142], [-119, 181.5], [-116, 227.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.882352941176, 0.466375134038, 0.062283732844, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 31, ty: 4, nm: "Shape Layer 4", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -29.5], [0, 0]], o: [[0, 0], [0, 29.5], [0, 0]], v: [[-113.5, 142], [-119, 181.5], [-116, 227.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.882352941176, 0.466375134038, 0.062283732844, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -29.5], [0, 0]], o: [[0, 0], [0, 29.5], [0, 0]], v: [[-113.5, 142], [-119, 181.5], [-116, 227.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.882352941176, 0.466375134038, 0.062283732844, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [14, -22.25], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-14, 22.25], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-55, 134.5], [-97.5, 150], [-93.5, 230], [109.75, 229.75], [109.75, 203], [115.5, 203], [115.5, 190.5], [115.5, 164], [119.25, 164], [119.25, 135.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 32, ty: 4, nm: "Shape Layer 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [318.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [236.75, 10], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921568627, 0.253869598987, 0.017424067329, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [6.375, 231.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 2", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "rc", d: 1, s: { a: 0, k: [236.75, 10], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 20, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921568627, 0.253869598987, 0.017424067329, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [6.375, 132.75], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Rectangle 1", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0]], o: [[0, 0]], v: [[118, 138.75]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921568627, 0.253869598987, 0.017424067329, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, -57.5], [0, 0], [0, 0], [0, 48.5]], o: [[0, 0], [0, 0], [0, 40.5], [0, 0], [0, 0], [0, -39.5]], v: [[-90.5, 127.5], [-273, 128], [-290.5, 188.5], [-276.5, 236.5], [-91.5, 236.5], [-104, 177]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 7, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.403921568627, 0.253869598987, 0.017424067329, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 4, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 33, ty: 4, nm: "Shape Layer 22", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -10.981], [-20.5, 0], [0, 47], [19.923, 0]], o: [[0, 40.75], [19.25, 0], [0, -10.863], [-24.077, 0]], v: [[-169.25, 32.75], [-143, 91], [-116.25, 28.25], [-141.923, 75.544]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.262745098039, 0, 0.062745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 34, ty: 4, nm: "Shape Layer 21", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [378.5, 300, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -40.75], [-20.5, 0], [0, 47]], o: [[0, 0], [0, 40.75], [19.25, 0], [0, -47]], v: [[-143.25, -54.5], [-169.25, 32.75], [-143, 91], [-116.25, 28.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.384313755409, 0.227450995352, 0.152941176471, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 35, ty: 3, nm: "Null 1", parent: 22, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [-2], e: [2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [2], e: [-2] }, { t: 119 }], ix: 10 }, p: { a: 0, k: [-262.02, -226.206, 0], ix: 2 }, a: { a: 0, k: [47.818, 46.361, 0], ix: 1 }, s: { a: 0, k: [253, 253, 100], ix: 6 } }, ao: 0, ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 36, ty: 4, nm: "Shape Layer 28", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-237.863, -81.25], [-244.375, -67.125], [-232.25, -67.125], [-226.113, -80.875]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490196078, 0.845644004672, 0.308496722053, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 37, ty: 4, nm: "Shape Layer 26", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [46.443, 113.439, 0], ix: 2 }, a: { a: 0, k: [-274.5, -75.5, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-223.3, -81.031], [-229.781, -66.969], [-227.25, -67.25], [-220.613, -81.031]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-246.113, -81], [-252.625, -67.125], [-249, -67.25], [-242.488, -81]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-6.75, 0], [-9.25, 0]], o: [[0, 0], [0, 0], [0, 0], [6.75, 0], [9.25, 0]], v: [[-209.75, -81.5], [-248.25, -81.5], [-337.75, -81.5], [-331.75, -67.25], [-218.5, -67.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.823529411765, 0.636824783624, 0.235755471622, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 38, ty: 4, nm: "Shape Layer 27", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [46.443, 116.601, 0], ix: 2 }, a: { a: 0, k: [-274.5, -75.5, 0], ix: 1 }, s: { a: 0, k: [36.531, 36.531, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-6.75, 0], [-9.25, 0]], o: [[0, 0], [0, 0], [6.75, 0], [9.25, 0]], v: [[-209.75, -81.5], [-337.75, -81.5], [-331.75, -67.25], [-218.5, -67.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.666666666667, 0.41697809556, 0.149019592884, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 39, ty: 4, nm: "Shape Layer 30", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-335, -78.5], [-273.5, -243.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 2, lj: 2, d: [{ n: "d", nm: "dash", v: { a: 0, k: 1, ix: 1 } }, { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } }, { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }], nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 40, ty: 4, nm: "Shape Layer 29", parent: 35, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-214.5, -78.5], [-273.5, -243.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 2, lj: 2, d: [{ n: "d", nm: "dash", v: { a: 0, k: 1, ix: 1 } }, { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } }, { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }], nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 41, ty: 3, nm: "Null 1", parent: 22, sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 0, s: [2], e: [-2] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, n: ["0p833_0p833_0p167_0p167"], t: 60, s: [-2], e: [2] }, { t: 119 }], ix: 10 }, p: { a: 0, k: [-10.191, -221.419, 0], ix: 2 }, a: { a: 0, k: [45.379, 48.253, 0], ix: 1 }, s: { a: 0, k: [253, 253, 100], ix: 6 } }, ao: 0, ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 42, ty: 4, nm: "Shape Layer 33", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-237.875, -82.125], [-244.375, -67.125], [-232.25, -67.125], [-226.125, -81.75]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490196078, 0.845644004672, 0.308496722053, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 43, ty: 4, nm: "Shape Layer 32", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [46.443, 113.439, 0], ix: 2 }, a: { a: 0, k: [-274.5, -75.5, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-223.281, -81.469], [-229.781, -66.969], [-227.25, -67.25], [-220.594, -81.531]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 3", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-246.125, -81.625], [-252.625, -67.125], [-249, -67.25], [-242.5, -81.375]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 2", np: 3, cix: 2, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-6.75, 0], [-9.25, 0]], o: [[0, 0], [0, 0], [0, 0], [6.75, 0], [9.25, 0]], v: [[-209.75, -81.5], [-248.25, -81.5], [-337.75, -81.5], [-331.75, -67.25], [-218.5, -67.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.823529411765, 0.636824783624, 0.235755471622, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 3, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 44, ty: 4, nm: "Shape Layer 31", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [46.443, 116.601, 0], ix: 2 }, a: { a: 0, k: [-274.5, -75.5, 0], ix: 1 }, s: { a: 0, k: [36.531, 36.531, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-6.75, 0], [-9.25, 0]], o: [[0, 0], [0, 0], [6.75, 0], [9.25, 0]], v: [[-209.75, -81.5], [-337.75, -81.5], [-331.75, -67.25], [-218.5, -67.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [1, 1, 1, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 1, lj: 1, ml: 4, ml2: { a: 0, k: 4, ix: 8 }, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !0 }, { ty: "fl", c: { a: 0, k: [0.666666666667, 0.41697809556, 0.149019592884, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 45, ty: 4, nm: "Shape Layer 35", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-335, -78.5], [-273.5, -243.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 2, lj: 2, d: [{ n: "d", nm: "dash", v: { a: 0, k: 1, ix: 1 } }, { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } }, { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }], nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 46, ty: 4, nm: "Shape Layer 34", parent: 41, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [154.941, 143.281, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [39.526, 39.526, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[-214.5, -78.5], [-273.5, -243.5]], c: !1 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "st", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 3, ix: 5 }, lc: 2, lj: 2, d: [{ n: "d", nm: "dash", v: { a: 0, k: 1, ix: 1 } }, { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } }, { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }], nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.925490255917, 0.847058883368, 0.309803921569, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !0 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Shape 1", np: 3, cix: 2, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 120, st: 0, bm: 0 }, { ddd: 0, ind: 47, ty: 1, nm: "Medium Gray-Blue Solid 1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [400, 300, 0], ix: 2 }, a: { a: 0, k: [640, 360, 0], ix: 1 }, s: { a: 0, k: [62.5, 111.111, 100], ix: 6 } }, ao: 0, sw: 1280, sh: 720, sc: "#2e49a0", ip: 120, op: 120, st: 0, bm: 0, hidden: 0 }], markers: [] };

// app/assets/lottie/click.json
var click_default = { v: "5.7.6", fr: 30, ip: 0, op: 119, w: 500, h: 500, nm: "click", ddd: 0, assets: [{ id: "image_0", w: 500, h: 500, u: "", p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAOP0lEQVR4nO3d3XEbyREA4B6X3ylHIDgC0REIF4HpCARHYDqCw2XAi0BQBMeLwLgITEVgKAMwgvbDLn3ynSSCAHZmd/F9VXoRq3Z6VhQa89cTAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAZSmtAwBeJjNXEbGMiEVEvP3sR79ExC4ithFxX0rZ140MAPimzHyVmevM3OfhNpn5qnXsAEBEZObyhYn8c/t+RA8AtJKZqyMT+e9G6637AgAX6YzJ/Mld6z4BwEXJbpp9CDet+wYMwy53GKHM3EXE6wEe/RgRCzvgYX7+2DoA+Jbsdmlf93+edmzvImJXStk2CmtQ2W1iGyKZR0RcRcRtRKwHej4A/Cq79eOHA6aQN5m5bB3vOWXmbqDp9idG5wAMKzNvjkxo28xctI7/VJl5fdbU/XXW0mFm/tA6AHiS3S7sn+K46ea3EfGQ0z9zvarUznWldgC4JNlNnZ/LqnV/jpXDT7c/2bbuK3BeRug0l93I/N0ZH/k+JzilnJnXMdxmOGDmJHSaym5D2z8GePQU65jftg4AmC4JndY2Az33KiKmVhltcrMKwHhI6DTTT4sPOcX8rp/GHr3+XVxVbNLRNZgZCZ2WVhXamMoovfbofFu5PWBgSr/STGZmpaa+G3tVueyKvdQcof+llPJQsT1gYEboNJF1q7uNepTeYLr9k2QO8yOhcwnejPxs+qpye6P+ggMcR0KnlUXl9tZjPMbWx/TXys3eV24PqEBCp5Xau6xfxzjPedfeDPexlLKr3CZQgYROKy2OTd2OcJReO6FvKrcHVCKh08quQZtXMaJ7wE23A+ckodNEP+37qUHT/8jxXLNquh04GwmdllqNFseyy3tVub2x9BsYgMIyNNOPlP/TqPmmxWYa9f1PpRQlX2GmjNBppp/+/dCo+XWjdp/Unm7/WTKHeZPQaW0dEY8N2n3b+M70VeX2bIaDmZPQaaofpbda223Sbj/d/qZysxI6zJyEzhjcRZtR+uvMbFFsxnQ7APOUmbfZxr52sZnM3FXuY8ulBaASI3RGoZRyF23OpV9FxZKwmXkdXRnaWh5LKabb4QJI6IxJq1rr32e9YjPLSu08kczhQkjojEY/kvylUfPrSu0sK7XzREKHCyGhMzbrRu2+66fDh1Zzvd50O1wQCZ1R6au3tSo2M7fSqJI5XBAJnTFaN2r3bcW19Bo2rQMA6pHQGZ2+2MyPjZpfNWr33D61rFX/Epm5zMy7zHz4wpG7XWbeZ+Yqx3eXPQDPycxX2Z0Rr207cL/Wlfox+uWDzLzJl53J32f3/iR2gCnJesnv/wzcp2WlbtTY4HeU7L6s3Z/Qt31mLlv3A8bG9amMWmbuom4hliilDPr/IjP30RW0GcqnUspiwOcfrU/E93Ge/v+9lLI5w3NgFqyhM3br1gEMYOjp8PXAz3+xflR+FxH/ivN9mXmfytrC/xihM3qZ+RAVbyerMEJ/FRG7GGaUPrrReT/9v4lh/g0fI+K630gJF80InSmoWRJ28Fvf+pvPVgM9fqjnHiUz1xHx7xjuC9lVOJ4HMB2ZuT1hE9VLbCv26dyb/la1Yn9OZi7yy8fQhrJs3WcADtAniBqqXhCT3fnrc1jVjPtbsrsKt/aRw03rfgNwoMzcVEgMiwb9usnjE+AuRzI6zdOPo52kdf8BOFB2o/QhR36bhn17ld0XlkP7N6oiK3nal5JzWbZ+DwAcKIcrNrPPEdRxzy6xr7JL7tvfxLft/340R7X6eM+1bHCqVev3AcAL5DCbrVat+zU1mXmdLyvdOrR163cCLTm2xhQtI+LjGZ/3QcWxl8lfj6NVreIHfJ2EzuT057iXcZ6k/mMpZXWG51yE7EblDxHxfetYAJiJPG39dp8jWouegmxzHO0llq3fEQAnyG73+6FH2nY5ot3hU5DdF6dahX1O4d+Ui6aWO7PRf6AvI+K6//P0Ab/r/9yXUh5axDZV2dVh38awt8Odw8dSymivjIUaJHTgi7I7xvcQ40/mEa5SBQn9EvSjrFV0o9a3v/nxY3Qf2vfRjWB3VYNjtLLyLXcnGN0NcwBnld2O5JeufW7S5qKLl8MV8BmCzY3AfOXpH8jbVGzlImW3CW7Mu9k/t2n9vgAGkee/IMOu8AuT3fG0Kdi0flcAg8nhbiTb989etO4jw8q695gfa9P6PQEMJuute96ndfbZqvQ7dCwFgYB5y664Sm0PaZ19VjJz2eD36FDbNEMEX6WW+3ysG7T5JiLe58ju5mZ2HiPin6WUpWOVwKxltxFuLKyzT1iOb4T+kF0dBeAZRujzMKY1xXcR8Z/spkfHFBfT80Mp5Vq5XjiMhD4Py9YBfMHbiPgpu2NvqzQdPxX71gFExKeI+K6Usm4dCEyJhD4Pi9YBfMPriHgfEbvMXDeOhWf0o+HHhiF8iIjrUsq2YQwwSRI6tVxFxPfWRCdh26DNx4j4WyllVUoZwywBTI6ETm1vImIrqY/apnJ7P0fEopRyX7ldmBUJnRauQlIfrT6xfqrQ1NNxtBujcjidhD4PU/wwvIqIjc1yo7Ua+Pkfo1srvxu4HbgYEvo8bFsHcKQ3EXHbOgh+r9+U9uNAj386jrYb6PlwkUrrADhdP3X979ZxHOkxuvXTKc4yzF52l6C8O9PjPkXEjXPlMAwj9BnoPyB/aR3Hka5i+OldjlRKWUV3lOxUP0Y3xS6ZA3xLZt5UL8p5Pj7kRy6736/9Ef+2u3QzH8DLZFdudZJavzuel92dAbfZJennuIkPKrOGPiPZ7RjfRTeNPTXfqQ42HdldwLOM31cp3EXE1oY3qE9Cn5nsNshtY3pJXUIHOIFNcTPTbzpaRnfOF4ALIaHP0GdJfahzxACMjCn3mevXOtfR3Zk+5mn4PzmLDnA8Cf1C9BvmVtFVZnvdNprf+VRKWbQOAmDKTLlfiFLKvpRy1yfOv8e4CtFsWwcAAJOVmcvM3AxzsvxF3LoGAKfKzEVmrvO4SmCn2rbuPwDMSnaVwFZ5WCWwc9hnt2kPABhCdrW7hy4lu2rdTwC4CJl5ncOss69a9w0ALk520/HnWmdfte4PAFy8PH6dfZt2tAPAuGR37O3+mSS+z27Kftk6XoA5UymOs+gT9quIeBqBP0TErq8rDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjEBpHQDzkJnXEXEdEYvf/GhbStlWDwgAOExmLjLzLjN3+bz7zFy2jhkA6GXmTZ+gj7HNzEXrPgDARepH4+sDR+PP2WfmTes+AcDFyMxlZm7OkMS/ZNW6fwAwW5n5KjNv8zyj8edct+4vAMxKDjsa/5pdZr5q3XcAmLTsRuOrzHyonMg/t279HgCmzjn0C5XdVPdtRNxExFXjcB5LKUbpAHCofjS+bTga/xq73gFO8IfWATC8/LUAzD4i3kfE29YxfYGEDnCCP7YOgOFkV8BlHRHv2kZykEXrAACmzBr6TPVT2Jtovz5+sFKK30eAI5lyn6HsCrb8FBNK5gCcRkKfmT6Zv28dBwB1Segz0q+Z37WO40gfWwcAMGUS+rxsYrrT7LvWAQBMmYQ+E9ndNT7G42iH2rYOAGDKJPT5WLUO4ET3rQMAmDIJfT6mXJjlQyll1zoIgClz7ncG+un2f7WO4wR/ltABTmOEPg9TvtjkB8kc4HQS+jxctw7gSB9KKevWQQDMgYROKx9KKavWQQDMhYQ+D7vWAbzQD5I5wHm5bW0edq0DONDPEbEupTy0DgRgbuxyn4nMzNYxfMVjdBXs7mx+A4BnZOZ9jss2u4tiAIBDZeaqdQbPzH1mbrK7JAYAOEZmPjRK5A/ZfaGY8nl4ABiHzFxWTuSbzJzqGXgAGK/MXA+cxHeZeZtG4wAwrH7kfG6b7GrGAwC19KPoU+2yG/EvWvcHAC5WZl5nd3zspe4zc8rXsQLA/GS3WW6T3bGyb43G74zGAaZJpbgL0yfsxW/++qGUsq8fDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDf8FG1Dvozk1zj8AAAAASUVORK5CYII=", e: 1 }, { id: "image_1", w: 500, h: 500, u: "", p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAZm0lEQVR4nO3d4XEbx7Yu0N233n8pA/FGIDoCwRGIjkBwBKYjMByB6QgMRWAqAlMRmIrgwRlQEez7Y4Y2LJMSRU6jpwdrValOnTquRg98Sh+6p/fuCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuUFpPAHqTmc8j4jQiVhFxsvfnxR3/+IeIuImIXURcR8R1KeWq+iSBoyPQ4QEy8zQizsY/LycY8n1EXEbEZSllN8F4AMBdMvN5Zq4z8zrruh4/53nrZwaAxRiDfJOZN5WD/FM34+cKdgB4inGlfOgg/5RgB4DHyMyTzLxqm+P/scvMs9bfDQB0IeexKv+cy7RaB4D7Zea2dVo/0E1mrlp/X8B8/U/rCUALORx8u46IN63n8kDPIuKPzNy0nggwT+rQOTo5bF9fxTT15C28j4i1+nVgn0DnqCwgzG99jCHUL1tPBJgHW+4cm8voP8wjhi343zPzIh2YA0Kgc0Qy8yIiXrWex8R+iIirHFrTAkfMljtHIYd67t9bz6OijxFxXkrZtp4I0IZAZ/HGLeldDNvUS/cuhnfrN60nAhyWLXeOwTaOI8wjIl5HxLUteDg+Ap1FG5uxvG49jwN7ERF/ZuZ564kAh2PLnUXLzF0MAXes3kfEmS14WD4rdBYrM9dx3GEeMZzq32kbC8tnhc5iWZ3/x6+lFNvwsFACnUUaV6R/HOjj/oqh+9xu/M+IiOcRcTr+WcV8DuV9iGELftd6IgDwRXmYW9Su8oH3lWfmWc7nvvWbdM86AHOXw01qswzEzFxl5nXl+T3UNrWNBWCuMnNdMQSvM/NkgjluKs7xa6hZB2Cest52+3VOuKLNzNPM3FWa69dyWA6AeclhS3xqN1lhJZvD64HLCvN9jMu0BQ/AHGTmSaWw21Se9zrr/BD5WmrWAWgv67w/3x1o7qc5nwNzm0M8MzAdneJYmpMKY15UGPM/SinXpZTTiPj1EJ/3BT/lUGZnCx6Aw8s6td4HD7Uc6tbnsAWvZh06YYUOn/ehxcUmpZTLGLrMvT/0Z3/iWUT8npkH2aUAgIiIqLBC3czgmdSsA19khQ6ft2s9gVLKJiK+jYiPjafyMiKucrjFDpgZgQ6ft2s9gYiIUspVDAf+3rWdSTyLiN9S21iYHYEOnSil3JRSziLix9ZziYg3EWELHmZEoENnSikXEfFNDFehtvQiIv5MbWNhFgQ6dKiUch3DPetvG08lIuKX1DYWmhPo0KlxC34dEd9H+wNzryNC21hoSKBD50op2xhq1ltvwT+LiD9yBqV+cIwEOixAKWU3s7axk9wbDzycQIcFKaWcR8R30X4L/mUMp+C1jYUDEeiwMGPb2JOYUdtYB+agPoEOCzQemFtFxM+t5xIRP8TQYU7NOlQk0GHBxrax30TEX42nom0sVCbQYeHGmvXTmE/bWDXrUIFAZzEqbenuKox5cJ+0jW19YO51aBsLkxPoLMnkq75Sym7qMVsa28auon3N+m3b2E3jecBiCHQ4MnttY+dSs35lCx6eTqDDERq34OdSs/4qtI2FJxPocMTGmvU5tY29aDwP6JZAhyO31zZ2FjXr2sbC4wh0ICL+rln/Ntpvwd+2jV03ngd0RaADfyulXMV82sb+lplbB+bgYQQ68C97bWN/bD2XiHgT2sbCgwh04E5jzfpc2sb+mZnnjecBsybQgXvttY1923ouEfGLtrFwP4EOfNa4Bb+OiO+j/YG527axq8bzgNkR6MCDlFK2MZ+2sX9oGwv/JtCBByulXI8163NqG3vSeiIwBwId+Gozaxt7nZlnjecBzQl04FH22sbOoWb9d21jOXYCHXi0sW3sKubVNlbNOkdJoANPttc2dg4161faxnKMBDowibFt7GlEvGs8FW1jOUoCHZjMWLN+FvNpG2sLnqMh0IHJ7bWNnUPNuraxHAWBDlQxto1dxXzaxl7ZgmfJBDpQzczaxr6KiJ22sSyVQAeqG9vGnkb7LfhnoW0sCyXQgYMYa9bn1Db2WttYlkSgAwc1to39Ntpvwb8MbWNZEIEOHNxYs34S82kbq2ad7gl0oInxwNwq5tE29k0MHebUrNMtgQ40NbaN/Sbm0zZWzTpdEuhAc2PN+lzaxv6SmZe24OmNQAdmYa9t7Bxq1l+HtrF0RqADszLWrK+ifc36bdvYTeN5wIMIdGB29trGzqVmXdtYZk+gA7M0bsGfR8R30X4L/rZtrJp1ZkugA7NWSrmM+bSN/T0zLxrPA+4k0IHZ22sbO4ea9R+0jWWOBDrQjbFmfU5tY9eN5wF/E+hAV/baxs6hZv03bWOZC4EOdGevZv3H1nOJoW2smnWaE+hAt0opFzGPtrG3NevaxtKMQAe6ttc29m3ruYS2sTQk0IHujVvw65hP29hdZq4az4MjI9CBxZhR29hnEfGHtrEckkAHFqWUcj3WrM+pbexJ64mwfAIdWKSZtY291jaW2gQ6sFhj29iTiHjfeCp/t411YI5aBDqwaOOBuVXMpG1sRFypWacGgQ4chb22sa1r1l/GEOrrxvNgYQQ6cDTGtrGnMZ+2sWrWmYxAB47KJ21jWx+Yex3axjIRgQ4cpbFt7Cra16zfto3dNJ4HnRPowNEa28auYh5tY29r1m3B8ygCnSU5mXi81tuxHMBe29i51KxrG8ujCHSW5GTi8a4nHo8ZG2vWT6P9Fvxt29iLxvOgMwIdYFRK2c2obewPmXmtbSwPJdABPjG2jf022m/Bv4zhFPy68TzogEAHuMNYs34S82gb+1tmbh2Y43MEOsA99trG/th6LhHxJrSN5TMEOsAXjDXr38Q82sb+mZnnjefBDAl0gAcYa9bn0DY2IuIXbWP5lEAHeKC9trHfR/sDc7dtY1eN58FMCHSAr1RK2cZ82sb+oW0sEQId4FFKKdczqlm/bRt70noitCPQAZ5grFmfS9vY68w8azwPGhHoAE+01zZ2DjXrv2sbe5wEOsAExraxq4j4ufVc4p+2sWrWj4hAB5hQKWUTQ9vYOdSsX2kbezwEOsDExraxc6hZ1zb2iAh0gAr2atbn1DZWqC+YQAeoaK9tbOua9ZcRsfNefbkEOkBlY9vYVUS8bTyVZ+GCl8US6AAHMG7Br6N921ihvlACHeCAxraxp9F2C16oL5BABziwsWa9ddvYZxHhxrYFEegAjYxtY7+NdlvwLyLiqtFnMzGBDtDQWLN+Eu3axr7UKnYZBDpAY+OBuVW0axv7g3vV+yfQAWZibBv7TbRpG6ubXOcEOsCMjDXrLdrGvoiIzYE/kwkJdICZ2Wsbe+ia9R+UsvVLoAPM1FizvorD1qw7INcpgQ4wY3ttYw9Vs/7KAbk+CXSAmRu34M8j4rs4zBb85gCfwcQEOkAnSimXcZi2sVbpHRLoAB3Zaxtb++a2deXxmZhAB+jQeHNbzVB/oy69LwIdoFMHCPV1xbGZmEAH6Nt51Hunvq40LhUIdICOlVJuol7wvrTt3g+BDtC5sVa91sUuZ5XGZWICHWAZLqLOpS6rCmNSgUAHWIBx671G21a93Tsh0AGWYxvTd5J7OfF4VCLQARZiXKVfTj2urnF9EOgAy3JVYUwn3Tsg0AGWZfIVeniP3gWBDrAg47Z7jdPuzJxAB1ie3cTjWaF3QKADLM/NxON5h94BgQ6wPNetJ8DhCXQAWACBDrA83nkfIYEOsDxTv/PeTTweFQh0gOWZeoW+m3g8KhDoLMlJ6wlAa5l5EhHPWs+DwxPoLMnJxONdTTweHMKqwphOzXdAoAMsy7rCmLsKYzIxgQ6wEON2+6upxy2lWKF3QKADLMemwpjvK4xJBQIdYAHGO8vfVBja6rwTAh2gc5n5PCK2lYa/qjQuExPoAB0bw/wqIl7UGL+UUuN+dSoQ6ACdGg/BXUXEy0of8a7SuFTw/1pPAKCGzDyNiLMYuqbd1Qr1Ou6+ZvQm7nlvXEq5mmp+TzGuys/HPzWbyFidd0SgA4uSmesYTnt/aQv6q8u7MvO+/+mvuLtW+94fB/GZHxR3lYmNIb6K4UfKWdTvBvexlLKt/BlMSKADizCuyLdRb/v5c17E/T8gXn/tYJ/54XBI29YT4Ot4hw50b1yVX0WbMF+qi9YT4OtYoQNdy8yziPit9TwW5m0pZdd6EnwdK3SgW+Mp723jaSzNx6jTcY7KBDrQs224KnRqF1bnfRLoQJfGVqeTX0Ry5P4qpWxaT4LHEehAr9atJ7BA69YT4PEEOtCrs9YTWJif59I4h8cR6EB3xu12786n885We/8EOtCju1q58jgfwlb7Igh0oEenrSewEB8iYlVKuasFLZ0R6ADHSZgvjEAHenTfhSc8jDBfIIEO9GjXegIde1tKORXmyyPQge6M14t+bD2PznyMiO9KKevWE6EOgQ706rL1BDryLiJOSim+swUT6ECvXO/5Ze8j4ttSypkt9uUT6ECXxm33d63nMVPvYgjyle5vx8N96EDPziNiFbrGRQwn17cRcem2tOMk0IFulVJ2mXkRET9V+oiPMbx7vhnvXj+54595Hvc3ujmNu7vaPY+Il0+c2/sYyveuI+JKiCPQgd5dxNC69EWFsZ9FxCYizsfA3N3zz0122GzsU/85196HA4uWmVc5rU3rZ+JhMnM98b/7T520fkb4EofigO6VUrYxbEHXsq04NkxCoANLsak49qv88lY4NCXQgUUYy7PeVvyIbcWx4ckEOrAk51GvJeyLzDyvNDY8mUAHFmM8/V2zg9wmM+8qQ4PmBDqwKKWUTUT8VWn4Z6HlLDMl0IElqrk1/iYz72skA80IdCAyc7WkU9zjrWI1y9is0pkdgQ5HJjOfj41YLjPzJjMzIv6IiD/GJio34/+27vx98bri2K8y86zi+ADHK3WK+6LM3NyG+APdZMcnuzPzYuL/T+zbtX4+2GeFDkcgh1X5dQyXmHzNzWTPIuKXHH4s9bha30TdMrZNpbHhqwl0WLgcDnDt4mm3e72KiO5CfSxj21T8iPPU552ZEOiwYGMAb2Oa+8JfRp+hfhF1y9g2lcaGryLQYdm28fR7t/e9jD4DbF1x7De5oAoB+iXQYaFyOIX9usLQP/QWYGOf93cVP2JTcWx4EIEOCzRui1dtgVpx7FpqntZ/lZnriuPDFwl0WKZNRLyoOH53AVZK2UXEzxU/4qK38wUsi0CHhRm3w384wEf1GGAXUa+M7VnU3QWAzxLosCB7p9oPobsAG8vYas75J2VstCLQWZLeVos1bKLuVvunuguwUso2Ij5U/Ah93gGeokJrz1XrZ/oaOVyw0sJl62f/Wgf4rlatn5HjY4UOy9FqZfi6twAby9jeVvwIq3QOTqDDAuTQU3zKBjJfq8cA20S9A3Ivs+NLbeiTQIfO5dCr/afG0+guwMYytqq1+tlfFQAdE+jQv23rCYx6DDB93lkMgQ4dm8FW+77uAuwAt7H9kJ1VAdCv0noCMJXMzImH/HY8PDVLY1D8/9bzuMP/jtvZ3cjMqxiuiK3hfSllVWls+JsVOvRr23oC99i2nsAj1O7zvqo4PkSEQIcujQfQaq0on+pVDje9daOUch11y9i2FceGiBDo0J1xq33TeBpf0mMZ23nUK2N7MZ53gGoEOvRnG8MBtDnrLsDGA3I1f4icd1gFQEcEOtxvdn/5znyr/VPdBVgpZRN1y9h63LmgEwKdJZn6L+LTicd7kjEcN63n8RV6DbB1xbHfjI2AYHICnSXZTTze3FaX25j/VvunuguwsVTxfcWP6PFHDh0Q6HC/2QTReGr8det5PFKPAbauOHZ3VQD0QaCzJLuJx5vFu+pxq31b+WO+rzj2q8xcVxx/cmNjnF8rfsRFb+cLmD+BzpLsph5wJg1BtlF3q/1dKWUbdQOsxz7vm6hYxhZ1m9kA9Cszz3J62wU+076bHIM2M5+P/72WTcvv8jEy87zi93GT+rwD/FdmnlT6S7fJyjKHgN1VeKZ9Z598pgD7RGZeV/xOtq2fD2CWss4Kc93oWS4qPMu+y3s+V4DtycxVxe8js8MfOQDVZeZlhb9wD75Kz/ohcu8zHeCzV4f8LqeQdf5/dWvb+vlYBofiWJqrCmM+iwMeYMrDnGo/H1ud/sdYh/2u4mf3WMZW89//WfZ3YBCgrqzzHv3W6kDPUHur/eoBc6j5PWZ2VsYWEZGZG98HwAFlvXfA1bfe8zBb7ScPnEvNAGt22PCxsm4VwHXr56N/ttxZom2lcZ9FxFXlIKq9Hb0Zm6Y8xEXUq8M+6GuMKYyvKGrN+WU6HAfwb1l/u/i6Rqhn3RVx5gO22u+Y07rynE6m/h5ry8yrSt9FVz9wAA4i655KzhxCfbJe75l5Wnm+j64Bz3oBlnlP6dycZb3XIt19FwDVVfxLd99NTrCqGudas0Nb5hO6tKUytv/IzG2NL6L1cwHMUtZdWe67ykeGUtbtzHbryQeuslKAjXZPnd+hZb3XOrO54Q9gNvIwq/R9V/nAazFz6NFesyPbvieHRA4BVnMXobv3x1nntc669XPRr9J6AlBTDgfBWlyD+j6GJje7+OcWuFVEnIz/+eJA8/i5lLKZYqActu1/mmKsO3yMiJP7mt3MUQ4/3n6feNjJ/n1xfAQ6i5bD6vTP1vNo5EMpZdIt3By2x2v9GPm1lNLVSj1z8vfe70spq4nH5EioQ2fRSinXUfee7zlbVxizZuD+kP2Vsb1vPQG4JdA5BpuI+Kv1JA7s1/HHzKRKKZdRN8S2Fceu4Wri8Vq8HmIhBDqLN76XfdBhtYX4K4YfMbXUXKW/ygceLJyJXesJwC2BzlEYV6s/t57HgaxrHi4bv8u3tcaPvm5j27WeANwS6ByN8fRwzSCag1/H609rO496fd5f5BMa4cCxEugcm/OI+NB6EpXU3mr/27gDUPOzzrOz29igNYHOURmDaBXLDPWqW+2fKqVcRL3Dhs+ir613aE6gc3QWGurfH2ir/VPrimO/yfn3edeqldkQ6BylhYX621LKtsUHjz8iapaxbSqOPYWTicc7tvJKJiTQOVoLCfW3pZR14znU/PxXM+9vvpp4vN3E43FEBDpHrZRyM7ZH7fH0+xzCPEopu6jbjW8zxwNy45xeTjxsN73smR+BDhExBuP3Ua8Ua2rfzyHM92yiYhlb1G1m81g1GuBM3t0P4CjlcE3ooe5Rf4ybnOlBscxcV37uk9bPuC/rXH/bU5c8gPnLIZxq3v/9GJc5w63nfVn3jvfL1s93KzNXlZ7xpPWzASxOZj7PzE22D/ZddrJyy3pBd2vV+hkjIrLOLs6u9XMBLFq2C/ZdzvuE951y2Emopfk75sw8r/Rs29bPBnA0ctiKr/2O/To7DPJbOZxDqKlZB7nx2Wr9sOtiFwZgUca/2M9zWI1O8Rf89TjeSetnm0IOOxo1rRs80/Ose0Zg1ucjmL/SegKwBJl5GkMb0JP4p9nISQwlV/s+xFBrvBv/XEXE9SF7sB/CGE7X8d/nn9I341Wu1Y3PcxXT153fmkVPAQD4j6xbxnZrfYDnqL0yz7TdDsCc5WFq+jcV53+aw+HEmna15g8Ak8j6ZWy3rnN47THVvG8rGw5hjl3wAODfMnN7oGDM8bMeHew5BPk666/Kb92kw3AA9CDrlnrd57Zq4EHhnplnOfwYOPQ8N5W/fo6IU+5AdWNw/dTo4z/GcOJ+F/++nnQVETVuTHuovyLidGkVDrQj0IGDyOHwV80ytt58V0qZTX96+uf6VOBQ1q0nMCPvhTlTE+jAQZRSriLi19bzmIGP4ccNFQh04JA2MXTLO2bnpZRd60mwPN6hAwc1njy/iohnjafSghavVCPQgYPLoWXrb63ncWAfSimTNb+BT9lyBw6ulLKNiO9bz+OAPsQ/l/ZAFVboQDOZuY2IN63nUdnHGOrNd60nwrJZoQPNjO+T37aeR0UfI2IlzDkEgQ40NYb6j63nUcGHiDg51J3tINCB5kopFzG8U//Yei4TeR/DylxbVw7GO3RgNsaStsvou0Xsr6UUV6JycAIdmJUcrhPdRsTrxlP5Wh8j4mzsiAcARPx9pemh7iV/qm261xwA7paZzzNzk4e/p/yhrjJz1fp7AoAuZOZJDqvgudjl0O0OAPha+c+KvdVW/GVakQPAdHJ4x77N+tvx15l5npknrZ8ZPscpd6B746r59s+rJw73Vwy3wV1FxJUub/RCoAOLM66mT+KfC1GeR8RdN51djf+5G/9cawYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD35P72DCCObcmThAAAAAElFTkSuQmCC", e: 1 }], layers: [{ ddd: 0, ind: 1, ty: 2, nm: "lineas", refId: "image_0", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 10, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 50, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [100] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 70, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 110, s: [0] }, { t: 118, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [250, 250, 0], ix: 2, l: 2 }, a: { a: 0, k: [250, 250, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 2, nm: "click", refId: "image_1", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [250, 250, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 1, y: 0 }, t: 30.001, s: [266.194, 282.389, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0, y: 1 }, o: { x: 0.333, y: 0 }, t: 60, s: [250, 250, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 1, y: 0 }, t: 90.001, s: [266.194, 282.389, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 118, s: [250, 250, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [250, 250, 0], ix: 1, l: 2 }, s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 } }, ao: 0, ip: 0, op: 300, st: 0, bm: 0 }], markers: [] };

// app/assets/lottie/clickMain3.json
var clickMain3_default = { v: "5.6.1", fr: 60, ip: 0, op: 91, w: 108, h: 108, nm: "\u70B9\u51FB", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 3, nm: "\u25BD \u70B9\u51FB", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [64.5, 63, 0], ix: 2 }, a: { a: 0, k: [31.5, 36, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "\u5F62\u72B6\u7ED3\u5408", parent: 1, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: -20, ix: 10 }, p: { a: 0, k: [31.532, 35.875, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.25, -0.08], [0.83, 0], [0.25, -0.08], [0.75, 0], [0, 0], [0, 0], [1.17, 0], [0, -1.16], [0, 0], [0.66, -0.5], [0.08, -0.58], [-0.34, -0.5], [-0.84, -1.08], [0, 0], [-2.25, -0.41], [-0.92, 0], [-0.91, 0.25], [0, 2.33], [0, 0], [1.17, 0]], o: [[-0.25, 0], [-0.33, -0.67], [-0.25, 0], [-0.33, -0.58], [0, 0], [0, 0], [0.09, -1.16], [-1.16, 0], [0, 0], [-0.75, -0.34], [-0.5, 0.34], [-0.08, 0.59], [0, 0], [0, 0], [0.67, 0.83], [0.58, 0.09], [0.83, 0], [2, -0.58], [0, 0], [-0.08, -1.08], [0, 0]], v: [[5.339, -2.462], [4.589, -2.292], [2.759, -3.372], [2.009, -3.212], [0.259, -4.122], [-0.161, -4.122], [-0.161, -6.212], [-2.161, -8.292], [-4.241, -6.212], [-4.241, -1.122], [-6.571, -0.962], [-7.491, 0.538], [-7.071, 2.288], [-5.321, 4.708], [-5.161, 4.878], [-0.821, 8.038], [1.509, 8.288], [4.089, 7.958], [7.509, 3.128], [7.509, -0.462], [5.339, -2.462]], c: !0 }, ix: 2 }, nm: "\u8DEF\u5F84 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [1.25, -0.33], [1.5, 0.25], [0.5, 0.75], [0, 0], [0, 0], [-0.33, 0.17], [-0.16, -0.09], [-0.08, -0.09], [0, 0], [0, 0], [0, 0], [-0.09, 0], [-0.08, -0.08], [0, 0], [-0.08, 0.08], [0, 0], [0, 0], [0, 0], [0, 0.08], [-0.09, 0.08], [0, 0], [0, 0], [-0.25, 0], [0, -0.25], [0, 0], [-0.5, 0], [0, 0.5], [0, 0], [-0.25, 0], [0, -0.25], [0, 0], [-0.5, 0], [0, 0.5], [0, 0], [-0.25, 0], [0, -0.25], [0, 0], [-0.5, 0], [0, 0.5], [-0.08, 0.08], [-0.16, 0], [0, -0.25], [0, 0]], o: [[0, 1.5], [-1.17, 0.33], [-1.58, -0.33], [0, 0], [-0.75, -1.08], [-0.25, -0.34], [0.17, -0.08], [0.17, 0], [0, 0], [0, 0], [0, 0.09], [0.08, 0], [0.08, 0], [0, 0], [0.09, 0], [0, 0], [0, 0], [0.08, 0], [0, -0.08], [0, -0.09], [0, 0], [0, 0], [-0.09, -0.25], [0.25, 0], [0, 0], [0, 0.5], [0.5, 0], [0, 0], [0, -0.25], [0.25, 0], [0, 0], [0, 0.5], [0.5, 0], [0, 0], [0, -0.25], [0.25, 0], [0, 0], [0, 0.5], [0.5, 0], [0, -0.08], [0.08, -0.09], [0.25, 0], [0, 0], [0, 0]], v: [[5.765, 3.205], [3.595, 6.375], [-0.575, 6.455], [-3.905, 3.875], [-4.075, 3.705], [-5.735, 1.295], [-5.575, 0.375], [-5.075, 0.295], [-4.655, 0.545], [-4.075, 1.375], [-3.985, 1.455], [-3.905, 1.545], [-3.735, 1.625], [-3.575, 1.705], [-3.075, 1.705], [-2.905, 1.625], [-2.825, 1.625], [-2.735, 1.545], [-2.655, 1.455], [-2.575, 1.295], [-2.485, 1.125], [-2.485, 0.955], [-2.485, -6.205], [-2.155, -6.625], [-1.735, -6.205], [-1.735, -0.375], [-0.905, 0.455], [-0.075, -0.375], [-0.075, -2.125], [0.345, -2.545], [0.765, -2.125], [0.765, -0.375], [1.595, 0.455], [2.425, -0.375], [2.425, -1.375], [2.845, -1.795], [3.265, -1.375], [3.265, -0.375], [4.095, 0.455], [4.925, -0.375], [5.095, -0.705], [5.425, -0.875], [5.845, -0.455], [5.845, 3.205]], c: !0 }, ix: 2 }, nm: "\u8DEF\u5F84 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "\u5408\u5E76\u8DEF\u5F84 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 1.667], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "\u53D8\u6362" }], nm: "\u5F62\u72B6", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[-0.41, 0], [0, 0.5], [-1.58, 0], [0, -1.58], [-0.5, 0], [0, 0.5], [2.5, 0], [0, -2.5]], o: [[0.5, 0], [0, -1.58], [1.59, 0], [0, 0.5], [0.5, 0], [0, -2.5], [-2.5, 0], [0, 0.5]], v: [[-5.909, -4.538], [-5.069, -5.378], [-2.159, -8.288], [0.761, -5.378], [1.591, -4.538], [2.431, -5.378], [-2.159, -9.958], [-6.739, -5.378]], c: !0 }, ix: 2 }, nm: "\u8DEF\u5F84 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 2, nm: "\u5408\u5E76\u8DEF\u5F84 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 0.901960790157], ix: 4 }, o: { a: 0, k: 90, ix: 5 }, r: 1, bm: 0, nm: "\u586B\u5145 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [300, 300], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "\u53D8\u6362" }], nm: "\u5F62\u72B6\u7ED3\u5408", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 3, nm: "\u25BD \u7F16\u7EC4", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [54, 54, 0], ix: 2 }, a: { a: 0, k: [48, 48, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "\u692D\u5706\u5F621", parent: 3, sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [48, 48, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [100, 100, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 20, s: [130, 130, 100] }, { t: 40, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [18, 18], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "\u692D\u5706\u8DEF\u5F84 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.674509823322, 0.070588238537, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "\u586B\u5145 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [300, 300], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "\u53D8\u6362" }], nm: "\u692D\u5706\u5F62\u5907\u4EFD", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "\u692D\u5706\u5F622", parent: 3, sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 40, s: [80] }, { t: 80, s: [0] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [48, 48, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 40, s: [70, 70, 100] }, { t: 80, s: [140, 140, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [26, 26], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "\u692D\u5706\u8DEF\u5F84 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.674509823322, 0.070588238537, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "\u586B\u5145 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [300, 300], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "\u53D8\u6362" }], nm: "\u692D\u5706\u5F62\u5907\u4EFD 2", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "\u692D\u5706\u5F623", parent: 3, sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 50, s: [60] }, { t: 90, s: [0] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [48, 48, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 50, s: [57, 57, 100] }, { t: 90, s: [110, 110, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [32, 32], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "\u692D\u5706\u8DEF\u5F84 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.674509823322, 0.070588238537, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "\u586B\u5145 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [300, 300], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "\u53D8\u6362" }], nm: "\u692D\u5706\u5F62", np: 2, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 300, st: 0, bm: 0 }], markers: [] };

// app/components/Main.tsx
import {
  LocalPolice,
  CarCrash,
  Business,
  Public,
  ReceiptLong,
  Gavel
} from "@mui/icons-material";

// app/assets/svgs/MainSvg.js
import "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var SvgMainSvg = (props) => /* @__PURE__ */ jsxDEV7(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 386.04 344.18",
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV7("defs", { children: /* @__PURE__ */ jsxDEV7("style", { children: ".MainSvg_svg__cls-1{fill:#f4d37f}.MainSvg_svg__cls-4{fill:#f7d581}.MainSvg_svg__cls-5{fill:#f9d77a}.MainSvg_svg__cls-7{fill:#eac66e}.MainSvg_svg__cls-8{fill:#f4f4f4}.MainSvg_svg__cls-11{fill:#ffe299}.MainSvg_svg__cls-13{fill:#ffe799}.MainSvg_svg__cls-14,.MainSvg_svg__cls-15{fill:#f2cc70}.MainSvg_svg__cls-17{fill:#ffa89c}.MainSvg_svg__cls-19{fill:#e5e5e5}.MainSvg_svg__cls-20,.MainSvg_svg__cls-21{fill:#edcc70}.MainSvg_svg__cls-23{fill:#efefef}.MainSvg_svg__cls-26{fill:#7f3d38}.MainSvg_svg__cls-29{fill:#93524c}.MainSvg_svg__cls-30{fill:#934a42}.MainSvg_svg__cls-31{fill:#92a5b7}.MainSvg_svg__cls-32{fill:#87423d}.MainSvg_svg__cls-33{fill:#b5a99c}.MainSvg_svg__cls-34{fill:#8c4641}.MainSvg_svg__cls-35{fill:#666f7c}.MainSvg_svg__cls-36{fill:#303b51}.MainSvg_svg__cls-38{fill:#cecbc8}.MainSvg_svg__cls-40{fill:#a56253}.MainSvg_svg__cls-42{fill:#cc924c}.MainSvg_svg__cls-43{fill:#dddad7}.MainSvg_svg__cls-44{fill:#ddd}.MainSvg_svg__cls-45,.MainSvg_svg__cls-46{fill:#d39c54}.MainSvg_svg__cls-47{fill:#dba456}.MainSvg_svg__cls-49,.MainSvg_svg__cls-50{fill:#d89c54}.MainSvg_svg__cls-51{fill:#c68b4b}.MainSvg_svg__cls-52{fill:#dba856}.MainSvg_svg__cls-53{fill:#e2877d}.MainSvg_svg__cls-54{fill:#d6a456}.MainSvg_svg__cls-55{fill:#d6a45c}.MainSvg_svg__cls-57{fill:#444956}.MainSvg_svg__cls-59,.MainSvg_svg__cls-61,.MainSvg_svg__cls-62,.MainSvg_svg__cls-63{fill:#3e6593}.MainSvg_svg__cls-64{fill:#3f4751}.MainSvg_svg__cls-65{fill:#70362b}.MainSvg_svg__cls-66{fill:#9b5c46}.MainSvg_svg__cls-68{fill:#626a78}.MainSvg_svg__cls-69{fill:#2b3b51}.MainSvg_svg__cls-71{fill:#565e6b}.MainSvg_svg__cls-73{fill:#49515e}.MainSvg_svg__cls-59,.MainSvg_svg__cls-61,.MainSvg_svg__cls-62,.MainSvg_svg__cls-63,.MainSvg_svg__cls-78,.MainSvg_svg__cls-79,.MainSvg_svg__cls-80{mix-blend-mode:multiply}.MainSvg_svg__cls-78,.MainSvg_svg__cls-79{opacity:.13;fill:#854087}.MainSvg_svg__cls-79{opacity:.17}.MainSvg_svg__cls-80{fill:#69699e}.MainSvg_svg__cls-80,.MainSvg_svg__cls-90,.MainSvg_svg__cls-91{opacity:.21}.MainSvg_svg__cls-92{fill:#ffecbb}.MainSvg_svg__cls-100,.MainSvg_svg__cls-90,.MainSvg_svg__cls-91,.MainSvg_svg__cls-92,.MainSvg_svg__cls-93,.MainSvg_svg__cls-94,.MainSvg_svg__cls-95,.MainSvg_svg__cls-96,.MainSvg_svg__cls-97,.MainSvg_svg__cls-98,.MainSvg_svg__cls-99{mix-blend-mode:overlay}.MainSvg_svg__cls-59{opacity:.28}.MainSvg_svg__cls-61,.MainSvg_svg__cls-96{opacity:.35}.MainSvg_svg__cls-46,.MainSvg_svg__cls-50{opacity:.14}.MainSvg_svg__cls-102{opacity:.26}.MainSvg_svg__cls-62{opacity:.1}.MainSvg_svg__cls-63{opacity:.12}.MainSvg_svg__cls-93{opacity:.9}.MainSvg_svg__cls-100,.MainSvg_svg__cls-93,.MainSvg_svg__cls-97,.MainSvg_svg__cls-98,.MainSvg_svg__cls-99{fill:#ffe6a6}.MainSvg_svg__cls-94,.MainSvg_svg__cls-95{opacity:.55}.MainSvg_svg__cls-90,.MainSvg_svg__cls-94{fill:#eef4ff}.MainSvg_svg__cls-91,.MainSvg_svg__cls-95{fill:#e9f4ff}.MainSvg_svg__cls-96{fill:#fcd684}.MainSvg_svg__cls-97{opacity:.39}.MainSvg_svg__cls-98{opacity:.42}.MainSvg_svg__cls-99{opacity:.43}.MainSvg_svg__cls-100{opacity:.29}.MainSvg_svg__cls-15,.MainSvg_svg__cls-21{opacity:.31}" }, void 0, !1, {
        fileName: "app/assets/svgs/MainSvg.js",
        lineNumber: 9,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/assets/svgs/MainSvg.js",
        lineNumber: 8,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV7(
        "g",
        {
          style: {
            isolation: "isolate"
          },
          children: /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg___\\uC774\\uC5B4_2", children: /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg__Layer", children: [
            /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg__doc", children: [
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m385.81 252.22-158.38 91.44L.22 212.49l158.39-91.45 227.2 131.18z",
                  className: "MainSvg_svg__cls-8"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 23,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m227.43 344.18-.22-.13L0 212.87l.44-.77 226.99 131.05 158.16-91.32.45.77-158.61 91.58z",
                  className: "MainSvg_svg__cls-19"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 27,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m147.62 171.91-57.61 33.26-4.22-2.43 57.61-33.26 4.22 2.43Zm7.15 15.99-37.07 21.4 4.22 2.43 37.07-21.4-4.22-2.43Zm88.2 50.92-37.07 21.4 4.22 2.43 37.07-21.4-4.22-2.43Zm-65.92-55.85-67.88 39.19 4.22 2.43 67.88-39.19-4.22-2.43Zm-9.58-18.42-90.21 52.08 4.22 2.43 90.21-52.08-4.22-2.43Zm-77.95 7.59c-4.93 2.85-4.96 7.45-.06 10.28 4.9 2.83 12.87 2.82 17.81-.03 4.93-2.85 4.96-7.45.06-10.28-4.9-2.83-12.87-2.82-17.81.03Zm13 64.92-22.03 12.72 2.22 1.28 22.03-12.72-2.22-1.28Zm120.84-69.77-41.9 24.19 2.22 1.28 41.9-24.19-2.22-1.28Zm-33.23 32-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm4.79 2.77-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm4.79 2.77-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm4.79 2.77-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm4.79 2.77-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm4.79 2.77-87.34 50.43 2.22 1.28 87.34-50.43-2.22-1.28Zm49.15-22.85L121.7 272l2.22 1.28 141.53-81.71-2.22-1.28Zm4.79 2.77-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.79 2.77-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.79 2.77-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.79 2.77-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm23.67 13.67-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.8 2.77-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76L207.57 321.6l2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm4.78 2.76-141.53 81.71 2.22 1.28 141.53-81.71-2.22-1.28Zm-157.03-90.62-41.9 24.19 2.22 1.28 41.9-24.19-2.22-1.28Z",
                  style: {
                    fill: "#dbdbdb"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 31,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M107.71 171.7c5.21 3.01 5.18 7.9-.06 10.93-5.24 3.03-13.72 3.04-18.92.03-5.21-3.01-5.18-7.9.06-10.93 5.24-3.03 13.72-3.04 18.92-.03Z",
                  className: "MainSvg_svg__cls-20"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 37,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 22,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M184.21 136.23 126.2 256.92l28.58-1.94 117.56-67.87-88.13-50.88z",
                className: "MainSvg_svg__cls-63"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 42,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m32.38 202.23 93.83 54.17 127.64-73.69v-2.62l-93.83-51.56-127.64 71.08v2.62z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 46,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m32.38 199.61 93.83 54.17 127.64-73.69-93.83-54.17-127.64 73.69z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 50,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m36.09 199.29 90.68 52.35 123.37-85.42-90.68-52.35-123.26 64.9-.11 20.52z",
                className: "MainSvg_svg__cls-43"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 54,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M115.81 240.69a924.97 924.97 0 0 1-18.96-10.59l-18.86-10.74C65.53 212 52.96 204.83 40.6 197.27c12.72 6.92 25.21 14.22 37.82 21.33l18.74 10.97c6.26 3.64 12.48 7.34 18.65 11.12ZM115.78 233.62c-6.95-3.56-13.71-7.44-20.47-11.31-6.73-3.94-13.45-7.88-20.03-12.08 6.92 3.6 13.7 7.45 20.47 11.31 6.74 3.92 13.48 7.84 20.03 12.08Z",
                className: "MainSvg_svg__cls-38"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 58,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m122.8 252.77-.15-.09c-.53-.3-.96-1.13-.96-1.83v-20.02c0-.7.43-1.03.96-.72l.15.09c.53.3.96 1.13.96 1.83v20.02c0 .7-.43 1.03-.96.72Z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 62,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m32.38 178.44 93.83 54.17 127.64-73.69v-2.62l-93.83-51.55-127.64 71.07v2.62z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 66,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M123.5 254.83v-26.41l127.64-73.69v26.4l-124.96 74.38-2.68-.68z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 70,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m32.38 175.82 93.83 54.17 127.64-73.69-93.83-54.17-127.64 73.69z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 74,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m129.57 217.73-75.95-43.85 103.05-59.5 75.95 43.85-103.05 59.5Zm-74.44-43.85 74.44 42.98 101.54-58.62-74.44-42.98-101.54 58.62Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 78,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m139.2 200.53-.28-.16a11.349 11.349 0 0 0-11.33 0l-.27.16-41.4-23.9.82-.48c1.59-.92 2.54-2.56 2.54-4.4s-.95-3.48-2.54-4.4l-.83-.48 61.11-35.28.27.16c3.5 2.02 7.84 2.02 11.34 0l.27-.16 41.4 23.9-.83.48c-1.59.92-2.54 2.56-2.54 4.4s.95 3.48 2.54 4.4l.83.48-61.11 35.28Zm-51.15-23.94 39.27 22.67c3.69-2.01 8.19-2.01 11.88 0l58.98-34.05c-1.47-1.16-2.33-2.91-2.33-4.83s.86-3.67 2.33-4.83l-39.27-22.67a12.456 12.456 0 0 1-11.88 0l-58.98 34.05c1.47 1.16 2.33 2.91 2.33 4.83s-.86 3.67-2.33 4.83Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 82,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M126.21 256.4v-26.41l127.64-73.69v26.41L126.21 256.4z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 86,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M243.95 183.12v-13.91l-1.26.73v13.9l1.26-.72zM246.57 181.61V167.7l-1.26.73v13.9l1.26-.72zM249.19 180.09v-13.9l-1.26.73v13.9l1.26-.73zM166.43 220.02c0-2.05 1.45-4.55 3.23-5.58 1.79-1.03 3.23-.21 3.23 1.84s-1.45 4.55-3.23 5.58c-1.79 1.03-3.23.21-3.23-1.84ZM175.36 218.49v-6.83l33.06-19.09v6.84l-33.06 19.08z",
                className: "MainSvg_svg__cls-51"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 90,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M125.43 227.27a.49.49 0 0 1 .16-.16l124.64-71.96c.21-.12.47-.05.6.16.12.21.05.48-.16.6l-124.64 71.96c-.21.12-.47.05-.6-.16a.433.433 0 0 1 0-.44Z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 94,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m36.25 173.76 93.82 54.17 127.65-73.7-93.83-54.17-127.64 73.7z",
                className: "MainSvg_svg__cls-63"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 98,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m16.45 162.43 93.83 54.17 127.64-73.7v-2.61l-93.83-51.56-127.64 71.08v2.62z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 102,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m16.45 159.81 93.83 54.17 127.64-73.69-93.83-54.18-127.64 73.7z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 106,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m20.16 159.48 90.69 52.36 123.37-85.42-90.69-52.36-123.26 64.91-.11 20.51z",
                className: "MainSvg_svg__cls-43"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 110,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M99.88 200.89c-6.36-3.45-12.68-6.99-18.95-10.59l-18.86-10.74c-12.46-7.36-25.03-14.53-37.39-22.09 12.72 6.92 25.21 14.22 37.82 21.33l18.74 10.97c6.26 3.64 12.48 7.34 18.65 11.12ZM99.85 193.81c-6.95-3.56-13.71-7.44-20.47-11.31-6.73-3.94-13.45-7.88-20.03-12.08 6.92 3.6 13.7 7.45 20.47 11.31 6.74 3.92 13.48 7.84 20.03 12.08Z",
                className: "MainSvg_svg__cls-38"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 114,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m106.87 212.97-.15-.09c-.53-.3-.96-1.13-.96-1.83v-20.02c0-.7.43-1.03.96-.72l.15.09c.53.3.96 1.13.96 1.83v20.02c0 .7-.43 1.03-.96.72Z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 118,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m16.45 138.64 93.83 54.17 127.64-73.7v-2.61l-93.83-51.56-127.64 71.08v2.62z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 122,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M107.57 215.02v-26.4l127.64-73.7v26.41L110.26 215.7l-2.69-.68z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 126,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m16.45 136.02 93.83 54.17 127.64-73.69-93.83-54.18-127.64 73.7z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 130,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m128.75 103.64 2.55 1.47-8.87 5.12 5.52 3.18-2.06 1.19-8.06-4.65 10.93-6.31ZM136.99 118.31l-5.11-2.95-3.32.79-2.61-1.51 15.83-3.48 2.51 1.45-6.01 9.15-2.67-1.54 1.37-1.91Zm1.12-1.57 2.44-3.42-5.93 1.41 3.49 2.01ZM166.4 125.37l-14.53 4.23-2.73-1.58 4.98-5.67-9.9 2.83-2.72-1.57 7.32-8.4 2.64 1.52-5.2 5.87 10.28-2.94 2.36 1.36-5.23 5.92 10.31-2.99 2.44 1.41Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 134,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m113.64 177.93-75.95-43.85 103.05-59.5 75.95 43.85-103.05 59.5ZM39.2 134.08l74.44 42.98 101.54-58.62-74.44-42.98L39.2 134.08Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 138,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m123.28 160.31-.09-.05a11.749 11.749 0 0 0-11.7 0l-.09.05-40.68-23.49.28-.16c1.7-.98 2.72-2.74 2.72-4.71s-1.02-3.72-2.72-4.71l-.28-.16 60.39-34.87.09.05c3.61 2.08 8.09 2.08 11.7 0l.09-.05 40.68 23.49-.28.16c-1.7.98-2.72 2.74-2.72 4.71s1.02 3.72 2.72 4.71l.28.16-60.39 34.86Zm-51.82-23.49 39.93 23.06c3.67-2.08 8.21-2.08 11.88 0l59.64-34.43a5.76 5.76 0 0 1-2.63-4.87c0-2 .98-3.79 2.63-4.87l-39.93-23.06a12.089 12.089 0 0 1-11.88 0l-59.64 34.43c1.65 1.08 2.63 2.87 2.63 4.87s-.98 3.79-2.63 4.87Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 142,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M110.28 216.6v-26.41l127.64-73.69v26.4l-127.64 73.7z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 146,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M227.86 142.74v-13.91l-1.26.73v13.91l1.26-.73zM230.48 141.23v-13.91l-1.26.73v13.9l1.26-.72zM233.1 139.71v-13.9l-1.26.73v13.9l1.26-.73zM150.5 180.21c0-2.05 1.45-4.55 3.23-5.58 1.79-1.03 3.23-.21 3.23 1.84s-1.45 4.55-3.23 5.58c-1.79 1.03-3.24.21-3.24-1.84ZM159.43 178.69v-6.84l33.06-19.08v6.84l-33.06 19.08z",
                className: "MainSvg_svg__cls-51"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 150,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M109.5 187.46a.49.49 0 0 1 .16-.16l124.64-71.96c.21-.12.47-.05.6.16.12.21.05.48-.16.6L110.1 188.06c-.21.12-.47.05-.6-.16a.433.433 0 0 1 0-.44Z",
                className: "MainSvg_svg__cls-26"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 154,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 192.15,
                cy: 254.22,
                className: "MainSvg_svg__cls-63",
                rx: 18.95,
                ry: 32.83,
                transform: "rotate(-89.69 192.147 254.221)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 158,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 254.64,
                cy: 213.44,
                className: "MainSvg_svg__cls-63",
                rx: 14.36,
                ry: 24.87,
                transform: "rotate(-89.69 254.637 213.442)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 166,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 122.56,
                cy: 288.79,
                className: "MainSvg_svg__cls-63",
                rx: 14.36,
                ry: 24.87,
                transform: "rotate(-89.69 122.562 288.793)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 174,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m220.47 249.49-1.31-3.05c-1.49-3.02-4.28-5.88-8.41-8.26-12.86-7.43-33.65-7.46-46.43-.08-4.15 2.4-6.93 5.29-8.37 8.35l-1.18 3.05v2.09h.01c.07 4.82 3.29 9.64 9.68 13.32 12.86 7.43 33.65 7.46 46.43.08 6.48-3.74 9.64-8.67 9.52-13.59h.05v-1.9Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 182,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M176.01 237.32h-10.2c-.5.26-1.01.5-1.49.78-4.15 2.4-6.93 5.29-8.37 8.35l-1.18 2.12v3.01h.01c.07 4.82 3.29 9.64 9.68 13.32 3.39 1.96 7.34 3.39 11.54 4.32v-31.9Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 186,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 187.6,
                cy: 249.12,
                rx: 18.95,
                ry: 32.83,
                style: {
                  fill: "#e5c26a"
                },
                transform: "rotate(-89.69 187.596 249.125)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 190,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M187.81 268.34c-8.49 0-17-1.87-23.48-5.62-6.34-3.66-9.82-8.53-9.82-13.72s3.44-9.96 9.68-13.56c12.84-7.41 33.79-7.37 46.7.08 6.34 3.66 9.82 8.53 9.82 13.72s-3.44 9.96-9.68 13.56c-6.39 3.69-14.8 5.53-23.22 5.53Zm-.41-37.89c-8.32 0-16.63 1.82-22.94 5.47-6.07 3.5-9.41 8.15-9.41 13.09s3.39 9.69 9.55 13.24c12.76 7.37 33.47 7.41 46.15.08 6.07-3.5 9.41-8.15 9.41-13.09s-3.39-9.69-9.55-13.24c-6.41-3.7-14.82-5.55-23.21-5.55Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 200,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 192.28,
                cy: 250.53,
                rx: 14.85,
                ry: 25.72,
                style: {
                  fill: "#5a3f8e",
                  opacity: 0.1,
                  mixBlendMode: "multiply"
                },
                transform: "rotate(-89.69 192.277 250.53)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 204,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M213.66 244.65h-1.03c-1.17-2.37-3.35-4.61-6.59-6.47-10.08-5.82-26.36-5.85-36.37-.07-3.25 1.88-5.43 4.14-6.56 6.54h-.92v4.02h.01c.05 3.78 2.58 7.55 7.58 10.44 10.08 5.82 26.36 5.85 36.37.07 5.08-2.93 7.56-6.79 7.46-10.65h.04v-3.88Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 216,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M179.37 240.33h-12.86c-1.55 1.34-2.68 2.8-3.4 4.31h-.92v4.02h.01c.05 3.78 2.58 7.55 7.58 10.44 2.8 1.62 6.09 2.77 9.59 3.49v-22.27Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 220,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 187.91,
                cy: 244.7,
                className: "MainSvg_svg__cls-20",
                rx: 14.85,
                ry: 25.72,
                transform: "rotate(-89.69 187.91 244.707)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 224,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "g",
              {
                style: {
                  opacity: 0.47
                },
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    d: "M211.14 238.45c-9.94-1.04-27.44-2.93-41.2-4.42-.09.05-.18.09-.27.14-3.08 1.78-5.2 3.9-6.38 6.15l50.26 5.41c.27-2.48-.54-4.99-2.41-7.29ZM162.21 244.85c.02.69.13 1.37.32 2.05l47.8 5.14c.6-.61 1.13-1.24 1.56-1.89-7.44-.75-32.43-3.44-49.68-5.31Z",
                    className: "MainSvg_svg__cls-95"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/assets/svgs/MainSvg.js",
                    lineNumber: 237,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 232,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.07 259.78c-6.66 0-13.33-1.47-18.41-4.4-4.97-2.87-7.71-6.69-7.71-10.77s2.7-7.82 7.6-10.65c10.06-5.81 26.49-5.78 36.61.07 4.97 2.87 7.71 6.69 7.71 10.77s-2.7 7.82-7.6 10.65c-5.01 2.89-11.6 4.34-18.2 4.34Zm-.32-29.69c-6.52 0-13.02 1.43-17.96 4.28-4.74 2.74-7.36 6.37-7.36 10.23s2.65 7.57 7.47 10.35c9.99 5.77 26.2 5.8 36.13.07 4.74-2.74 7.36-6.37 7.36-10.23s-2.65-7.57-7.47-10.35c-5.02-2.9-11.6-4.35-18.17-4.35Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 242,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m198.07 239-19.4.21v3.9c.02 1.42.97 2.85 2.86 3.93 3.8 2.19 9.94 2.2 13.71.02 1.91-1.1 2.85-2.56 2.81-4.01h.02V239Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 246,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m185.15 239.38-6.48-.72v4.45c.02 1.42.97 2.85 2.86 3.93 1.06.61 2.3 1.04 3.61 1.32v-8.98Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 250,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M195.24 242.03c-3.77 2.18-9.91 2.17-13.71-.02-3.8-2.19-3.82-5.74-.04-7.92 3.77-2.18 9.91-2.17 13.71.02 3.8 2.19 3.82 5.74.04 7.92Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 254,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.43 243.89c-2.54 0-5.08-.56-7.01-1.68-1.92-1.11-2.98-2.6-2.98-4.19s1.04-3.05 2.94-4.14c3.83-2.21 10.09-2.2 13.95.02 1.92 1.11 2.98 2.6 2.98 4.19s-1.04 3.05-2.94 4.14c-1.91 1.1-4.42 1.65-6.94 1.65Zm-.12-11.19c-2.43 0-4.85.53-6.7 1.6-1.74 1-2.7 2.33-2.7 3.73 0 1.41.97 2.75 2.74 3.77 3.73 2.15 9.77 2.16 13.47.02 1.74-1 2.7-2.33 2.7-3.73s-.97-2.75-2.74-3.77c-1.87-1.08-4.33-1.62-6.77-1.62Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 258,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M197.12 235.7c-3.75-.39-10.34-1.1-15.53-1.66-.03.02-.07.03-.1.05-1.16.67-1.96 1.47-2.4 2.32l18.95 2.04c.1-.93-.2-1.88-.91-2.75ZM178.68 238.12c0 .26.05.52.12.77l18.02 1.94c.23-.23.42-.47.59-.71-2.81-.28-12.22-1.3-18.72-2Z",
                className: "MainSvg_svg__cls-95"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 263,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 262,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m194.71 223.67-12.68.14v13.03c.01.93.64 1.86 1.87 2.57 2.48 1.43 6.5 1.44 8.96.02 1.25-.72 1.86-1.67 1.84-2.62h.01v-13.13Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 268,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m186.26 223.92-4.23-.47v13.39c.01.93.64 1.86 1.87 2.57.69.4 1.5.68 2.36.86v-16.35Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 272,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M192.86 226.13c-2.47 1.42-6.48 1.42-8.96-.02-2.48-1.43-2.5-3.75-.03-5.17s6.48-1.42 8.96.02c2.48 1.43 2.5 3.75.03 5.17Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 276,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.41 227.42c-1.67 0-3.35-.37-4.63-1.11-1.28-.74-1.99-1.74-1.99-2.81s.7-2.05 1.96-2.78c2.53-1.46 6.66-1.45 9.2.02 1.28.74 1.99 1.74 1.99 2.81s-.7 2.05-1.96 2.78-2.92 1.09-4.58 1.09Zm-.08-7.31c-1.57 0-3.14.34-4.34 1.03-1.11.64-1.72 1.48-1.72 2.37s.62 1.74 1.75 2.4c2.41 1.39 6.33 1.4 8.72.02 1.11-.64 1.72-1.48 1.72-2.37s-.62-1.74-1.75-2.39c-1.21-.7-2.8-1.05-4.39-1.05Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 280,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M194.09 221.99c-2.45-.26-6.76-.72-10.15-1.09-.02.01-.05.02-.07.03-.76.44-1.28.96-1.57 1.52l12.39 1.33c.07-.61-.13-1.23-.6-1.8Z",
                className: "MainSvg_svg__cls-95"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 285,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 284,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M255.25 56.58c-3.97-1.38-11.74 5.53-13.64 7.22l-33.49 29.09c-13.01 11.31-26.65 19.18-39.66 22.9L135 125.35c-1.9.51-9.68 2.58-13.64 8.54 0 0 4.27-2.36 7.9-3.17l35.05-7.69c15.62-3.43 32.36-13.09 47.99-27.71l35.05-32.79c3.63-3.39 7.9-5.96 7.9-5.96Z",
                className: "MainSvg_svg__cls-4"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 290,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M257.03 57.58c-3.97-1.38-11.74 5.53-13.64 7.22L209.9 93.89c-13.01 11.31-26.65 19.18-39.66 22.9l-33.46 9.56c-1.9.51-9.68 2.58-13.64 8.54 0 0 4.27-2.36 7.9-3.17l35.05-7.69c15.62-3.43 32.36-13.09 47.99-27.7l35.05-32.79c3.63-3.39 7.9-5.96 7.9-5.96Z",
                className: "MainSvg_svg__cls-42"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 294,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m123.33 135.02-.4-.27c1.82-2.74 5.69-6.46 13.75-8.63l33.48-9.57c12.94-3.7 26.62-11.6 39.57-22.85l33.49-29.09c6.51-5.77 11.17-8.2 13.88-7.26l-.16.45c-1.74-.6-5.48.14-13.38 7.15l-33.51 29.12c-13 11.29-26.75 19.23-39.75 22.95l-33.46 9.56c-7.95 2.13-11.73 5.77-13.51 8.44Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 298,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M192.15 224.51c-.2.25-.48.48-.84.69-1.64.95-4.32.95-5.97 0-.39-.22-.69-.48-.89-.75-.47-.61-.48-1.3-.05-1.91v-.02c.2-.28.5-.55.91-.78 1.66-.95 4.33-.95 5.99.02.39.23.69.48.91.77.47.64.45 1.36-.05 1.99Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 302,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M192.2 222.52c0 .66-.03 1.33-.05 1.99-.2.25-.48.48-.84.69-1.14.66-2.78.86-4.24.59-.64-.11-1.24-.31-1.74-.59-.39-.22-.69-.48-.89-.75-.03-.89-.05-1.77-.06-2.66-.02-1.2-.05-2.42-.05-3.63-.09-7.97.08-15.96.23-23.94.27-10.27 1.39-29.93 1.49-40.2.41-10.27-1.66-20.55-1.28-30.83.05-10.27.3-20.55 1.19-30.82.11-1.3 1.25-2.25 2.55-2.14a2.36 2.36 0 0 1 2.14 2.14c.89 10.27 1.13 20.55 1.19 30.82.36 10.29-1.7 20.56-1.28 30.83.09 10.27 1.22 29.93 1.47 40.2.2 9.43.41 18.87.17 28.3Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 306,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M187.43 125.86c-.38 10.27 1.69 20.55 1.28 30.82-.09 10.27-1.22 29.93-1.49 40.2-.19 9.63-.39 19.28-.16 28.91-.64-.11-1.24-.31-1.74-.59-.39-.22-.69-.48-.89-.75-.03-.89-.05-1.77-.06-2.66-.02-1.2-.05-2.42-.05-3.63-.09-7.97.08-15.96.23-23.94.27-10.27 1.39-29.93 1.49-40.2.41-10.27-1.66-20.55-1.28-30.83.05-10.27.3-20.55 1.19-30.82.11-1.3 1.25-2.25 2.55-2.14a2.36 2.36 0 0 1 2.14 2.14c.02.17.02.36.03.53-1.08.12-1.97 1-2.06 2.13-.89 10.27-1.14 20.55-1.19 30.83Z",
                style: {
                  fill: "#f4d27a",
                  opacity: 0.59
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 310,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m184.57 111.13 2.15-1.13-2.13-.32-.02 1.45z",
                className: "MainSvg_svg__cls-4"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 317,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M179.95 119.46s5.04-2.14 6.28-1.89l.31-7.23-2.45 1.32-4.13 7.8Z",
                className: "MainSvg_svg__cls-42"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 321,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m194.94 104.35-13.14.14v3.39c.01.96.66 1.93 1.94 2.66 2.57 1.48 6.73 1.49 9.28.02 1.3-.75 1.93-1.73 1.9-2.72h.01v-3.49Z",
                className: "MainSvg_svg__cls-54"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 325,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m186.19 105.36-4.39-.49v3.01c.01.96.66 1.93 1.94 2.66.72.41 1.56.71 2.45.89v-6.08Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 329,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M193.03 107.16c-2.56 1.48-6.71 1.47-9.28-.02s-2.58-3.88-.03-5.36c2.56-1.48 6.71-1.47 9.28.02 2.57 1.48 2.58 3.88.03 5.36Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 333,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.33 101.16c1.68 0 3.25.37 4.43 1.05 1.09.63 1.7 1.44 1.7 2.28s-.59 1.63-1.67 2.25c-1.16.67-2.71 1.04-4.38 1.04s-3.25-.37-4.43-1.05c-1.1-.63-1.7-1.44-1.7-2.28s.59-1.63 1.67-2.25c1.16-.67 2.71-1.04 4.38-1.04Zm0-.48c-1.67 0-3.34.37-4.62 1.1-2.56 1.48-2.54 3.88.03 5.36 1.29.75 2.98 1.12 4.67 1.12s3.34-.37 4.62-1.1c2.56-1.48 2.54-3.88-.03-5.36-1.29-.75-2.98-1.12-4.67-1.12Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 337,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M194.3 102.87c-2.54-.27-7-.75-10.52-1.13-.02.01-.05.02-.07.04-.79.45-1.33 1-1.63 1.57l12.83 1.38c.07-.63-.14-1.27-.62-1.86ZM181.81 104.51c0 .18.03.35.08.52l12.2 1.31c.15-.16.29-.32.4-.48-1.9-.19-8.28-.88-12.68-1.35Z",
                className: "MainSvg_svg__cls-95"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 342,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 341,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m192 96.5-7.25.08v7.45c0 .53.36 1.06 1.07 1.47 1.42.82 3.71.82 5.13 0 .72-.41 1.06-.96 1.05-1.5v-7.51Z",
                className: "MainSvg_svg__cls-54"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 347,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m187.17 96.64-2.42-.27v7.65c0 .53.36 1.06 1.07 1.47.4.23.86.39 1.35.49v-9.35Z",
                className: "MainSvg_svg__cls-21"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 351,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M190.94 97.91c-1.41.81-3.71.81-5.13 0s-1.43-2.14-.02-2.96c1.41-.81 3.71-.81 5.13 0 1.42.82 1.43 2.14.02 2.96Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 355,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.39 98.75c-.98 0-1.95-.22-2.7-.65-.77-.44-1.19-1.04-1.19-1.69s.42-1.24 1.17-1.68c1.47-.85 3.88-.85 5.36 0 .77.44 1.19 1.04 1.19 1.7 0 .65-.42 1.24-1.17 1.68-.73.42-1.7.64-2.67.64Zm-.05-4.18c-.88 0-1.76.19-2.43.58-.6.35-.93.8-.93 1.26s.34.93.95 1.28c1.35.78 3.54.78 4.89 0 .6-.35.93-.8.93-1.26s-.34-.93-.95-1.28c-.68-.39-1.57-.59-2.46-.59Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 359,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M191.64 95.54c-1.4-.15-3.87-.41-5.81-.62-.01 0-.03.01-.04.02-.43.25-.73.55-.9.87l7.08.76c.04-.35-.08-.7-.34-1.03Z",
                className: "MainSvg_svg__cls-95"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 364,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 363,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M155.24 217.28c0 .38-.01.76-.04 1.13.01.03.01.04 0 .07-.85 12.32-14.77 22.12-31.81 22.12s-31.26-10.01-31.82-22.53c-.03-.27-.03-.53-.03-.8 0-.69.04-1.37.13-2.06.71-4.06 3.74-7.99 9.11-11.09 12.4-7.17 32.59-7.13 45.08.08 5.8 3.36 8.92 7.66 9.34 12.03.03.35.04.69.04 1.04Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 369,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M155.2 218.41s.01.04 0 .07c-.46 4.28-3.53 8.5-9.2 11.76-12.4 7.17-32.59 7.14-45.08-.07-5.84-3.37-8.95-7.7-9.35-12.1-.03-.27-.03-.53-.03-.8v-.03c-.01-.68.02-1.35.13-2.03.71-4.06 3.74-7.99 9.11-11.09 12.4-7.17 32.59-7.13 45.08.08 5.8 3.36 8.92 7.66 9.34 12.03.08.73.08 1.46 0 2.17Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 373,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M123.59 235.86c-8.25 0-16.51-1.82-22.81-5.46-6.15-3.55-9.54-8.29-9.54-13.33s3.34-9.68 9.4-13.18c12.47-7.2 32.81-7.16 45.36.08 6.15 3.55 9.54 8.29 9.54 13.33s-3.34 9.68-9.4 13.18c-6.21 3.58-14.37 5.37-22.55 5.37Zm-.4-36.8c-8.08 0-16.14 1.77-22.28 5.31-5.89 3.4-9.13 7.91-9.13 12.7s3.29 9.4 9.27 12.85c12.39 7.16 32.5 7.19 44.81.08 5.89-3.4 9.13-7.91 9.13-12.7s-3.29-9.4-9.27-12.85c-6.22-3.59-14.39-5.39-22.54-5.39Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 377,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 123.2,
                cy: 223.74,
                className: "MainSvg_svg__cls-91",
                rx: 11.63,
                ry: 20.15,
                transform: "rotate(-89.69 123.193 223.74)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 381,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M137.49 231.99c-7.85 4.53-20.6 4.51-28.5-.05-7.89-4.56-7.93-11.92-.09-16.45 7.84-4.53 20.6-4.51 28.5.05.65.38 1.23.78 1.78 1.19-1.57-2.16-3.86-4.2-6.91-5.97-9.59-5.54-23.72-6.83-35.38-3.89-2.95 2.54-4.7 5.41-5.22 8.34-.11.68-.14 1.35-.12 2.03v.03c0 .27 0 .53.03.8.41 4.4 3.51 8.72 9.35 12.1 9.6 5.54 23.73 6.82 35.39 3.87 1.23-1.06 2.25-2.18 3.06-3.33-.57.44-1.19.88-1.88 1.28Z",
                className: "MainSvg_svg__cls-46"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 389,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m98.34 227.3-1.05-.28 25.91-95.12 28.32 94.07-1.04.31-27.23-90.41-24.91 91.43z",
                className: "MainSvg_svg__cls-1"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 393,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M122.68 133.89h1.09v64.76h-1.09z",
                className: "MainSvg_svg__cls-1"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 397,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M126.42 133.17c0 1.71-1.39 3.1-3.1 3.1s-3.1-1.39-3.1-3.1 1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 401,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M126.05 131.73a3.09 3.09 0 0 1-3.07 2.76c-1.19 0-2.22-.68-2.74-1.67-.01.11-.03.22-.03.34 0 1.71 1.39 3.1 3.1 3.1s3.1-1.39 3.1-3.1c0-.52-.14-1-.37-1.43Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 405,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M190.58 147.53v.46c.01.35-.2.69-.66.96-.89.51-2.33.51-3.23 0-.53-.3-.71-.71-.62-1.11-.97.75-1.6 1.9-1.6 3.22 0 2.25 1.83 4.08 4.08 4.08s4.08-1.83 4.08-4.08c0-1.51-.83-2.82-2.05-3.52Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 409,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.56 155.13c2.25 0 4.08-1.83 4.08-4.08 0-1.51-.83-2.82-2.05-3.52v.46c.01.35-.2.69-.66.96-.34.19-.76.29-1.19.34.79 1.66.87 3.16-.08 4.25-.57.65-1.54.82-2.38.89.65.44 1.44.7 2.29.7ZM288.28 140.97c0 .38-.01.76-.04 1.13.01.03.01.04 0 .07-.85 12.32-14.77 22.12-31.81 22.12s-31.26-10.01-31.82-22.53c-.03-.27-.03-.53-.03-.8 0-.69.04-1.37.13-2.06.71-4.06 3.74-7.99 9.11-11.09 12.4-7.17 32.59-7.13 45.08.08 5.8 3.36 8.92 7.66 9.34 12.03.03.35.04.69.04 1.04Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 413,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M288.24 142.11s.01.04 0 .07c-.46 4.28-3.53 8.5-9.2 11.76-12.4 7.17-32.59 7.14-45.08-.07-5.84-3.37-8.95-7.7-9.35-12.1-.03-.27-.03-.53-.03-.8v-.03c-.01-.68.02-1.35.13-2.03.71-4.06 3.74-7.99 9.11-11.09 12.4-7.17 32.59-7.13 45.08.08 5.8 3.36 8.92 7.66 9.34 12.03.08.73.08 1.46 0 2.17Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 417,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M256.63 159.55c-8.25 0-16.51-1.82-22.81-5.46-6.15-3.55-9.54-8.29-9.54-13.33s3.34-9.68 9.4-13.18c12.47-7.2 32.81-7.16 45.36.08 6.16 3.55 9.55 8.29 9.55 13.33s-3.34 9.68-9.4 13.18c-6.21 3.58-14.37 5.37-22.55 5.37Zm-.4-36.8c-8.08 0-16.14 1.77-22.28 5.31-5.89 3.4-9.13 7.91-9.13 12.7s3.29 9.4 9.27 12.85c12.39 7.16 32.5 7.19 44.81.08 5.89-3.4 9.13-7.91 9.13-12.7s-3.29-9.4-9.27-12.85c-6.22-3.59-14.39-5.39-22.54-5.39Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 421,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "ellipse",
              {
                cx: 256.24,
                cy: 147.43,
                className: "MainSvg_svg__cls-91",
                rx: 11.63,
                ry: 20.15,
                transform: "rotate(-89.69 256.238 147.434)"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 425,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M270.53 155.69c-7.85 4.53-20.6 4.51-28.5-.05-7.89-4.56-7.93-11.92-.09-16.45 7.85-4.53 20.6-4.51 28.5.05.65.38 1.23.78 1.78 1.19-1.56-2.16-3.86-4.2-6.91-5.97-9.59-5.54-23.72-6.83-35.38-3.89-2.95 2.54-4.7 5.41-5.22 8.35-.11.68-.14 1.35-.12 2.03v.03c0 .27 0 .53.03.8.41 4.4 3.51 8.72 9.35 12.1 9.6 5.54 23.73 6.82 35.39 3.87 1.23-1.06 2.25-2.18 3.06-3.33-.57.44-1.19.88-1.88 1.28Z",
                className: "MainSvg_svg__cls-46"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 433,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m231.38 151-1.05-.29 25.91-95.11 28.32 94.06-1.04.32-27.23-90.42L231.38 151z",
                className: "MainSvg_svg__cls-1"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 437,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M255.72 57.58h1.09v64.76h-1.09z",
                className: "MainSvg_svg__cls-1"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 441,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M258.72 56.5c0 1.71-1.39 3.1-3.1 3.1s-3.1-1.39-3.1-3.1 1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1Z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 445,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M255.36 57.47c-.99.43-1.72.32-2.4.6a3.08 3.08 0 0 0 2.66 1.52c1.71 0 3.1-1.39 3.1-3.1 0-1.29-.79-2.39-1.9-2.86 1.06 1.79-.29 3.32-1.46 3.84ZM191 96.79c-.12.25-.33.51-.69.71-1.06.61-2.8.61-3.86-.02-.53-.29-.78-.67-.8-1.06 0-.06 0-.12.02-.2 0-.04 0-.1.02-.16.1-.29.35-.59.75-.8 1.06-.63 2.8-.63 3.86 0 .29.18.51.35.63.57.22.29.24.65.08.96Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 449,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M191 96.79c-.12.25-.33.51-.69.71-.53.29-1.22.45-1.92.45s-1.41-.16-1.94-.47c-.53-.29-.78-.65-.8-1.04.1-1.35.2-2.71.31-4.06.12-1.29 1.26-2.26 2.55-2.14 1.16.1 2.06 1.02 2.14 2.14.02.18.02.35.04.53.1.98.18 1.94.24 2.92.02.31.06.65.08.96Z",
                className: "MainSvg_svg__cls-45"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 453,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M190.68 92.9c-1.08.12-1.96 1-2.06 2.12-.08.98-.16 1.96-.24 2.92-.71 0-1.41-.16-1.94-.47-.53-.29-.78-.65-.8-1.04.1-1.35.2-2.71.31-4.06.12-1.29 1.26-2.26 2.55-2.14 1.16.1 2.06 1.02 2.14 2.14.02.18.02.35.04.53Z",
                style: {
                  opacity: 0.42,
                  fill: "#edcc70"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 457,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M188.21 90.81c.1.21-.12.53-.5.71-.38.19-.77.17-.87-.04-.1-.21.12-.53.5-.71.38-.19.77-.17.87.04Z",
                className: "MainSvg_svg__cls-11"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 464,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m286.91 173.17 1.21-.69s.03-.02.04-.02c.15-.08.36-.06.58.07l1.9 1.1c1.8-.18 4.34.52 7.16 2.15 2.81 1.62 5.35 3.85 7.16 6.12l1.9 1.1c.48.27.86.94.86 1.48v26.92c0 .19-.07.33-.19.38l-1.21.69-.54-1.52-17.31-10c-.32-.19-.58-.64-.58-1.01V175.9l-.98-2.74Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 468,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M289.43 174.32c1.8-.18 4.34.52 7.16 2.14 2.81 1.62 5.35 3.85 7.16 6.12l1.9 1.1c.48.27.86.94.86 1.48v26.92c0 .37-.26.52-.58.33l-18.66-10.78c-.32-.19-.58-.64-.58-1.01V173.7c0-.55.39-.77.86-.49l1.9 1.1Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 472,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M287.93 222.82v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM301.92 231.06v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM283.7 241.45v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM269.76 233.23v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87Z",
                className: "MainSvg_svg__cls-32"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 476,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M265.64 215.29v-1.51l2.34-.06 18.13-10.47c.38-.22.97-.25 1.3-.05l16.66 9.62 2.19-.05v1.51c0 .15-.1.31-.32.43l-20.15 11.64c-.39.22-.97.25-1.3.05l-18.62-10.75c-.16-.09-.23-.22-.22-.35Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 480,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m265.86 214.15 18.62 10.75c.33.19.92.17 1.3-.05l20.15-11.64c.39-.22.43-.56.09-.75l-18.62-10.75c-.33-.19-.92-.17-1.3.05l-20.15 11.64c-.38.22-.43.56-.09.75Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 484,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m267.39 213.61 18.03 10.42 19.52-11.27v-1.68l-37.55.86v1.67z",
                className: "MainSvg_svg__cls-57"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 488,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M267.39 211.94v1.67l18.03 10.42v-1.68l-18.03-10.41z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 492,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m267.39 211.94 18.03 10.41 19.52-11.27-18.03-10.41-19.52 11.27z",
                className: "MainSvg_svg__cls-68"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 496,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m304.33 211.05 1.28-.78v-24.64l-18.04-10.42-1.28.79 18.04 35.05z",
                className: "MainSvg_svg__cls-68"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 500,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m304.33 186.41 1.28-.78v26.72l-1.28.78v-26.72z",
                className: "MainSvg_svg__cls-57"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 504,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M266.13 213.37c.04-1.4-.02-2.78.14-4.26.15-1.45.55-2.88 1.14-4.22.6-1.34 1.37-2.59 2.24-3.8.42-.62.84-1.28 1.36-1.86.26-.28.54-.57.84-.8.15-.12.31-.23.47-.34l.44-.29c4.64-3.12 9.33-6.18 14.17-8.99.71-.41 1.61-.17 2.02.54.39.67.19 1.52-.44 1.96-4.61 3.18-9.39 6.1-14.2 8.96l-.45.27c-.13.08-.27.16-.41.24-.29.14-.55.31-.85.44-.57.29-1.19.59-1.7 1a8.845 8.845 0 0 0-2.37 3.17c-.56 1.21-.95 2.51-1.08 3.84-.13 1.31-.03 2.73-.04 4.13v.02c0 .35-.29.64-.64.63a.63.63 0 0 1-.63-.64Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 508,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M272.12 199.33a.47.47 0 0 1-.42-.24.499.499 0 0 1 .16-.68l16.1-9.95c.24-.14.54-.07.68.16s.07.54-.16.68l-16.1 9.95c-.08.05-.17.07-.26.07Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 512,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m286.29 200.64 18.04 10.41v-24.64L286.29 176v24.64z",
                className: "MainSvg_svg__cls-71"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 516,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M274.31 245.42c-3.88 2.24-10.2 2.23-14.11-.03s-3.93-5.9-.04-8.14c3.88-2.24 10.2-2.23 14.11.03s3.93 5.9.04 8.14Z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 520,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M262.59 236.77c2.53-1.41 3.65-2.08 3.65-2.08-.1.47.88.84 1.75.79.33-.02.45-.24.45-.24.34.53.33 1.05.16 1.48-.06.14-.22.52-.25.68-.04.19-.67.76-1.68.92l-.28-.29c-.8.39-1.24.97-2.28 1.48-2.12 1.03-3.5.63-3.84.17-.7-.93 1.1-2.23 2.32-2.91Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 524,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M269.41 235c-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.9.32-2.23.08-2.96-.54a1.4 1.4 0 0 1-.4-.52v-.02a.753.753 0 0 1 .01-.59s3.88-16.73 4.59-20.25c.13-.65.49-1.2.97-1.59l.36-.29 10.65-8.54a4.526 4.526 0 0 1 6.36.7 4.526 4.526 0 0 1-1.51 6.88l-11.66 6.21-5.62 17.76Z",
                className: "MainSvg_svg__cls-31"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 528,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M267.16 235.88c3.05-1.52 5.34-16.22 5.86-19.88.07-.49.38-.91.84-1.1 3.48-1.44 7.95-4.04 9.51-6.31 1.09.65.46 2.23 1.06 2.74.08.38-1.19.45-.98.78l-1.56 1.48-6.85 3.65c-.84 2.99-5.62 17.76-5.62 17.76-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.43.15-.96.17-1.47.09Z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 532,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M272.99 238.76s-.62 2.46-2.6 4.62c-1.04 1.12-.51 2.41.45 2.64.98.24 2.8 0 3.3-1.75.88-3.07 1.48-3.11 1.49-5 0 0-.28.41-.9.43-.69.02-1.73-.38-1.73-.93Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 536,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M272.03 237.89c.38-2.29 2.82-14.43 2.82-14.43.29-1.67.58-3.34.96-5 .13-.55.4-1.02.78-1.4l.28-.28 9.9-9.82c1.78-1.76 5.97-2.98 7.74-1.2 1.76 1.78.41 5.87-1.36 7.63-.22.22-.49.42-.74.59l-10.96 7.07c-.33 1.24-.7 2.47-1.08 3.71 0 0-3.7 12.44-4.2 14-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.9.32-2.23.08-2.96-.54a1.4 1.4 0 0 1-.4-.52v-.02a.753.753 0 0 1 .01-.59Z",
                className: "MainSvg_svg__cls-31"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 540,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M273.81 239.64c.54.1 1.11.09 1.57-.07.29-.11.5-.25.63-.43.09-.11.13-.23.15-.36.5-1.56 4.2-14 4.2-14 .37-1.23.75-2.47 1.08-3.71L292.4 214c.25-.17.51-.37.74-.59 1.48-1.46 2.65-4.53 1.99-6.55-.12-.27-.28-.52-.49-.73-.76-.76-3.21.09-4.2-.02-.67 3.3-2.9 9.72-10.22 12.74-.46.19-.77.61-.84 1.1-.51 3.54-2.67 17.42-5.57 19.69Z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 544,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg___", children: /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg___-2", children: [
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M269.7 193.83c-.47-.1-.96-.49-1.8-.56-.83-.07-4.11 1.52-3.2 2.64.91 1.13 3.37-.4 4.22-.41.86-.02.99.08 1.63 0 .27-.04.41-.06.31-.47-.09-.41-.43-1.03-1.18-1.19Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 550,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M281.46 180.39c-.94 2.08-1.19 3.99-1.83 6.07-.22.72-.39 1.41-.51 2.01a3.623 3.623 0 0 1-2.23 2.63c-2.4.95-6.28 2.42-7.08 2.5-.54.05-.58.84-.51 1.27s.1 1.12.61 1.38c1.51.76 7.71-1.14 10.03-1.77 2.23-.78 3.28-3.18 4.04-5.52.76-2.34 1.59-4.72 2.23-7.07.39-1.45.15-3.05-1.2-3.4-1.34-.35-3.03.75-3.55 1.9Z",
                  className: "MainSvg_svg__cls-31"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 554,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M280.57 188.75c0 3.76 1.02 15.04 1.3 16.26.09.38.29.94.66 1.1l.75-2.4 2.88 1.7.21 2.92c2.36.5 5.12.21 7.04-.9 1.19-.69 1.66-3.01 1.77-3.9 0 0 .01-.02.01-.03 0-.07 0-.14.01-.22.17-2.72 1.12-13.21 1.12-13.21.39-1.58.91-1.93.97-2.13.08-.29.07-1.2.07-1.21.06-1.03-1.06-3.01-1.54-3.61-1.02-1.26-4.01-3.1-4.29-3.26-1.79-1.04-4.12-1.36-5.73-1.46-.67-.09-1.86.4-2.39.74-1.32.83-1.44 1.46-1.79 2.38-.55 1.46-1.04 4.4-1.04 7.24Z",
                  className: "MainSvg_svg__cls-31"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 558,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M285.48 181.14c.05-.05.1-.1.16-.15.53-.51 1.1-.94 1.69-1.29.42.17.95.21 1.32.35.82.3 1.77-.5 2.55-.12.01 0-.21 1.18-.21 1.2-.56.25-1.07.83-1.51 1.36-.06.07-.13.14-.17.22-3.04 6.23-3.04 24.32-2.89 25.54-.6-.16-1.38-.18-2.38-.74-1.1-.62-1.22-1.03-1.5-1.4-1.13-2.96-.49-14.8-.49-15.9 0-2.78 1.31-6.97 3.44-9.07Z",
                  className: "MainSvg_svg__cls-23"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 562,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M295.1 188.9s-1.49-2.66-3.35-.79c-3.54 3.57.73 17.43-4.3 20.37 2.09.22 4.33-.13 5.95-1.06 1.19-.69 1.66-3.01 1.77-3.9 0 0 .01-.02.01-.03 0-.07 0-.14.01-.22.17-2.72 1.12-13.21 1.12-13.21.16-.63.33-1.06.49-1.37l-1.7.22Z",
                  style: {
                    opacity: 0.25,
                    mixBlendMode: "multiply",
                    fill: "#3e6593"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 566,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M286.77 201.5c-.25-.01-.41-.03-.68-.02-.27.02-.38.04-.73.14s-.95.34-1.24.68c-.07.08-.07.22.04.28.1.06.17.07.3 0 .02-.01-.09.06.05-.03s.78-.3 1.03-.29.41-.04.63 0c.22.04.37.08.6.15.23.07.48-.02.54-.29.06-.27-.25-.53-.39-.59-.14-.06-.08-.02-.13-.03-.05-.01 0 0-.02 0Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 574,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M282.35 202.59c.05-.05 2.53-.15 2.81-.39.38-.33.79-.44 1.27-.59.45-.14.66-.3 1.01-.03.29.23.5.82.68 1.15.2.37.43.6.26.89-.24.39-1.09.63-1.5.73-.56.14-1.34.43-1.92.4-.45-.02-1.37-.24-1.77-.43-.38-.18-1.5-1.03-.84-1.74Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 578,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M298.45 198.02c-.01.91.02-.28 0 0Z",
                  className: "MainSvg_svg__cls-31"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 582,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M297.81 185.81c-.23-1.36-1.22-2.46-2.68-2.27-1.46.19-2.32 1.25-2.33 2.7 0 .06.01.1.02.17.65 3.44 1.46 6.92 1.2 10.45-1.23 1.99-4.36 3.01-6.28 4.13-.74.43-.91 1.21-.51 1.9s.89 1.35 1.94.99c3.12-1.09 7.03-2.11 9.06-5.08.18-.26.18-.08.22-.68v-.62c.03-1.93-.16-8.72-.65-11.68Z",
                  className: "MainSvg_svg__cls-31"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 586,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M288.31 174.76c.18-.58.72-1 1.36-1.01.8 0 1.45.63 1.46 1.43 0 0 .17 4.98.18 5.11.05.33-.12.69-.53 1-.8.61-2.21.79-3.13.4-.48-.2-.74-.52-.76-.86-.01-.16 1.42-6.07 1.42-6.07Z",
                  className: "MainSvg_svg__cls-53"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 590,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M291.76 173.31c0 1.54-.33 2.67-.88 3.69-.06.1-.1.86-.58 1.26-1.75 1.49-3.26 1.8-3.62 1.79-.2 0-.71-.12-.88-.25-1.3-1.03-1.87-3.43-1.99-6.12-.14-3.07 1.52-5.63 3.72-5.73 2.2-.1 4.22 2.3 4.23 5.37Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 594,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M288.41 172.72c-.43-.33-1.22.85-3.83.1-.75-.22-2-1.05-1.83-1.38.66-1.31 1.9-2.82 3.06-3.47 3.86-2.18 5.34.13 5.34.13l-.04.02s.08.05.12.07c.33.05 2.24.64 2.16 3.04.09.77 0 1.65-.34 2.64-1.84 5.38-2.37 3.07-2.52 1.88-.21-1.66.13-.68-1.16-.77-.04-.17-.29-.27-.35-.43.05-.71.34-1.11-.6-1.84Z",
                  className: "MainSvg_svg__cls-65"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 598,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M290.64 175.15c.28-.47.25-1-.05-1.18-.31-.18-.78.05-1.06.52-.28.47-.25 1 .05 1.18.31.18.78-.05 1.06-.52Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 602,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 549,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 548,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M284.78 224.18c.03-1.38-.02-2.74.13-4.2.15-1.44.53-2.84 1.1-4.17a20.59 20.59 0 0 1 2.19-3.76c.41-.61.83-1.25 1.32-1.85.25-.29.52-.56.81-.81.29-.24.64-.48.92-.65 4.66-2.98 9.36-5.89 14.22-8.54l1.52 2.53c-4.62 3.03-9.4 5.79-14.23 8.49-.59.34-1.07.62-1.67.9-.57.3-1.17.59-1.66 1.02a8.93 8.93 0 0 0-2.29 3.17c-.54 1.2-.92 2.48-1.05 3.8-.12 1.29-.03 2.7-.03 4.08h-1.27Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 608,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M291.17 209.94a.47.47 0 0 1-.42-.24.499.499 0 0 1 .16-.68l15.92-9.82c.24-.14.54-.07.68.16s.07.54-.16.68l-15.92 9.82c-.08.05-.17.07-.26.07Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 612,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m332.07 262.11 16.19-9.37-65.83-38.04-21.51 12.45 60.53 34.96h10.62z",
                className: "MainSvg_svg__cls-63"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 616,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m320.6 192.32 1.21-.69s.03-.02.04-.02c.15-.08.36-.06.58.07l1.9 1.1c1.8-.18 4.34.52 7.16 2.15 2.81 1.62 5.35 3.85 7.16 6.12l1.9 1.1c.48.27.86.94.86 1.48v26.92c0 .19-.07.33-.19.38l-1.21.69-.54-1.52-17.31-10c-.32-.19-.58-.64-.58-1.01v-24.04l-.98-2.74Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 620,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M323.12 193.46c1.8-.18 4.34.52 7.16 2.15 2.81 1.62 5.35 3.85 7.16 6.12l1.9 1.1c.48.27.86.94.86 1.48v26.92c0 .37-.26.52-.58.33l-18.66-10.78c-.32-.19-.58-.64-.58-1.01v-26.92c0-.55.39-.77.86-.49l1.9 1.1Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 624,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M321.62 241.96v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM335.61 250.2v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM317.39 260.59V239.4H321v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87ZM303.45 252.37v-21.19h3.61v21.24c.03.29-.14.59-.53.82-.71.41-1.86.41-2.57 0-.41-.24-.58-.56-.51-.87Z",
                className: "MainSvg_svg__cls-32"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 628,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M299.33 234.43v-1.51l2.34-.06 18.13-10.47c.38-.22.97-.25 1.3-.05l16.66 9.62 2.19-.05v1.51c0 .15-.1.31-.32.43l-20.15 11.64c-.39.22-.97.25-1.3.05l-18.62-10.75c-.16-.09-.23-.22-.22-.35Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 632,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m299.55 233.3 18.62 10.75c.33.19.92.17 1.3-.05l20.15-11.64c.39-.22.43-.56.09-.75l-18.62-10.75c-.33-.19-.92-.17-1.3.05l-20.15 11.64c-.39.22-.43.56-.09.75Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 636,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m301.08 232.76 18.03 10.41 19.52-11.27v-1.67l-37.55.86v1.67z",
                className: "MainSvg_svg__cls-57"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 640,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M301.08 231.09v1.67l18.03 10.41v-1.67l-18.03-10.41z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 644,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m301.08 231.09 18.03 10.41 19.52-11.27-18.03-10.41-19.52 11.27z",
                className: "MainSvg_svg__cls-68"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 648,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m338.02 230.2 1.28-.79v-24.64l-18.04-10.41-1.28.78 18.04 35.06z",
                className: "MainSvg_svg__cls-68"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 652,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m338.02 205.56 1.28-.79v26.72l-1.28.79v-26.72z",
                className: "MainSvg_svg__cls-57"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 656,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M299.82 232.52c.04-1.4-.02-2.78.14-4.26.15-1.45.55-2.88 1.14-4.22.6-1.34 1.37-2.59 2.24-3.8.42-.62.84-1.28 1.36-1.86.26-.28.54-.57.84-.8.15-.12.31-.23.47-.34l.44-.29c4.64-3.12 9.33-6.18 14.17-8.99.71-.41 1.61-.17 2.02.54.39.67.19 1.52-.44 1.96-4.61 3.18-9.39 6.1-14.2 8.96l-.45.27c-.13.08-.27.16-.41.24-.29.14-.55.31-.85.44-.57.29-1.19.59-1.7 1a8.845 8.845 0 0 0-2.37 3.17c-.56 1.21-.95 2.51-1.08 3.84-.13 1.31-.03 2.73-.04 4.13v.02c0 .35-.29.64-.64.63a.63.63 0 0 1-.63-.64Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 660,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M305.81 218.48a.47.47 0 0 1-.42-.24.499.499 0 0 1 .16-.68l16.1-9.95c.24-.14.54-.07.68.16s.07.54-.16.68l-16.1 9.95c-.08.05-.17.07-.26.07Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 664,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m319.98 219.78 18.04 10.42v-24.64l-18.04-10.42v24.64z",
                className: "MainSvg_svg__cls-71"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 668,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg___businessman", children: [
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m317.92 227.89 1.23-.71v-.31l-3.29-.48v.31l2.06 1.19z",
                  style: {
                    fill: "#273f57"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 673,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m317.92 227.58 1.23-.71-2.06-1.19-1.23.71 2.06 1.19z",
                  style: {
                    fill: "#294863"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 679,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M306.65 264.3c-3.88 2.24-10.2 2.23-14.11-.03s-3.93-5.9-.04-8.14c3.88-2.24 10.2-2.23 14.11.03s3.93 5.9.04 8.14Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 685,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M294.94 255.64c2.53-1.41 3.65-2.08 3.65-2.08-.1.47.88.84 1.75.79.33-.02.45-.24.45-.24.34.53.33 1.05.16 1.48-.06.14-.22.52-.25.68-.04.19-.67.76-1.68.92l-.28-.29c-.8.39-1.24.97-2.28 1.48-2.12 1.03-3.5.63-3.84.17-.7-.93 1.1-2.23 2.32-2.91Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 689,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M301.75 253.87c-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.9.32-2.23.08-2.96-.54a1.4 1.4 0 0 1-.4-.52v-.02a.753.753 0 0 1 .01-.59s3.88-16.73 4.59-20.25c.13-.65.49-1.2.97-1.59l.36-.29 10.65-8.54a4.526 4.526 0 0 1 6.36.7 4.526 4.526 0 0 1-1.51 6.88l-11.66 6.21-5.62 17.76Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 693,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M299.5 254.75c3.05-1.52 5.34-16.22 5.86-19.88.07-.49.38-.91.84-1.1 3.48-1.44 7.95-4.04 9.51-6.31 1.09.65.46 2.23 1.05 2.74.08.38-1.19.45-.98.78l-1.56 1.48-6.85 3.65c-.84 2.99-5.62 17.76-5.62 17.76-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.43.15-.96.17-1.47.09Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 697,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M305.33 257.63s-.62 2.46-2.6 4.62c-1.04 1.12-.51 2.41.45 2.64.98.24 2.8 0 3.3-1.75.88-3.07 1.48-3.11 1.49-5 0 0-.28.41-.9.43-.69.02-1.73-.38-1.73-.93Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 701,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M304.37 256.77c.38-2.29 2.82-14.43 2.82-14.43.29-1.67.58-3.34.96-5 .13-.55.4-1.02.78-1.4l.28-.28 9.9-9.82c1.78-1.76 5.97-2.98 7.74-1.2 1.76 1.78.41 5.87-1.36 7.63-.22.22-.49.42-.74.59l-10.96 7.07c-.33 1.24-.7 2.47-1.08 3.71 0 0-3.7 12.44-4.2 14-.02.13-.06.25-.15.36-.13.18-.34.32-.63.43-.9.32-2.23.08-2.96-.54a1.4 1.4 0 0 1-.4-.52v-.02a.753.753 0 0 1 .01-.59Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 705,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M306.16 258.51c.54.1 1.11.09 1.57-.07.29-.11.5-.25.63-.43.09-.11.13-.23.15-.36.5-1.56 4.2-14 4.2-14 .37-1.23.75-2.47 1.08-3.71l10.96-7.07c.25-.17.51-.37.74-.59 1.48-1.46 2.65-4.53 1.99-6.55-.12-.27-.28-.52-.49-.73-.76-.76-3.21.09-4.2-.02-.67 3.3-2.9 9.72-10.22 12.74-.46.19-.77.61-.84 1.1-.51 3.54-2.67 17.42-5.57 19.69Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 709,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M316.98 198.31c-1.27-.45-3.28.55-3.73 1.53-.81 1.76-1.09 3.38-1.69 5.08-.6 1.7-1.57 5.04-2.28 6.67-.62.97 2.67 4.07 3.6 3.01.02-.02 1.72-3.26 1.74-3.3.88-1.68 1.14-2.41 1.76-4.21.62-1.8.9-3.43 1.39-5.39.3-1.2.48-2.94-.78-3.39Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 713,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M313.45 208.21c0 3.82.48 15.25.47 15.71 0 .4.1.79.3 1.16l1.13-.73 2.93 1.72.04 1.5c2.4.51 5.2.21 7.14-.91 1.21-.7 1.86-1.59 1.97-2.5 0 0 .01-.02.01-.03 0-.07 0-.14.01-.23.17-2.76 1.13-13.42 1.13-13.42.4-1.61.77-3.7.83-3.9.08-.29.13-.96.13-.98.06-1.04-1.06-2.14-1.27-2.33-1.18-1.15-4.27-3-4.56-3.16-1.82-1.05-4.12-1.78-5.76-1.88-.43-.2-.99-.19-1.53.16-1.35.84-1.98 2.24-2.22 3.26-.36 1.55-.76 3.67-.76 6.55Z",
                  className: "MainSvg_svg__cls-64"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 717,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m314.22 225.08 1.13-.73s-.22-14.49-1.39-15.49c0 0-.12 15.59.25 16.22Z",
                  className: "MainSvg_svg__cls-61"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 721,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M317.59 201.44c.05-.05.11-.1.16-.15.54-.51 1.11-.95 1.72-1.31.43.17.96.21 1.34.35.83.3 1.54.79 2.32 1.18.01 0 .03 0 .04.01v.07c-.57.26-1.07.67-1.52 1.22-.06.07-.12.15-.17.22-4.09 5.43-3.34 21.8-3.19 23.04-.61-.16-1.19-.39-1.7-.68-.53-.31-.94-.66-1.23-1.04-.19-2.45-1.42-13.66-1.42-14.77 0-2.82 1.5-6.01 3.65-8.14Z",
                  className: "MainSvg_svg__cls-23"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 725,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "g",
                {
                  style: {
                    opacity: 0.19,
                    mixBlendMode: "multiply"
                  },
                  children: /* @__PURE__ */ jsxDEV7(
                    "path",
                    {
                      d: "M318.51 202.3c-1.3 1.51-2.08 3.36-2.61 5.25-.25.95-.4 1.92-.52 2.9-.09.98-.12 1.95-.12 2.93-.03 3.9.25 7.78.74 11.63-.13-1.94-.22-3.88-.28-5.82-.05-1.94-.09-3.88-.04-5.81.02-.97.08-1.93.15-2.89.11-.95.26-1.9.5-2.83.48-1.85 1.2-3.67 2.35-5.2l-.18-.16Z",
                      style: {
                        fill: "#7daaea"
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/assets/svgs/MainSvg.js",
                      lineNumber: 735,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 729,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M318.32 227.58c7.14-.51 2.05-15.53 5.61-19.13 1.7-1.71 3.06.72 3.06.72l1.95-.25c-.11.52-.23 1.07-.35 1.56 0 0-.02.23-.06.62-.05.16-.12.35-.19.58-.01.03.04.06.13.11-.26 2.93-.88 9.95-1.02 12.11 0 .09 0 .17-.01.24v.03c-.11.91-.77 1.81-1.98 2.5-1.94 1.12-4.74 1.42-7.14.91Z",
                  className: "MainSvg_svg__cls-61"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 742,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M317.75 201.68c.13.34.44.68.91.96.91.53 2.21.69 3.38.5.53-.1 1.02-.26 1.45-.51.34-.19.58-.41.76-.65.07-.11.12-.22.16-.33.1-.24.11-.49.03-.74v-.03c-.11-.37-.43-.74-.94-1.03-1.32-.77-3.48-.77-4.82 0-.55.32-.87.71-.97 1.11-.07.23-.05.47.04.71Z",
                  className: "MainSvg_svg__cls-59"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 746,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M317.79 201.59c.13.34.44.68.91.96.91.53 2.21.69 3.38.5.53-.1 1.02-.26 1.45-.51.34-.19.58-.41.76-.65.07-.11.12-.22.16-.33.1-.24.11-.49.03-.74v-.03c-.11-.37-.43-.74-.94-1.03-1.32-.77-3.48-.77-4.82 0-.55.32-.87.71-.97 1.11-.07.23-.05.47.04.71Z",
                  className: "MainSvg_svg__cls-23"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 750,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M321.01 194.98c.24-.56.83-.94 1.48-.88.81.07 1.4.78 1.33 1.59 0 0-.34 5.05-.33 5.18.01.34-.19.68-.64.95-.87.54-2.31.58-3.21.09-.47-.25-.69-.6-.68-.95 0-.16 2.05-5.99 2.05-5.99Z",
                  className: "MainSvg_svg__cls-53"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 754,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M324.93 193.61c-.24 1.54-.76 2.62-1.48 3.55-.07.1-.24.84-.78 1.17-1.99 1.21-3.56 1.28-3.92 1.22-.2-.03-.69-.24-.84-.4-.92-.95-1.32-3.73-1.01-6.45.35-3.1 2.43-5.4 4.65-5.15s3.87 2.98 3.38 6.06Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 758,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M322.15 192.41c-.39-.65-3.14-.78-3.84-.97-.76-.21-.69-.5-1.13-.08-.09.09-1.08-1.36-.86-1.66.87-1.2 2.24-1.93 3.5-2.4 4.22-1.57 5.33.99 5.33.99h-.04s.07.07.11.1c.32.1 1.76.7 1.29 3.1-.03.78-.26 1.65-.77 2.6-2.71 5.1-2.48 3-2.43 1.78.06-1.7.24-.66-1.04-.95 0-.18-.24-.31-.29-.49.16-.7.8-.97.17-2.01Z",
                  className: "MainSvg_svg__cls-65"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 762,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M323.43 195.48c.35-.43.41-.96.14-1.19-.28-.23-.79-.07-1.14.36-.35.43-.41.96-.14 1.19.28.23.79.07 1.14-.36Z",
                  className: "MainSvg_svg__cls-17"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 766,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M315.51 208.67c.71-3.28 2.34-5.61 2.34-5.61l.32-.72c.03-.07.12-.1.19-.06l.95.53c.07.05.08.16 0 .21l-.68.57c-3.17 5.31-1.72 15.77-1.72 15.77l-1.21.94-1.2-2.52s0-4.5 1-9.12Z",
                  className: "MainSvg_svg__cls-34"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 770,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 672,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M318.47 243.33c.03-1.38-.02-2.74.13-4.2.15-1.44.53-2.84 1.1-4.17a20.59 20.59 0 0 1 2.19-3.76c.41-.61.83-1.25 1.32-1.85.25-.29.52-.56.81-.81.29-.24.64-.48.92-.65 4.66-2.98 9.36-5.89 14.22-8.54l1.52 2.53c-4.62 3.03-9.4 5.79-14.23 8.49-.59.34-1.07.62-1.67.9-.57.3-1.17.59-1.66 1.02a8.93 8.93 0 0 0-2.29 3.17c-.55 1.2-.92 2.48-1.05 3.8-.12 1.29-.03 2.7-.03 4.08h-1.27Z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 775,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M324.86 229.08a.47.47 0 0 1-.42-.24.499.499 0 0 1 .16-.68l15.92-9.82c.24-.15.54-.07.68.16s.07.54-.16.68L325.12 229c-.08.05-.17.07-.26.07Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 779,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m319.6 278.88 16.2-9.37-65.84-38.04-21.5 12.45 60.52 34.96h10.62z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 783,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m245.83 242.4 63.09 36.45v-31.82l-63.09-36.45v31.82z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 787,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m249.4 241.58 55.95 32.33v-15.6l-55.95-32.32v15.59z",
                className: "MainSvg_svg__cls-34"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 791,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M250.17 241.14v-14.71l-.77-.44v15.59l55.95 32.33v-.89l-55.18-31.88z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 795,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m250.17 226.43-.77-.44v15.59l.77-.44v-14.71z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 799,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m245.83 213.85 63.09 36.41v-3.58l-63.09-36.45v3.62z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 803,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m308.92 278.85 16.53-9.55v-31.82l-16.53 9.54v31.83z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 807,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M242.84 211.38v-2.02l66.67 35.83 22.23-7.86-22.02 12.69-66.88-38.64z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 811,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M331.74 235.31v2.02l-22.02 12.69V248l22.02-12.69z",
                style: {
                  fill: "#7a3931"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 815,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m331.74 235.3-66.88-38.64-22.02 12.7L309.72 248l22.02-12.7z",
                style: {
                  fill: "#9b604e"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 821,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M308.92 254.24c-.09 0-.18-.02-.26-.07l-63.08-36.45a.521.521 0 0 1-.19-.72c.14-.25.46-.34.72-.19l62.82 36.3 16.27-9.39c.25-.14.57-.06.72.19.14.25.06.57-.19.72l-16.53 9.54c-.08.05-.17.07-.26.07Z",
                className: "MainSvg_svg__cls-40"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 827,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 243.38-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 831,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 242.76-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 835,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 242.65-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 839,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 242.03-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 843,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 241.89-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 847,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 241.27-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 851,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 241.16-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 855,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 240.54-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 859,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 240.43-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 863,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m311.57 239.81-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 867,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M311.54 239.02h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM311.96 238.79h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM312.37 238.55h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM312.78 238.32h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM313.19 238.08h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM313.61 237.84h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM314.02 237.61H314l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM314.43 237.37h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM314.84 237.14h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM315.25 236.9h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM315.67 236.67h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM316.08 236.43h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM316.49 236.19h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM316.9 235.96h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM317.31 235.72h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM317.73 235.49h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM318.14 235.25h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM318.55 235.02h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM318.96 234.78h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM319.38 234.54h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM319.79 234.31h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM320.2 234.07h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM271.79 218.34l-6.74-3.89v-.62l16.57-1.78v.62l-9.83 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 871,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m271.79 217.72-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 875,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M271.77 216.93h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM272.18 216.7h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM272.59 216.46h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM273.01 216.23h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM273.42 215.99h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM273.83 215.76h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM274.24 215.52h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM274.65 215.28h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM275.07 215.05h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM275.48 214.81h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM275.89 214.58h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM276.3 214.34h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM276.72 214.11h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM277.13 213.87h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM277.54 213.63h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM277.95 213.4h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM278.36 213.16h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM278.78 212.93h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM279.19 212.69h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM279.6 212.46h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM280.01 212.22h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM280.42 211.98h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM305.24 234.37l-6.74-3.89v-.62l16.56-1.78v.62l-9.82 5.67z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 879,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m305.24 233.75-6.74-3.89 9.82-5.67 6.74 3.89-9.82 5.67zM297.76 230.04l-6.74-3.89 9.83-5.67 6.74 3.89-9.83 5.67z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 883,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M305.21 232.96h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM305.62 232.73h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM306.04 232.49h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM306.45 232.26h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM306.86 232.02h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM307.27 231.78h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM307.69 231.55h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM308.1 231.31h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM308.51 231.08h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM308.92 230.84h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM309.33 230.61h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM309.75 230.37h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM310.16 230.13h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM310.57 229.9h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM310.98 229.66h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM311.39 229.43h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM311.81 229.19h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM312.22 228.96h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM312.63 228.72h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM313.04 228.48h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM313.46 228.25h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM313.87 228.01h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM297.75 229.33h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM298.17 229.09h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM298.58 228.86h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM298.99 228.62h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM299.4 228.38h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM299.82 228.15h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM300.23 227.91h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM300.64 227.68h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM301.05 227.44h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM301.46 227.21h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM301.88 226.97h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM302.29 226.73h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM302.7 226.5h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM303.11 226.26h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM303.52 226.03h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM303.94 225.79h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM304.35 225.56h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM304.76 225.32h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM305.17 225.08h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM305.59 224.85h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM306 224.61h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02ZM306.41 224.38h-.02l-5.42-3.13s-.02-.03-.01-.05c0-.02.03-.02.05-.01l5.42 3.13s.02.03.01.05c0 .01-.02.02-.03.02Z",
                className: "MainSvg_svg__cls-19"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 887,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m274.47 223.9 7.4 4.27 10.07-5.81v-.21l-7.41-4.07-10.06 5.61v.21z",
                className: "MainSvg_svg__cls-66"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 891,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m274.47 223.69 7.4 4.27 10.07-5.81-7.41-4.27-10.06 5.81z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 895,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m274.76 223.66 7.15 4.13 9.73-6.73-7.15-4.14-9.72 5.12-.01 1.62z",
                style: {
                  fill: "#edeceb"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 899,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M281.05 226.93c-.5-.27-1-.55-1.5-.84l-1.49-.85c-.98-.58-1.97-1.15-2.95-1.74 1 .55 1.99 1.12 2.98 1.68l1.48.86c.49.29.98.58 1.47.88ZM281.04 226.37c-.55-.28-1.08-.59-1.62-.89-.53-.31-1.06-.62-1.58-.95.55.28 1.08.59 1.62.89.53.31 1.06.62 1.58.95Z",
                className: "MainSvg_svg__cls-44"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 905,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M281.6 227.88h-.01s-.08-.1-.08-.15v-1.58c0-.06.03-.08.08-.06h.01s.08.1.08.15v1.58c0 .06-.03.08-.08.06Z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 909,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m274.47 222.02 7.4 4.27 10.07-5.81v-.21l-7.41-4.06-10.06 5.6v.21z",
                className: "MainSvg_svg__cls-66"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 913,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M281.65 228.04v-2.08l10.07-5.81v2.08l-9.85 5.87-.22-.06z",
                className: "MainSvg_svg__cls-66"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 917,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m274.47 221.81 7.4 4.28 10.07-5.82-7.41-4.27-10.06 5.81z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 921,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M282.13 225.12h-.01l-5.98-3.46.05-.03 8.08-4.67h.01l5.98 3.46-.05.03-8.08 4.67Zm-5.87-3.46 5.87 3.39 8.01-4.62-5.87-3.39-8.01 4.62Z",
                className: "MainSvg_svg__cls-55"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 925,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M282.89 223.73a.894.894 0 0 0-.92 0h-.02l-3.2-1.85h.02c.13-.09.21-.23.21-.38s-.08-.29-.21-.37h-.02l.02-.03 4.74-2.74c.28.17.64.17.92 0h.02l3.2 1.85h-.02c-.13.09-.21.23-.21.38s.08.29.21.37h.02l-.02.03-4.74 2.74Zm-.47-.16c.16 0 .32.04.47.12l4.7-2.72c-.13-.08-.21-.23-.21-.38s.08-.3.21-.38l-3.15-1.82a.98.98 0 0 1-.94 0l-4.7 2.72c.13.08.21.23.21.38s-.08.3-.21.38l3.15 1.82c.15-.08.31-.12.47-.12Z",
                className: "MainSvg_svg__cls-55"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 929,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M281.87 228.17v-2.08l10.07-5.82v2.09l-10.07 5.81z",
                className: "MainSvg_svg__cls-30"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 933,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M282.53 227.35v-1.1l-.1.06v1.09l.1-.05zM282.73 227.23v-1.1l-.1.06v1.09l.1-.05zM282.94 227.11v-1.1l-.1.06v1.09l.1-.05zM286.37 224.76v-.54l2.61-1.5v.54l-2.61 1.5z",
                className: "MainSvg_svg__cls-20"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 937,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m281.81 225.87.01-.01 9.83-5.68s.04 0 .05.01c0 .02 0 .04-.01.05l-9.83 5.68s-.04 0-.05-.01v-.03Z",
                className: "MainSvg_svg__cls-66"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 941,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m318.19 278.24 11.94-9.73c.29-.17.53-.62.53-1.01l2.36-9.27c.18-.79-2.6-2.08-2.89-1.91L316 264.48c-.29.17-.53.62-.53 1.01v10.78c0 .39 2.25 2.03 2.72 1.97Z",
                className: "MainSvg_svg__cls-35"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 945,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m318.36 278.18 14.13-8.16c.29-.17.53-.62.53-1.01v-10.78c0-.39-.24-.57-.53-.4l-14.13 8.16c-.29.17-.53.62-.53 1.01v10.78c0 .39.24.57.53.4Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 949,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m316.81 264.89 14.24-8.22c.29-.17.53 0 .53.39 0 0-.02 0-.02.01l-14.24 8.22c-.29.17-.53.63-.53 1.02v10.86c-.28.16-.51-.02-.51-.4v-10.86c0-.39.24-.85.53-1.02Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 953,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m318.72 265.44 1.22-.71v-.31l-3.28-.48v.31l2.06 1.19z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 957,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m318.72 265.13 1.22-.71-2.05-1.19-1.23.71 2.06 1.19z",
                className: "MainSvg_svg__cls-35"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 961,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m330.53 258.57 1.22-.71v-.31l-3.28-.48v.31l2.06 1.19z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 965,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m330.53 258.26 1.22-.71-2.05-1.19-1.23.71 2.06 1.19zM325.34 260.12v-2.31c0-.31-.22-.44-.5-.28l-2.3 1.33c-.27.16-.5.54-.5.86l-.03 2.92-.48-.33v-3.01c0-.41.29-.91.65-1.12l3.01-1.74c.36-.21.91 0 1.05.4l-.43 3.6-.48-.33Z",
                className: "MainSvg_svg__cls-35"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 969,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M325.81 260.44v-2.31c0-.31-.22-.44-.5-.28l-2.3 1.33c-.27.16-.5.54-.5.86v2.31l-.5.29v-3.01c0-.41.29-.91.65-1.12l3.01-1.74c.36-.21.65-.04.65.37v3.01l-.5.29ZM328.22 218.94c.09-1.87.74-8.29 1.05-11.19.14-1.33-.84-2.55-2.3-2.52-1.46.04-2.39 1.01-2.7 2.43-.01.06-.01.1-.02.17-.23 3.71-.12 7.41-.31 11.12-1.31 1.2-4.82 4-6.84 6.1-.78.81-.47 1.73.21 2.3.68.57 1.19.68 2.16-.02 2.9-2.08 6.69-3.72 8.51-7.13.16-.3.16-.07.2-.67.04-.6-.06 1.28.03-.59Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 973,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M317.01 225.91c-.26.03-.48.08-.72.14-.23.06-.46.13-.68.23-.44.18-.9.44-1.2.89-.07.11-.04.25.06.32.09.06.21.05.29-.02h.02c.26-.27.65-.4 1.05-.47.2-.04.4-.06.61-.06.2 0 .42 0 .6.01.29.03.54-.18.57-.47a.519.519 0 0 0-.47-.57h-.11Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 977,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M315.63 226.7c.32-.14-1.13.95-1.45 1.45-.73 1.14-1.73 1.73.13 2.16 1.25.29 1.09-.61 1.83-.94 1.05-.46 2.42-1.24 2.45-1.94.08-1.74-1.92-1.51-1.92-1.51l-1.04.78Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 981,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M309.57 211.07c-.09.19-2.38 3.99-2.48 4.19-.56 1.14-1.19 1.75-1.69 3.06-.23.61.24 2.07.88 2.3.64.24 1.59-.21 1.94-.59 1.03-1.16 1.68-1.97 2.66-3.05.05-.06 2.28-2.91 2.34-2.97-1.12-.82-2.37-2.3-3.65-2.94Z",
                className: "MainSvg_svg__cls-64"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 985,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M307.41 218.85c-.11-.1-.23-.19-.36-.27-.35-.22-.81-.18-1.14.07-.11.08-.24.18-.37.28-.69.52-1.63 1.22-1.98 1.46-.99.68-1.88 2.14-1.5 2.78.78 1.31 2.12-.16 3.01-1.13.08-.08.15-.14.23-.19-.1.24-.24.47-.45.65h-.01c-.1.1-.11.25-.02.35.07.08.19.1.28.06.39-.18.72-.5.95-.86.12-.18.21-.37.3-.57v-.02c.21-.35.47-.66.74-.94.11-.12.22-.23.33-.34.37-.37.37-.98-.02-1.32Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 989,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m259.95 198.67-1.13-7.7 10.55 4.19 1.12 7.7-10.54-4.19z",
                style: {
                  fill: "#f9f9f9"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 993,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M268.54 193.75c-.25-.01-.41-.03-.68-.02-.27.02-.38.04-.73.14s-.95.34-1.24.68c-.07.08-.07.22.04.28.1.06.17.07.3 0 .02-.01-.09.06.05-.03.14-.1.78-.3 1.03-.29.25 0 .41-.04.63 0s.37.08.6.15c.23.07.48-.02.54-.29.06-.27-.25-.53-.39-.59-.14-.06-.08-.02-.13-.03-.05-.01 0 0-.02 0Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 999,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg__pen", children: [
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m157.23 327.5-18.91-5.34-69.92-40.15-.91.19c-1.14.53-2.46.49-3.56-.12l-38.85-21.87c-1.25-1.25-1.93-2.82-.48-3.91-3.25-1.8-3.2-2.59-.22-5.14l4.58-3.24 116.27 66.9 12.22 12.13c.29.18.11.62-.22.55Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1004,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m26.85 246.48-.06-.03h-.03c-.52-.27-1.22-.22-2 .23-1.62.94-2.94 3.2-2.94 5.06 0 .85.28 1.45.73 1.78v.02l6.58 4.26 4.69-7.85-6.96-3.47Z",
                  className: "MainSvg_svg__cls-29"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1008,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m28.51 257.4-.62-4.06-5.74-3.31c-.21.58-.33 1.16-.33 1.72 0 .85.28 1.45.73 1.78v.02l5.96 3.86Z",
                  className: "MainSvg_svg__cls-80"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1012,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m36 249.11-1.41-.69c-.81-.45-1.91-.37-3.13.33-2.46 1.42-4.46 4.87-4.46 7.69 0 1.59.64 2.65 1.63 3.02l1.08.54.26-.45c.47-.08.97-.26 1.49-.56 2.46-1.42 4.46-4.87 4.46-7.69 0-.61-.1-1.13-.27-1.57l.35-.61Z",
                  className: "MainSvg_svg__cls-30"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1016,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m29.51 253.26-1.41-.82c-.69 1.3-1.11 2.72-1.11 4.01 0 1.59.64 2.65 1.63 3.02l1.08.54.26-.45c.3-.05.62-.15.95-.29-.71-3.09-1.41-5.99-1.41-5.99Z",
                  className: "MainSvg_svg__cls-80"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1020,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M37.37 252.03c0 2.83-2 6.27-4.46 7.69-2.46 1.42-4.46.28-4.46-2.54s2-6.27 4.46-7.69c2.46-1.42 4.46-.28 4.46 2.54Z",
                  style: {
                    fill: "#bed0e5"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1024,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M36.21 249.23c-.82-.55-1.98-.52-3.29.23-2.46 1.42-4.46 4.87-4.46 7.69 0 1.38.48 2.35 1.25 2.83l49.49 28.16 6.6-10.67-49.6-28.24Z",
                  className: "MainSvg_svg__cls-29"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1030,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m79.2 288.15 2.83-4.58-52.52-30.32c-.65 1.27-1.05 2.65-1.05 3.9 0 1.38.48 2.35 1.25 2.83l49.49 28.16Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1034,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m83.05 275.89-1.41-.69c-.81-.45-1.91-.37-3.13.33-2.46 1.42-4.46 4.87-4.46 7.69 0 1.59.64 2.65 1.63 3.02l1.08.54.26-.45c.47-.08.97-.26 1.49-.56 2.46-1.42 4.46-4.87 4.46-7.69 0-.61-.1-1.13-.27-1.57l.35-.61Z",
                  className: "MainSvg_svg__cls-30"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1038,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m76.36 280.28-1.37-.77c-.6 1.21-.96 2.52-.96 3.71 0 1.59.64 2.65 1.63 3.02l1.08.54.26-.45c.47-.08.97-.26 1.49-.56.33-.19.64-.41.95-.66l-3.09-4.82Z",
                  className: "MainSvg_svg__cls-80"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1042,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m134.27 319.64 6.6-10.67-57.94-33.03c-.81-.52-1.97-.48-3.25.26-2.46 1.42-4.46 4.87-4.46 7.69 0 1.36.46 2.32 1.22 2.8l.08.05h.02l57.72 32.89Z",
                  style: {
                    fill: "#fffbf8"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1046,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m134.27 319.64 6.6-10.67-57.94-33.03c-.81-.52-1.97-.48-3.25.26-2.46 1.42-4.46 4.87-4.46 7.69 0 1.36.46 2.32 1.22 2.8l.08.05h.02l57.72 32.89Z",
                  style: {
                    fill: "#f2f2f2"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1052,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m136.97 315.28-60.79-35.09c-.59 1.21-.95 2.51-.95 3.7 0 1.36.46 2.32 1.22 2.8l.08.05h.02l57.72 32.89 2.7-4.36Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1058,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M141.4 309.39c-.8-.91-2.16-1.03-3.71-.14-2.46 1.42-4.46 4.87-4.46 7.69 0 1.63.66 2.69 1.69 3.03l14.62 3.62 2.18-3.17-10.31-11.03Z",
                  className: "MainSvg_svg__cls-30"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1062,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m149.53 323.6 1.2-1.75-.55-.34-16.15-7.95c-.51 1.12-.8 2.3-.8 3.39 0 1.62.66 2.69 1.69 3.03l14.62 3.62Z",
                  className: "MainSvg_svg__cls-80"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1066,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M152.03 321.27c0 .86-.61 1.91-1.36 2.34-.75.43-1.36.09-1.36-.77s.61-1.91 1.36-2.34c.75-.43 1.36-.09 1.36.77Z",
                  style: {
                    fill: "#6d342e"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1070,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M155.03 324.09c0 .2-.15.46-.33.56-.05.03-.09.05-.14.05-.03 0-.06 0-.09-.02l-3.9-1.02-.23-.06c-.45-.12-.8-.41-1.02-.8.02-.86.62-1.89 1.36-2.31.04-.02.09-.05.12-.06.12 0 .23.02.35.05.28.07.53.22.72.41l.14.14 2.91 2.85.03.03c.02.02.02.03.04.05.02.03.03.09.03.14Z",
                  style: {
                    fill: "#cecece"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1076,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M155 323.95s-.02-.03-.04-.05c0-.02-.02-.02-.03-.03a.282.282 0 0 0-.23.03c-.18.1-.33.36-.33.56 0 .11.04.18.09.22.03 0 .06.02.09.02.14.02.3-.02.41-.13.16-.17.18-.44.03-.62Z",
                  style: {
                    fill: "#565656"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1082,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M65.81 279.96c0 1.47-1.64 2.85-2.74 2.21L26.25 259.8c-1.1-.64-2.01-2.36-2.01-3.84l-.9.38c0-1.47 1.8-2.53 2.9-1.9l37.56 21.68c1.1.64 2.01 2.36 2.01 3.84Z",
                  style: {
                    fill: "#ad6a66"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1088,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M64.89 280.59c0 1.47-.9 2.15-2.01 1.52l-37.56-21.68c-1.1-.64-2.01-2.36-2.01-3.84 0-1.47.9-2.15 2.01-1.52l37.56 21.68c1.1.64 2.01 2.36 2.01 3.84Z",
                  className: "MainSvg_svg__cls-30"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1094,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m150.18 321.51-.36-.18c-.3.45-.5.98-.5 1.46.21.39.56.69 1.02.8l.23.06 3.9 1.02s.06.01.09.01l.13-.46-4.5-2.73Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1098,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 1003,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M341.6 5.92a5.558 5.558 0 0 1-5.91 5.17c-.23-.01-.45-.04-.67-.09a5.55 5.55 0 0 1-4.52-5.8c.1-1.6.87-3 2.04-3.94 1.04-.87 2.4-1.34 3.87-1.25.72.05 1.4.23 2.01.51 0 .01.02.01.03.02 1.99.95 3.3 3.03 3.15 5.37Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1103,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M340.22 1.9c-.89.48-1.91.74-3 .67-.23-.01-.45-.04-.67-.09a5.492 5.492 0 0 1-3.13-1.8c-.31.17-.6.36-.87.59a5.503 5.503 0 0 0-2.04 3.94c-.18 2.83 1.8 5.3 4.52 5.8.22.05.45.08.67.09 2.32.15 4.4-1.15 5.36-3.11.31-.63.5-1.33.55-2.06.1-1.53-.44-2.95-1.38-4.02Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1107,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { id: "MainSvg_svg__woman", children: [
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M348.37 117.53c-6.92-4-18.11-4.02-24.99-.05-2.28 1.32-3.78 2.91-4.55 4.59l-14.19 8.19 7.63 4.41h19.92c5.69.72 11.85-.17 16.26-2.72 6.88-3.97 6.84-10.43-.08-14.43Z",
                  className: "MainSvg_svg__cls-62"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1112,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.36 126.7 13.9 8.02 18.91-10.91v-.39l-13.9-7.64-18.91 10.53v.39z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1116,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.36 126.31 13.9 8.03 18.91-10.92-13.9-8.03-18.91 10.92z",
                  className: "MainSvg_svg__cls-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1120,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.91 126.26 13.44 7.76 18.27-12.66-13.43-7.75-18.26 9.61-.02 3.04z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1124,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.93 123.22-.01 1.01 13.43 7.75 16.67-11.54-11.83-6.83-18.26 9.61z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1128,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M310.72 132.4c-.94-.51-1.88-1.04-2.81-1.57l-2.79-1.59c-1.85-1.09-3.71-2.15-5.54-3.27 1.88 1.03 3.74 2.11 5.6 3.16l2.78 1.62c.93.54 1.85 1.09 2.76 1.65ZM310.72 131.35a68.67 68.67 0 0 1-3.03-1.68c-1-.58-1.99-1.17-2.97-1.79 1.03.53 2.03 1.1 3.03 1.68 1 .58 2 1.16 2.97 1.79Z",
                  className: "MainSvg_svg__cls-96"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1132,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M311.76 134.19h-.02a.382.382 0 0 1-.14-.28v-2.97c0-.1.06-.15.14-.11h.02c.08.06.14.18.14.28v2.97c0 .1-.06.15-.14.11Z",
                  className: "MainSvg_svg__cls-52"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1136,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.36 123.17 13.9 8.03 18.91-10.92v-.39l-13.9-7.63-18.91 10.53v.38z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1140,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M311.86 134.49v-3.91l18.91-10.92v3.91l-18.51 11.02-.4-.1z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1144,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m298.36 122.79 13.9 8.02 18.91-10.92-13.9-8.02-18.91 10.92z",
                  className: "MainSvg_svg__cls-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1148,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M312.26 134.72v-3.91l18.91-10.92v3.92l-18.91 10.91z",
                  className: "MainSvg_svg__cls-52"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1152,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m318.88 112.8-6.41 16.37 2.14-.01 16.31-9.41-12.04-6.95z",
                  style: {
                    fill: "#5f3f8e",
                    opacity: 0.1,
                    mixBlendMode: "multiply"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1156,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m300.2 122.04 12.34 7.13 16.8-9.7v-.34l-12.35-6.78-16.79 9.35v.34z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1164,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m300.2 121.7 12.34 7.13 16.8-9.7-12.35-7.13-16.79 9.7z",
                  className: "MainSvg_svg__cls-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1168,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m300.69 121.65 11.93 6.89 16.23-11.24-11.93-6.88-16.22 8.54-.01 2.69z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1172,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M300.7 118.96v.86l11.92 6.89 14.78-10.24-10.48-6.05-16.22 8.54z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1176,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M311.18 127.1c-.84-.45-1.67-.92-2.49-1.39l-2.48-1.41c-1.64-.97-3.29-1.91-4.92-2.91 1.67.91 3.32 1.87 4.98 2.81l2.47 1.44c.82.48 1.64.97 2.45 1.46ZM311.17 126.17c-.91-.47-1.8-.98-2.69-1.49-.89-.52-1.77-1.04-2.64-1.59.91.47 1.8.98 2.69 1.49.89.52 1.77 1.03 2.64 1.59Z",
                  className: "MainSvg_svg__cls-96"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1180,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M312.1 128.69h-.02a.344.344 0 0 1-.13-.25v-2.63c0-.09.06-.14.13-.1h.02c.07.05.13.16.13.25v2.63c0 .09-.06.14-.13.1Z",
                  className: "MainSvg_svg__cls-52"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1184,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m300.2 118.91 12.34 7.13 16.8-9.7V116l-12.35-6.78-16.79 9.35v.34z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1188,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M312.19 128.96v-3.47l16.79-9.7v3.48l-16.44 9.78-.35-.09z",
                  className: "MainSvg_svg__cls-7"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1192,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m300.2 118.57 12.34 7.13 16.8-9.7-12.35-7.13-16.79 9.7z",
                  className: "MainSvg_svg__cls-5"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1196,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m301.76 118.43 11.02 6.36 15-8.65-11.03-6.37-14.99 8.66z",
                  className: "MainSvg_svg__cls-100"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1200,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M312.54 129.17v-3.47l16.8-9.7v3.47l-16.8 9.7z",
                  className: "MainSvg_svg__cls-52"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1204,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M324.56 116.06c-2.19.84-5.74.83-7.95-.02-2.2-.85-2.22-2.22-.03-3.06 2.19-.84 5.74-.83 7.95.02 2.2.85 2.22 2.22.03 3.06Z",
                  style: {
                    opacity: 0.07,
                    fill: "#854087",
                    mixBlendMode: "multiply"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1208,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M330.68 55.44c-3.16-2.14-7.46-1.32-9.6 1.84-2.44 3.6-4.53 7.35-6.52 11.24-.5.97-.98 1.95-1.38 2.98-.4 1.04-.75 2.11-1.12 3.17-.35 1.08-.78 2.12-1.23 3.19-.24.53-.49 1.06-.79 1.64-.15.3-.31.59-.49 1a7.53 7.53 0 0 0-.38 1.04c-.03.13-.05.2-.09.37-.04.2-.07.39-.08.59-.03.3-.02.79.04 1.17.01.07.03.14.04.21l.1.39c.26 1.01 10.11 20.42 9.71 23.09v.04c-.4 2.17-1.31 4.2-2.71 5.94-.76.93-2.64.76-1.01 2.22.07.06.15.1.23.15.47.47 1.02 1.07 1.94.63.88-.42 2.4-1.1 3.18-1.8 1.27-1.05.55-1.98 1.4-2.92 1.45-1.61 2.03-1.43 2.23-2.97 0-.01-.27-1.89-1.3-2.79-.71-4.05-1.52-8.06-2.29-12.09l-1.22-6.15c-.22-1.02-.72-3.47-1.54-4.43.14-.25.68-.75.85-1 .59-.79 1.24-1.6 2-2.34l2.24-2.28c.73-.77 1.4-1.59 2.05-2.42 1.32-1.65 2.63-3.31 3.9-5.01 1.28-1.68 2.52-3.42 3.68-5.15v-.02c2.13-3.15 1.3-7.43-1.85-9.57Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1216,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "m320.67 79.87 2.24-2.28c.73-.77 1.4-1.59 2.05-2.42.98-1.23 1.95-2.47 2.91-3.72-3.31-4.69-6.87-9.59-8.45-11.61-.8 1.27-1.55 2.57-2.29 3.88 1.55.55 3.96 6.03-3.64 18.41-1.52 2.47.91 3.14 5.38 17.4h-.02c.07.25.16.56.26.91.28 1.04.58 2.15.89 3.34.42 1.71.79 3.54.88 4.95-.3 2-.19 4.18-2 5.82-.62.56-1.32 1.36-2.64 1.58-.12.02-.2.06-.3.09.36.26.8.4 1.38.12.88-.42 2.4-1.1 3.18-1.8 1.27-1.05.55-1.98 1.4-2.92 1.45-1.61 2.03-1.43 2.23-2.97 0-.01-.27-1.89-1.3-2.79-.71-4.05-1.52-8.06-2.29-12.09l-1.22-6.15c-.22-1.02-.72-3.47-1.54-4.43.14-.25.68-.75.85-1 .59-.79 1.24-1.6 2-2.34Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1220,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M311.86 76.1c-6 17.79 7.42-10.49 5.51-10.96-1.35-.74-4.7 8.55-5.51 10.96Z",
                  className: "MainSvg_svg__cls-99"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1224,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M324 24.41a3.689 3.689 0 0 1-3.79 3.56s-14.14.47-17.79-2.11c-.5-.35-.93-.79-1.13-1.37 0 0-1.61-3.1-2.01-4.16-.91-2.52-3.55-10.29-3.71-10.78v-.02c0-.02.61-.56.61-.58.24-.2.44-.32.63-.42.39-.23.7-.36.96-.93.08.11.18.24.28.38 1.38 1.92 4.68 6.65 6.08 9.78.28.61.98 2.48.98 2.48.3.53.32 1.31 1.48 1.41h.08l12.41-.94c.74-.06 1.49-.05 2.23.02.56.05 1.12.1 1.16.1 2.03.07 1.58 1.56 1.53 3.59Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1228,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M298.05 7.98s-.42.7-.95 1.24c-.51.51-1.1.88-1.52.33v-.02c-.84-1.17-3.51-2.6-3.13-3.87.38-1.28.25-5.09 3.09-2.49.5.45.88.86 1.17 1.21 1.12 1.38.97 2.21 1.35 3.59Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1232,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M295.01 3.98c-.65-.24-.76 3.32-.37 4.62.21.18.4.36.57.54.08-.15.01-.69.43-1.34.92-1.42.02-3.57-.64-3.81ZM305.58 24.85c.32.93-6.5-11.04-8.49-15.62-.11-.26-.21-.48-.29-.69-.21-.55-.29-.91-.22-1.02.54-.71.51-1.78.11-3.12 1.12 1.38.97 2.21 1.35 3.59 1.38 1.92 4.68 6.65 6.08 9.78.28.61.98 2.48.98 2.48.3.53.32 1.31 1.48 1.41h.08c-1.91.91-1.52 1.93-1.08 3.2Z",
                  className: "MainSvg_svg__cls-78"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1236,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M342.78 34.19c-.15 1.92-.57 3.84-1.1 5.75-.08.31-.17.6-.26.91-.51 1.7-1.08 3.38-1.59 5.03-1 3.15-1.82 6.16-1.61 8.91v.03c0 .13.02.25.03.37.17 1.49.64 2.88 1.56 4.19 1.06 1.51-.6 3.14-2.68 4.34-.15.09-.3.17-.45.24-2.38 1.23-5.53 1.68-8.47 1.35v.06c-.08-.02-.17-.06-.26-.09-1.77-.23-3.45-.73-4.83-1.53-2.05-1.19-2.99-2.76-2.85-4.32-.05.31-.05-1.8.7-4.36.11-.35.2-.7.28-1.03.02-.08.04-.15.05-.22 1.11-4.86-.36-7.31-2.03-10.87-.08-.17-.16-.33-.24-.51-.25-.54-.49-1.11-.74-1.72-.15-.34-1.06-1.17-1.66-2.07-.22-.32-.37-.68-.48-.97-.03-.08-.06-.15-.08-.22-.11-.3-.18-.52-.2-.59-.61-1.58 2.83-3.19 3.52-8.88.03-.26.07-.56.11-.91v-.06c.22-1.57.59-3.81 1.09-4.55.48-.71 1.11-1.1 1.84-1.24.3-.07.6-.09.92-.07.26 0 .51.04.78.1.06 0 .11.02.17.04 0 0 .02 0 .03.01.14.03.28.06.43.09.3.08.62.16.97.25.61.16 1.29.35 2.03.6 2.07.67 4.57 1.69 7.13 3.2 1.01.6 2.03 1.28 3.03 2.05 1.38 1.05 2.73 2.27 3.96 3.69.73.82.95 1.92.87 3.01Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1240,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M321.74 21.68c-6.2 6.01-14.27 5.43-18.1 4.8 4.85 1.88 16.58 1.48 16.58 1.48.38.01.74-.05 1.09-.15.72-1.67 2.66-8.3.43-6.14Z",
                  className: "MainSvg_svg__cls-78"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1244,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M336.57 57.45c-3.81-.12-8.69 3.74-8.81 7.56-.15 4.71-.02 9.43.24 14.16 0 0 1.07 17.94 1.11 18.58.04.63 4.27 25.38 3.66 26.35-.02.03-.02.06-.03.08-.27.34-1.44 1.67-4.53 4.23-1.64 1.36-2.61 2.91-1.78 3.57 1 .79 3.96.74 5.72-1.11.68-.72 1.37-1.59 1.73-2.03.94-1 1.91-1.17 2.36-1.73.5-.56.57-1.45.12-3 .01-.06.03-.11.04-.17.33-2.56.73-5.09.94-7.64.21-2.55.38-5.1.52-7.65.15-2.55.25-5.1.34-7.65.02-.64.06-1.27.06-1.91 0-.64-.09-1.27-.22-1.9-.25-1.18-.55-2.36-.55-3.55.23-2.33.89-4.65 1.5-6.96.3-1.17.56-2.34.74-3.51l.49-3.52c.63-4.69 1.64-6.72 1.86-11.43v-.11c.13-3.82-1.69-10.54-5.51-10.67Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1248,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M333.87 128.84c.94-1 1.91-1.17 2.36-1.73.5-.56.57-1.45.12-3 .01-.06.03-.11.04-.17.33-2.56.73-5.09.94-7.64.08-.98.15-1.96.22-2.94l-5.49 3.35c.3 2.14.55 4.04.67 5.37.32.38.82.7 1.6.7 1.95 0 .56 3.7-.63 4.81-1.19 1.12-3.14 5.23-6.2 4.74-.13-.02-.24-.02-.34-.01 1.31.37 3.54.07 4.98-1.44.68-.72 1.37-1.59 1.73-2.03Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1252,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M346.88 114.41c-5.56.54-5.44.41-5.16 3.21.28 2.78-9.96 4.58-12.79-1.75-2.83-6.34-5.12-.85-6.18-3.27-9.9-22.59 1.74-53.64-5.79-48.62 0 0-1.17 0-.89-1.1.15-.59 1.06-.67 1.11-.92.08-.38-.26-.86-.05-1.4.08-.21.68-.3.78-.53.13-.29-.24-.72-.08-1.06.68-1.38 1.72-3.14 3.25-5.37 0 0-1.53-.28-.97-3.76.4-2.52-.43-4.96-1.5-7.04-.41-.81-.86-1.55-1.29-2.23-.44-.71-.89-1.34-1.23-1.96-.08-.15-.15-.3-.22-.45-.07-.16-.13-.31-.18-.47-.38-1.23-.14-2.57 1.55-4.57 1.34-1.58 1.77-3.85 2.26-6.04v-.06c.53-2.33 1.12-4.57 2.93-5.78.3-.22.63-.38 1-.53 0 0 .95-.41 1.24.23.03.05.05.11.07.18 0 .04 0 .09.02.15v.14c-.04 1.53-1.84 6.76 1.25 12.21.42.75 1.11 1.53 1.97 2.3.32.31.69.6 1.07.9.04.02.08.05.11.08.85.65 1.79 1.26 2.79 1.8 3.01 1.65 6.46 2.73 8.91 2.24 0 0-.59 2.45-1.06 4.94-.39 2.04-.7 4.1-.54 4.89.32 1.66-.3 3.44-1.07 4.02a.47.47 0 0 1-.12.09v.02l.15.3c.89 1.82 5.25 11.37 5.52 23.86.28 13.19 10.22 34.67 3.11 35.37Z",
                  style: {
                    fill: "#e7be64"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1256,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M348 114.06c-1.29-12.34-8.9-32.9-9.6-43.19-.2-2.77-.83-5.06-1.7-6.92-1.79-3.81-4.59-5.8-6.69-6.5-2.41 0-4.82-.55-6.67-1.61-.92-.54-1.61-1.15-2.08-1.8-.09-.11-.16-.23-.23-.34-.02-.03-.04-.07-.06-.1l.09.06c.08.06.16.11.25.17.14.1.27.22.43.29 8.56 3.4 12.83-1.72 12.91-1.84 1.92-2.82-.69-6.62-4.05-6.06-.59.1-1.24.18-1.92.14-3.37-.24-5.44-2.87-9.63-3.91l-.23-.06a6.21 6.21 0 0 0-.5-.11c-.32-.6-.66-1.17-.99-1.69-.44-.71-.89-1.34-1.23-1.96-.08-.15-.15-.3-.22-.45-.07-.16-.13-.31-.18-.47-.08-.28-.14-.55-.15-.84 0 .02.02.04.04.06.15.19.3.37.49.54.52.5 1.2.94 2.07 1.3 5.09 2.09 7.37 5.74 14.87 4.66.4-.06.77-.22 1.08-.44 1.1-.8.8-2.53-.43-3.1-.41-.19-.82-.37-1.14-.49-7.07-2.68-7.61-4.58-8.97-9.63-.92-3.45-.32-6.96.45-8.57.09-.19.28-.53.28-.53.22-.06.56-.12.81.05-.03.19-.07.39-.11.63-.3 1.86-1.41 4.86-.31 8.42.29.91.6 2.01 1.14 2.96.44.77 1.15 1.58 2.04 2.38.33.31.72.62 1.11.92.04.02.08.05.11.08.84.62 1.77 1.24 2.73 1.78 1.27.71 3.09.35 3.83-.9.72-1.22 2.08-1.84 3.91-2.06l1.01-.07s.53 2.34 1.12 5.09v.04c-.57 2-1.25 3.97-1.85 5.89-.39 2.04-.7 4.1-.54 4.89.32 1.66-.3 3.44-1.07 4.02v.03c0 .13.02.25.03.37.89 1.82 5.25 11.37 5.52 23.86.07 3.15.69 6.78 1.5 10.48v.06c.85 4.22 2.02 8.57 2.98 12.51 1.32 5.93 1.91 10.65-.27 11.96ZM321.23 90.43c-1.6-17.85.52-25.99-2.15-27.09 3.37 2.77-3.73 29.45 5.08 49.54.04.09.07.15.11.22.64-.24 1.39-.61 2.24-.29h.03c.1.05.2.11.31.17-.8-3.21-4.44-9.39-5.62-22.55Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1262,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M342.51 115c-3.11-4.98-5.26-11-6.4-15.63-1.33-5.44-1.98-11-2.51-16.56-.12-1.28-.24-2.61-.41-3.94.2 2.55.15 5.12.03 7.66-.39 8.51.06 16.57.99 24.94.57 2.18.78 5.84 1.44 8.65 3.21.24 6.21-.98 6.06-2.5-.17-1.63-.27-2.27.78-2.62Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1266,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M316.88 32.5a.41.41 0 0 1 .04-.09s-.01.03-.04.09Z",
                  style: {
                    fill: "#445a91",
                    opacity: 0.11,
                    mixBlendMode: "multiply"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1270,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M340.48 53.55c-.26-.03-.43-.06-.43-.06s.17.02.43.06Z",
                  style: {
                    mixBlendMode: "multiply",
                    opacity: 0.15,
                    fill: "#80aeff"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1278,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M335.08 27.33c-.21.33-.54.66-1.01.92-1.69.98-4.44.98-6.12.02-.99-.57-1.39-1.36-1.2-2.11.12-.45.44-.89.96-1.25 0-.77.04-1.71.08-2.68.04-.94.09-1.91.17-2.73.11-1.24.27-2.16.48-2.29.78-.45 1.84-.65 2.85-.57.75.04 1.48.24 2.05.56.46.27.91 5.3 1.14 7.8.18.14.32.29.44.43.49.59.54 1.27.16 1.89Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1286,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M337.95 27.49c-1 .28-1.94.12-2.87-.16-1.79-.55-3.6-1.55-5.95-.91-1.02.28-1.81.14-2.38-.26-1.31-.89-1.53-3.07-.98-4.53.04-.14.1-.27.16-.38l2.04-1.75 3.34-2.86c.75.04 1.48.24 2.05.56.46.27.91 5.3 1.14 7.8.18.14.32.29.44.43 1.01.6 2.03 1.28 3.03 2.05Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1290,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M336.25 14.38c-.52 7.2-8.56 8.69-10.02 8.4-2.03-.4-2.87-4.23-2.74-8.78.13-4.55 2.86-8.16 6.12-8.07 3.25.09 6.96 3.91 6.64 8.45Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1294,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M336.25 14.38c.12-1.63-.3-3.17-1.02-4.48-.06-.11-.12-.22-.19-.32-.1-.16-.19-.31-.3-.46-.16-.23-.33-.45-.51-.66-.08-.09-.16-.18-.25-.27-.2-.21-.4-.41-.61-.6l-.06-.06c-.58-.49-1.22-.88-1.92-1.16-1.29-.51-3.21-.2-4.78.61-1.13.87-2.04 2.23-2.58 3.89.01.04 0 .09.02.13.88-1.55 3.41-1.77 4.55-.75.81.72 1.86 1.67 2.81 2.23 1.9 1.14 2.85 2.55 2.05 4.93-.66 1.98-2.19 3.49-4.06 4.36-1.03.48-2.93 1.26-4.03.56.26.22.55.38.87.44 1.46.29 9.5-1.2 10.02-8.4Z",
                  className: "MainSvg_svg__cls-79"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1298,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M333.91 19.52h.03-.03Z",
                  style: {
                    fill: "#37425b"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1302,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M340.45 11.98c-1.32 2.78-4.13 8.06-6.07 7.5 0-.02-.14-.13-.14-.15.14-.65.48-1.19.71-1.82.18-.51.24-1.03.22-1.52.04-.8-.23-1.47-.66-2.11v.06c-.57-.92-.92-.73-2.47-2.29-.06-.06-.13-.13-.19-.2-1.16-1.2-4.09-3.05-6.15-2.37-.83.27-1.57.99-1.71 1.91-.4-.1-1.26-.83-1.52-2.97-.14-1.35.32-2.11 1.02-2.25.15-.2.31-.38.46-.54 3.05-3.18 5.99-4.29 8.6-3.97 1.05.13 2.04.49 2.96 1.03.09 0 1.28.25 2.54 1.08 1.21.8 2.49 2.14 2.96 4.33v.03c.01.08.04.17.04.25.23 1.36-.01 2.75-.6 3.99Z",
                  className: "MainSvg_svg__cls-14"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1308,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M323.96 5.22h-.02c-.15.17-.31.36-.46.55 1.82-.35 6.55-.14 9.31 3.14 0 0-2.62-4.15-8.84-3.7Z",
                  style: {
                    opacity: 0.1,
                    fill: "#854087",
                    mixBlendMode: "multiply"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1312,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  d: "M333.93 20.21ZM333.89 19.53Z",
                  className: "MainSvg_svg__cls-36"
                },
                void 0,
                !1,
                {
                  fileName: "app/assets/svgs/MainSvg.js",
                  lineNumber: 1320,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 1111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M341.01 7.73V7.7c-.47-2.19-1.75-3.53-2.96-4.33l-.15-.09c1.3.8-.31 6.12-2.88 7.72-.71.44-2.51.88-3.17.46.06.07.12.13.18.19 1.55 1.56 1.9 1.37 2.46 2.29v-.06c.44.64.71 1.32.67 2.11.03.49-.04 1.01-.22 1.52-.23.63-.57 1.17-.71 1.82 0 .02.14.13.14.15 1.95.56 4.75-4.72 6.07-7.5.59-1.24.83-2.64.6-3.99 0-.08-.03-.17-.04-.25Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1325,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M335.49 15.98c.62-.71.75-1.62.29-2.03-.46-.41-1.35-.16-1.97.56-.62.71.1.54-.29 2.03-.16.6 1.35.16 1.97-.56Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1329,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M319.13 21.39c-5.18-.14-12.54.76-12.01 1.05.53.29 7.25-.37 8.78-.05s-1.6.72-.43.94c1.17.22 5.69-1.89 3.65-1.94Z",
                className: "MainSvg_svg__cls-98"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1333,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M323.97 5.9c-1.54.38-1.29 1.71-1.08 2.1s1.01-1.94 3.35-1.37c2.34.57 5.28 1.97 4.13 1.01-1.15-.96-3.7-2.41-6.39-1.74Z",
                className: "MainSvg_svg__cls-97"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1337,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M332.76 1.37c-1.73-.09-4.13-.29-6.88 2.56s3.92-2.69 6.74-1.58-3.03 3.12-.77 2.51c1.23-.33 3.92-3.34.91-3.49ZM337.19 1.02c-.02.37-.57.63-1.23.58-.65-.04-1.16-.37-1.14-.74.02-.37.57-.63 1.23-.58.65.04 1.16.37 1.14.74Z",
                className: "MainSvg_svg__cls-93"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1341,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M326.69 10.09c-2.01.06-2.96 1.49-2.74 2.48.22.99.39-1.72 3.16-1.26 2.77.46 1.06-1.26-.41-1.21Z",
                className: "MainSvg_svg__cls-99"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1345,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M334.06 12.6c-2.46 1.42-6.45 1.41-8.93-.02-.68-.4-1.17-.86-1.48-1.35-.92 1.37-.32 3.29 1.48 4.33 2.47 1.43 6.47 1.43 8.93.02 1.78-1.03 2.25-3.02 1.45-4.3-.3.48-.78.94-1.45 1.32Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1349,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M335.52 11.28c-.3.48-.78.94-1.45 1.32-2.46 1.42-6.45 1.41-8.93-.02-.68-.4-1.17-.86-1.48-1.35-.04.06-.07.12-.1.18.02.08.03.15.05.23.02-.03.03-.07.05-.1.31.49.8.96 1.48 1.35 2.47 1.43 6.47 1.43 8.93.02.67-.39 1.15-.84 1.45-1.32.2.32.32.66.36.99.01-.44-.1-.89-.36-1.31Z",
                className: "MainSvg_svg__cls-97"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1353,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M334.06 15.48c-2.46 1.42-6.45 1.41-8.93-.02-1.24-.71-1.84-1.65-1.84-2.58-.12 1.02.49 2.06 1.84 2.84 2.47 1.43 6.47 1.43 8.93.02 1.22-.71 1.82-1.63 1.81-2.56-.1.84-.7 1.66-1.81 2.3Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1357,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M332.07 119.15s-.01-.04-.02-.05c-6.51-15.34-5.81-40.91-6.55-44.63-1.81-9.04-.63 27.71 3.13 40.76.1.2.2.4.3.63.69 1.55 1.82 2.6 3.14 3.29Z",
                style: {
                  fill: "#ffe6a6",
                  opacity: 0.19,
                  mixBlendMode: "overlay"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1361,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M285.73 4.76c.53-.18 1.56.73 1.81.96l4.44 3.86c1.73 1.5 3.54 2.54 5.26 3.04l4.44 1.27c.25.07 1.28.34 1.81 1.13 0 0-.57-.31-1.05-.42l-4.65-1.02c-2.07-.45-4.29-1.74-6.37-3.68l-4.65-4.35c-.48-.45-1.05-.79-1.05-.79Z",
                style: {
                  fill: "#fcd581"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1369,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M285.5 4.89c.53-.18 1.56.73 1.81.96l4.44 3.86c1.73 1.5 3.54 2.54 5.26 3.04l4.44 1.27c.25.07 1.28.34 1.81 1.13 0 0-.57-.31-1.05-.42l-4.65-1.02c-2.07-.45-4.29-1.74-6.37-3.68l-4.65-4.35c-.48-.45-1.05-.79-1.05-.79Z",
                style: {
                  fill: "#fed780"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1375,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M303.17 15.21c-.23-.34-.72-.81-1.75-1.09l-4.44-1.27c-1.74-.5-3.57-1.55-5.3-3.06l-4.44-3.86c-1.08-.95-1.53-.99-1.7-.94l-.07-.2c.4-.13 1.02.18 1.91.97l4.45 3.86c1.71 1.48 3.52 2.53 5.22 3.02l4.44 1.27c1.09.29 1.62.8 1.87 1.18l-.18.12Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1381,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m295.48 11.1-1.74.02v.45c0 .13.09.26.26.35.34.2.89.2 1.23 0 .17-.1.26-.23.25-.36v-.46Z",
                className: "MainSvg_svg__cls-47"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1385,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m294.31 11.23-.58-.06v.4c0 .13.09.26.26.35.1.05.21.09.32.12v-.81Z",
                className: "MainSvg_svg__cls-15"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1389,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M295.22 11.47c-.34.2-.89.19-1.23 0-.34-.2-.34-.52 0-.71.34-.2.89-.19 1.23 0 .34.2.34.52 0 .71Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1393,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.61 10.83c.19 0 .38.04.5.12.09.05.15.12.15.17s-.06.12-.15.17c-.13.08-.32.12-.51.12s-.38-.04-.5-.12c-.09-.05-.15-.12-.15-.17s.06-.12.15-.17c.13-.08.32-.12.51-.12Zm0-.22c-.22 0-.45.05-.62.15-.34.2-.34.52 0 .71.17.1.39.15.61.15s.45-.05.62-.15c.34-.2.34-.52 0-.71-.17-.1-.39-.15-.61-.15Z",
                className: "MainSvg_svg__cls-92"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1397,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M295.39 10.9c-.34-.04-.93-.1-1.4-.15-.1.06-.18.14-.22.21l1.7.18c0-.08-.02-.17-.08-.25ZM293.73 11.12s0 .05.01.07l1.62.17s.04-.04.05-.06c-.25-.03-1.1-.12-1.68-.18Z",
                className: "MainSvg_svg__cls-94"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1402,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 1401,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M295.09 1.2h-.96v9.86c0 .07.05.14.14.2.19.11.49.11.68 0 .1-.05.14-.13.14-.2V1.2Z",
                className: "MainSvg_svg__cls-47"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1407,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m294.44 1.22-.32-.04v9.88c0 .07.05.14.14.2.05.03.11.05.18.07V1.22Z",
                className: "MainSvg_svg__cls-15"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1411,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.94 1.39c-.19.11-.49.11-.68 0-.19-.11-.19-.28 0-.39s.49-.11.68 0c.19.11.19.28 0 .39Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1415,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7("g", { className: "MainSvg_svg__cls-102", children: /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.17 1.07c.19-.02.51-.05.77-.08.06.04.1.08.12.12l-.94.1s.01-.09.05-.14Z",
                className: "MainSvg_svg__cls-94"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1420,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/assets/svgs/MainSvg.js",
              lineNumber: 1419,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M299 35.92v.15c.11 1.64 1.96 2.94 4.22 2.94s4.15-1.33 4.22-2.99v-.11c0-.09 0-.18-.02-.27-.09-.54-.5-1.06-1.21-1.47-1.65-.95-4.32-.95-5.98.01-.77.45-1.18 1.02-1.24 1.6v.14Z",
                className: "MainSvg_svg__cls-49"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1425,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M299 36.07c.06.58.47 1.14 1.22 1.57 1.65.95 4.32.95 5.98 0 .77-.45 1.19-1.02 1.24-1.6v-.11c0-.09 0-.18-.02-.27-.09-.54-.5-1.06-1.21-1.47-1.65-.95-4.32-.95-5.98.01-.77.45-1.18 1.02-1.24 1.6-.01.1-.01.19 0 .29Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1429,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M301.35 37.87c1.04.6 2.73.6 3.78 0s1.05-1.58.01-2.18-2.73-.6-3.78 0-1.05 1.58-.01 2.18Z",
                className: "MainSvg_svg__cls-90"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1433,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M301.35 37.87c1.04.6 2.73.6 3.78 0s1.05-1.58.01-2.18c-1.04-.6-2.73-.6-3.78 0-.09.05-.16.1-.24.16.21-.29.51-.56.92-.79 1.27-.73 3.15-.91 4.69-.52.39.34.62.72.69 1.11.01.09.02.18.02.27v.11c-.05.58-.47 1.16-1.24 1.6-1.27.74-3.15.91-4.7.51-.16-.14-.3-.29-.41-.44.08.06.16.12.25.17Z",
                className: "MainSvg_svg__cls-50"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1437,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M306.62 37.35c-.06 0-.11-.04-.12-.1l-3.26-21.45-3.56 21.31c-.01.07-.06.11-.14.1-.07-.01-.11-.07-.1-.14l3.68-22.08c.01-.06.06-.1.12-.1s.11.04.12.1l3.37 22.21c.01.07-.04.13-.1.14h-.02Z",
                className: "MainSvg_svg__cls-13"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1441,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M303.25 33.57c-.07 0-.12-.06-.12-.12V15.02c0-.07.05-.12.12-.12s.12.06.12.12v18.43c0 .07-.05.12-.12.12Z",
                className: "MainSvg_svg__cls-13"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1445,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M303.65 14.92c0 .23-.18.41-.41.41s-.41-.18-.41-.41.18-.41.41-.41.41.18.41.41Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1449,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M303.6 14.73c-.02.21-.2.37-.41.37-.16 0-.29-.09-.36-.22v.04c0 .23.18.41.41.41a.406.406 0 0 0 .36-.6ZM281.35 25.79v.15c.11 1.64 1.96 2.94 4.22 2.94s4.15-1.33 4.22-2.99v-.11c0-.09 0-.18-.02-.27-.09-.54-.5-1.06-1.21-1.47-1.65-.95-4.32-.95-5.98.01-.77.45-1.18 1.02-1.24 1.6v.14Z",
                className: "MainSvg_svg__cls-49"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1453,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M281.35 25.95c.06.58.47 1.14 1.22 1.57 1.65.95 4.32.95 5.98 0 .77-.45 1.19-1.02 1.24-1.6v-.11c0-.09 0-.18-.02-.27-.09-.54-.5-1.06-1.21-1.47-1.65-.95-4.32-.95-5.98.01-.77.45-1.18 1.02-1.24 1.6-.01.1-.01.19 0 .29Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1457,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M283.7 27.75c1.04.6 2.73.6 3.78 0s1.05-1.58.01-2.18c-1.04-.6-2.73-.6-3.78 0-1.05.6-1.05 1.58-.01 2.18Z",
                className: "MainSvg_svg__cls-90"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1461,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M283.7 27.75c1.04.6 2.73.6 3.78 0s1.05-1.58.01-2.18c-1.04-.6-2.73-.6-3.78 0-.09.05-.16.1-.24.16.21-.29.51-.56.92-.79 1.27-.73 3.15-.91 4.69-.52.39.34.62.72.69 1.11.01.09.02.18.02.27v.11c-.05.58-.47 1.16-1.24 1.6-1.27.73-3.15.91-4.7.51-.16-.14-.3-.29-.41-.44.08.06.16.12.25.17Z",
                className: "MainSvg_svg__cls-50"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1465,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M288.97 27.23c-.06 0-.11-.04-.12-.1l-3.26-21.45-3.56 21.31c-.01.07-.07.11-.14.1-.07-.01-.11-.07-.1-.14l3.68-22.08c.01-.06.06-.1.12-.1s.11.04.12.1l3.37 22.21c.01.07-.04.13-.1.14h-.02Z",
                className: "MainSvg_svg__cls-13"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1469,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M285.6 23.45c-.07 0-.12-.06-.12-.12V4.89c0-.07.05-.12.12-.12s.12.06.12.12v18.43c0 .07-.05.12-.12.12Z",
                className: "MainSvg_svg__cls-13"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1473,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M286.09 4.75c0 .23-.18.41-.41.41s-.41-.18-.41-.41.18-.41.41-.41.41.18.41.41Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1477,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M285.65 4.88c-.13.06-.23.04-.32.08.07.12.2.2.35.2.23 0 .41-.18.41-.41 0-.17-.1-.32-.25-.38.14.24-.04.44-.19.51ZM294.95 1.22s-.04.07-.09.09c-.07.04-.16.06-.25.06s-.19-.02-.26-.06c-.07-.04-.1-.09-.11-.14.01-.18.03-.36.04-.54.02-.17.17-.3.34-.28.15.01.27.14.28.28V.7l.03.39c0 .04 0 .09.01.13Z",
                className: "MainSvg_svg__cls-49"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1481,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.91.7c-.14.02-.26.13-.27.28l-.03.39c-.09 0-.19-.02-.26-.06-.07-.04-.1-.09-.11-.14.01-.18.03-.36.04-.54.02-.17.17-.3.34-.28.15.01.27.14.28.28V.7Z",
                style: {
                  opacity: 0.42,
                  fill: "#f2cc70"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1485,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.58.42s-.02.07-.07.09c-.05.02-.1.02-.12 0-.01-.03.02-.07.07-.09.05-.02.1-.02.12 0Z",
                className: "MainSvg_svg__cls-11"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1492,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M296.7 4.5c-.18-.25-.35-.45-.54-.65-.19-.2-.38-.38-.59-.55-.41-.32-.9-.6-1.44-.56-.13.01-.23.16-.22.33 0 .15.08.26.19.29h.02c.36.08.7.39.99.75.15.18.28.39.41.6.12.21.25.44.35.65.15.33.47.43.72.23.25-.2.34-.63.19-.96a.746.746 0 0 0-.07-.12Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1496,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M294.11 3.35c0 .66-.37.88.73 1.26 1.11.37-.14 3.58-.5 3.5-.36-.07-1.82-1.01-1.55-2.74s1.32-2.02 1.32-2.02Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1500,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M324.85 25.24c.24-.78 1.57 1.67 1.39 2.51-.17.84-.31.07-1.01-.91s-.66-.7-.38-1.6ZM318.59 59.3c-2 2.67-1.21 2.6-.23 2.74.98.14.99.15 1.68 1.02 1.99 2.49-.68-4.79-1.45-3.77Z",
                className: "MainSvg_svg__cls-99"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1504,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M330.3 132.78c-.53-2.71-.62-5.34-.58-7.94.05-2.6.3-5.16.67-7.7.72-5.08 1.8-10.09 3.07-15.07l1.85-7.48 1.72-7.5c1.15-5 2.26-10.01 3.47-14.99l2.85.55c-.73 5.08-1.56 10.14-2.35 15.21l-1.19 7.6-1.06 7.63c-.67 5.09-1.53 10.15-2.75 15.13-.6 2.5-1.31 4.97-2.23 7.4-.92 2.43-1.98 4.84-3.48 7.16Z",
                style: {
                  fill: "#f9da78"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1508,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M345.61 75.05c-.17 0-.34-.04-.49-.13l-7.43-4.29a.98.98 0 1 1 .98-1.7l7.43 4.29a.98.98 0 0 1-.49 1.83Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1514,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M346.45 73.56c-.02.12-.05.24-.12.35-.18.32-.51.49-.85.49-.17 0-.34-.04-.49-.13l-7.43-4.29a.949.949 0 0 1-.34-.35c-.06.39.12.79.48 1l7.43 4.29a.986.986 0 0 0 1.34-.36c.19-.32.16-.7-.02-.99Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1518,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M345.72 73.8s-.08-.01-.12-.03l-7.43-4.29a.247.247 0 0 1-.09-.34c.07-.12.22-.16.34-.09l7.43 4.29a.247.247 0 0 1-.12.46Z",
                className: "MainSvg_svg__cls-100"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1522,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M342.16 71.98c-.07 0-.15 0-.22-.02a.986.986 0 0 1-.74-1.18l1.35-5.93c.12-.53.65-.87 1.18-.74.53.12.86.65.74 1.18l-1.35 5.93c-.1.46-.51.77-.96.77Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1526,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M341.64 71.27h-.05a.248.248 0 0 1-.19-.29l1.35-5.93c.03-.13.17-.21.3-.19.13.03.22.16.19.29l-1.35 5.93c-.03.11-.13.19-.24.19Z",
                className: "MainSvg_svg__cls-100"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1530,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M343.62 64.42a.964.964 0 0 0-1.11.59l-.98 4.33c.09 0 .18-.01.27 0 .53.12.86.65.74 1.18l-.33 1.44c.37-.02.69-.24.84-.58l1.32-5.79a.986.986 0 0 0-.74-1.18Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1534,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m343.31 73.95-2.35 14.97c-.81 4.98-1.52 9.98-2.2 14.99-.68 5.01-1.56 9.99-2.78 14.9-1.23 4.89-2.88 9.76-5.68 13.99 1.31-2.16 2.38-4.46 3.25-6.82.91-2.35 1.63-4.77 2.23-7.22 1.21-4.9 2.09-9.87 2.76-14.87.67-5.01 1.38-10.01 2.19-14.99l2.33-14.97c0-.07.07-.11.14-.11s.11.07.11.14Z",
                className: "MainSvg_svg__cls-52"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1538,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M342.35 56.2c-.2 3.11-.36 11.59-.36 11.59-.02.04-.06.1-.1.16.37-.06.76-.1 1.17-.1.51 0 .98.05 1.41.14v-.02l4.08-15.28c.42-5.44-5.43-18.56-5.57-19.3-.19-.94-.66-1.65-1.06-2.02-.82-.77-2.02-.49-2.36-.36-1.72.72-3.31 2.79-3.54 4.62 0 0-.75 1.69-.42 1.48 1.76-1.12 7.84 13.91 7.39 14.55 0 0-.54 3.12-.63 4.53Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1542,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M326.93 28.24c.99-1.22 3.43-2.05 6.92-.39 3.49 1.66 4.97 1.74 5.93 2.27.96.52 1.08 1.16-.19 1.47-1.67.4-3.56-.16-5.13-1.56-1.57-1.39-3.4-2.32-4.62-2.44-1.63-.16-3.69 1.61-2.91.65Z",
                className: "MainSvg_svg__cls-99"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1546,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M342.28 65.5c-.7.93-1.72 2.85-1.44 3.82.28.98.46.93.46.93s-.07-1.26.91-1.12c.98.14 1.09 1.58.86 2.09-.23.51.7 1.16 1.12.7.42-.46 1.44-1.21 1.53-2.09.09-.88-.58-4.44-.58-4.44l-2.86.1Z",
                className: "MainSvg_svg__cls-14"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1550,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M338.38 34.02c-.59 1.21 6.41 14.64 6.21 17.22-.21 2.58-1.88 14.43-1.53 14.92.35.49 2.72-12.34 2.72-15.06s-6.2-19.52-7.39-17.08Z",
                className: "MainSvg_svg__cls-98"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1554,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M322.48 21.87c1.18-3.38-5.58 8.46 1.77 13.94 0 0-4.37-6.51-1.77-13.94Z",
                style: {
                  opacity: 0.11,
                  fill: "#854087",
                  mixBlendMode: "multiply"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1558,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M321.44 48.65c-.6-1.92-.54 4.19 3.81 4.76 0 0-2.74-1.33-3.81-4.76Z",
                style: {
                  opacity: 0.04,
                  fill: "#854087",
                  mixBlendMode: "multiply"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1566,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M340.7 78.72c-.68 4.3-1.4 8.6-2.16 12.89-.78 4.28-1.5 8.58-2.32 12.85l-2.44 12.83c-.81 4.28-1.7 8.54-3.12 12.7.26-4.39 1.04-8.67 1.9-12.94l2.58-12.8c.85-4.27 1.8-8.52 2.7-12.78.91-4.26 1.87-8.51 2.86-12.75ZM331.37 59.27c-.37-.29-.64-.43-.91-.53-1.19-.77-6.89-.83-9.05-3.37-.99-1.16-.28 1.81 1.21 4.04.97 1.46 2.28 2.59 3.67 2.05 2.05-.53 3.16.02 2.6.93-.05.08-.05.11-.04.13-1.08 2.01-.04 8.68-.06 7.96-.07-2.65 2.86-9.31 2.86-9.31.77-1.29-.05-1.72-.29-1.91ZM319.69 31.03c-1.45 1.55-3.49 3.42-2.93 5.23.56 1.81 3.35 1.81 4.18 2.23.84.42.49-.28-.42-1.95-.91-1.67.21-6.62-.84-5.51ZM324.57 39.67c-1.29 1.62 5.72 4.18 7.88 1.81 1.02-1.12-3.83.28-4.95-3.76-.45-1.63-2.37 1.25-2.93 1.95Z",
                className: "MainSvg_svg__cls-99"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1574,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M343.97 72.06c.08-.02.16-.06.22-.13.42-.46 1.44-1.21 1.53-2.09.08-.77-.43-3.6-.55-4.29-.29.99-.61 1.71-1 1.87-1.09.42.31 3.82-.19 4.64Z",
                className: "MainSvg_svg__cls-79"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1578,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M236.94 302.65c-3.72 2.15-9.77 2.14-13.52-.02-3.74-2.16-3.76-5.66-.04-7.8 3.72-2.15 9.77-2.14 13.52.02 3.74 2.16 3.76 5.66.04 7.8Z",
                className: "MainSvg_svg__cls-62"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1582,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M227.88 260.78c2.05-.22 4.11-.13 6.17-.1-.77 5.24-2.5 11.25-2.77 13.71-.13.89 1.09 2.87.89 5.71-.1 1.39-1.57 12.84-1.58 12.88-.01.17.37 1.16.29 1.18-.41.63-4.27 3.15-2.68.59.14-.22.72-1.15.7-1.32 0-.04-1.17-7.96-1.87-16.76-.06-.8-.38-4.62-.5-5.71-.01-.12-.24-6.94-.42-10.03.64-.02 1.09-.09 1.76-.17Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1586,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M227.68 257.64c0-2 4.48-2.51 6.3-3 .53-.14 1.09-.19 1.67-.13 2.57.25 4.48 4.16 4.21 6.92-.54 5.62-2.71 12.96-3.02 15.74-.13.89.52 3.01.33 5.84-.1 1.39-2.96 11.62-2.97 11.66-.01.17.12 1.43.04 1.45-1.56 2.92-2.58 1.69-2.62 1.66-.23-.13.93-2.5.91-2.67 0-.04.59-6.91-.11-15.7-.06-.8-.21-4.58-.33-5.67l-.71-11.52c.01.11-3.71-2.25-3.71-4.59ZM224.9 257.03l.62-8.33c0-.08.02-.17.04-.25.2-.8 1-1.28 1.8-1.08.8.2 1.28 1 1.08 1.8l-2.09 8.4-.03.06c.08.12.14.25.18.41.05.19.06.36.03.52.02.16.03.3.04.45 0 .19 0 .38-.02.57-.04.38-.13.78-.4 1.1-.06.08.19 1.13 0 1.41-.54.69-1.61-.83-1.75-1.1-.71-1.4-.13-2.64.49-3.95Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1590,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M225.72 257.13c-.25-.02-.53-.09-.7-.29-.05-.07-.09-.14-.12-.21l.5-7.45c0-.08.14-.64.16-.72.2-.8 1-1.28 1.8-1.08.8.2 1.28 1 1.08 1.8l-1.85 7.69c-.19.32-.42.3-.87.27Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1594,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M225.07 250.5c.04.42.67.94 1.36 1.07.71.13 1.36-.08 1.52-.49l.03-.14.46-1.39v-.18l1.72-13.84c.14-1.14 0-2.59-1.14-2.74-1.14-.14-2.32.74-2.64 2.04-.36 1.46-1.1 13.13-1.1 13.13l-.19 2.29-.04.25ZM226.36 275.36c-1.78-19.54 1.38-19.94 1.38-19.94s6.83-3.22 10.84.63c4.01 3.86-.76 19.53-.76 19.53-.09.77-.65 1.53-1.67 2.12-2.25 1.3-5.89 1.31-8.12.01-1.12-.65-1.68-1.5-1.67-2.35Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1598,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M238.58 256.04c4.01 3.86-.76 19.53-.76 19.53-.09.77-.65 1.53-1.67 2.12-1.6.93-3.91 1.19-5.91.8 5.68.95 9.31-19.33 4.9-19.55-4.42-.22-6.22-3.21-6.22-3.21l.44-.93c2.27-.7 6.43-1.46 9.23 1.23Z",
                className: "MainSvg_svg__cls-59"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1602,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M225.3 244c.07.19.21.49.37.76.09.15.18.3.26.42.32.45.64.71.79 1.09 1.51 3.79 1.3 4.74.96 8.07 0 0 .05.95.06 1.07s.02.05.03.06c0 .01.01.03.02.05.27.41.97.51 2.11 1.17.59.34 1.23.61 1.88.82 2.12.69 4.44.69 5.78-.08.63-.36.95-.84 1.01-1.38s-.46-3.59-.46-3.59c-.17-3.02 2.16-9.58 2.56-12.01.1-.63-.08-1.29-.51-1.77-3.58-4.05-8.52-5.43-10.46-5.84-.85-.18-1.73.15-2.21.87-1.74 2.55-2.65 9.11-2.2 10.3Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1606,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M229.73 236.58c.15.4.51.78 1.05 1.11 1.05.61 2.55.8 3.9.57.61-.11 1.18-.3 1.67-.59.39-.22.67-.48.87-.75.08-.12.14-.25.19-.38.11-.28.12-.56.03-.85.01-.01.01-.02 0-.03-.13-.43-.5-.85-1.08-1.19-1.52-.88-4.02-.88-5.56.01-.63.36-1.01.82-1.12 1.28-.08.27-.06.54.04.82ZM225.3 244s2.2 6.97 1.2 11.74l4.44-1.35-4.89-12.91-.74 2.52Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1610,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M225.67 245.09c.63 2.53 1.84 5.88.83 10.65l4.44-1.35-5.1-10.56s-.24.95-.16 1.26Z",
                className: "MainSvg_svg__cls-59"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1614,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m231.81 234.84.84-.64 2.09 2.8s-3.17 4.87-3.26 14.52c1.77-.27 3.73-.02 5.11.78 2.06 1.19 2.05 3.12-.02 4.32-1.3.75-3.1 1.03-4.77.85v.03s-.09-.04-.13-.05c-.95-.12-1.85-.39-2.58-.81-1.1-.63-1.6-1.48-1.53-2.31v-.02c.33-3.33.69-4.26-.82-8.05-.15-.38-.47-.64-.79-1.09-.09-.12-.18-.26-.26-.42.88-6.32 5.8-9.64 6.14-9.92Z",
                className: "MainSvg_svg__cls-23"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1618,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "g",
              {
                style: {
                  opacity: 0.28,
                  mixBlendMode: "multiply"
                },
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    d: "M229.92 239.92c-.87 1.14-1.55 2.44-1.91 3.85-.17.71-.25 1.45-.15 2.19.05.37.14.73.28 1.08l.22.49c.06.16.12.32.16.49.37 1.35.5 2.79.67 4.2.15 1.42.27 2.84.39 4.27.02-1.43-.02-2.86-.12-4.3-.1-1.43-.24-2.86-.59-4.28-.05-.18-.1-.35-.17-.53-.07-.18-.15-.34-.22-.49-.13-.32-.22-.65-.27-.99-.1-.68-.04-1.39.09-2.07.14-.69.36-1.36.64-2.02.27-.66.6-1.29.97-1.9Z",
                    style: {
                      fill: "#3e6593"
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/assets/svgs/MainSvg.js",
                    lineNumber: 1628,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1622,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M231.3 251.95c.03-2.28.21-4.61.71-5.95.78-2.07 3.95 2.62 5.41 6.67.04.02.07.04.11.06 2.26 1.31 2.31 3.42.13 4.77-.05.04-.11.07-.16.1-.83.48-1.84.79-2.9.92l-.2.03c-1.71.22-2.91-.09-2.91-.09s-.25-3.21-.19-6.52Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1635,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M225.3 244c-.06-.17-.1-.45-.11-.81 0-.12 0-.25.01-.38.19 3.88 7.54 7.07 10.68-.14 1.3-2.97 2.59-3.29 3.94-3.24.51.04.67.11.85.32.04.23.04.46 0 .7-.39 2.43-2.72 8.99-2.56 12.01l.46 3.6c-.06.53-.25 1.4-.88 1.76-1.25.72-4.08 1.36-6.07.82 4.43.15 3.26-7.05-2.24-10.16-.99-.56-1.8-1.12-2.47-1.66-.07-.17-.13-.35-.21-.53-.15-.38-.47-.64-.79-1.09-.25-.34-.52-.88-.63-1.17Z",
                className: "MainSvg_svg__cls-59"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1639,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M236.06 262.72c-.14.16-.24.3-.35.46-.1.16-.2.32-.28.49-.16.34-.29.74-.23 1.15.01.1.11.17.21.15.09-.01.15-.08.15-.17v-.02c.02-.29.18-.57.37-.82a3.728 3.728 0 0 1 .68-.67c.18-.13.22-.39.09-.57a.412.412 0 0 0-.57-.09c-.02.02-.05.04-.07.06Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1643,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m232.22 272.71 7.9-3.61-.72-.58-7.9 3.61.72.58z",
                className: "MainSvg_svg__cls-33"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1647,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m231.5 272.13 7.9-3.61.57-6.07-7.9 3.61-.57 6.07z",
                className: "MainSvg_svg__cls-33"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1651,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m231.75 272.04.5.41 8.3-9.29-.6-.43-7.65 3.5-.55 5.81z",
                className: "MainSvg_svg__cls-8"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1655,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m232.22 272.71 7.9-3.61.21-6.36-7.9 3.61-.21 6.36z",
                className: "MainSvg_svg__cls-33"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1659,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M234.48 266.04v-.02l.93-.62.29-.52v-.02c.04-.17-.03-.36-.06-.53-.11-.55.26-1.23.42-1.55.17-.33.51-.61.58-.76l2.12-9.57.06-.21a1.49 1.49 0 0 1 1.92-.85c.76.29 1.14 1.15.85 1.92l-3.47 9c-.01.16-.04.7-.04.75-.03.5-.15.99-.29 1.43l-.02.03s0 .04-.02.05c0 0-.57 1.14-.73 1.29-.08.08-.32.19-.56.3h-.03c-.19.1-.39.18-.51.23-.17.07-.33.14-.49.19l-.05.02s-.08.02-.12 0c-.14.02-.28 0-.42-.04h-.02s-.02-.01-.03-.01c-.28-.11-.37-.23-.39-.32v-.05c0-.05.02-.11.06-.14Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1663,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M238.2 262.16c-.31.24-.77.31-1.13.14-.27-.13-.32-.38-.34-.64l1.6-8.26c.02-.07.48-1.08.5-1.15a1.49 1.49 0 0 1 1.92-.85c.76.29 1.06 1.64.76 2.4l-3.32 8.36Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1667,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "m237.29 242.4 1.4 9.28c0 .08 0 .16-.01.23l-.93 3.67-.05.21c.07.29.63.65 1.34.86.74.21 1.4.2 1.61-.02l.06-.18 1.32-3.7c.1-.24.13-.49.11-.72l-.02-.16-.89-11.39c-.1-.8-.57-1.33-.88-1.59-.3-.25-.48-.18-.87-.24-.17.03-.35.1-.54.21-.95.55-1.72 1.88-1.72 2.97l.08.57Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1671,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M230.48 236.64c.12.32.4.62.83.88.83.48 2.02.63 3.09.46.48-.09.94-.24 1.32-.46.31-.18.53-.38.69-.6.06-.1.11-.2.15-.3.09-.22.1-.45.03-.67v-.03c-.11-.34-.39-.67-.86-.95-1.21-.7-3.19-.7-4.41 0-.5.29-.8.65-.89 1.02-.06.21-.04.43.03.65Z",
                className: "MainSvg_svg__cls-59"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1675,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M230.68 236.44c.12.32.4.62.83.88.83.48 2.02.63 3.09.46.48-.09.94-.24 1.32-.46.31-.18.53-.38.69-.6.06-.1.11-.2.15-.3.09-.22.1-.45.03-.67v-.03c-.11-.34-.39-.67-.86-.95-1.21-.7-3.19-.7-4.41 0-.5.29-.8.65-.89 1.02-.06.21-.04.43.04.65Z",
                className: "MainSvg_svg__cls-23"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1679,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M239.33 251.84c-.15-.02-.25-.03-.25-.03s.1.01.25.03Z",
                style: {
                  fill: "#7baeff",
                  mixBlendMode: "multiply",
                  opacity: 0.15
                }
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1683,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M231.79 235.95s0 .08.01.11v.03c0 .03.02.05.03.08.08.21.26.41.54.58.54.32 1.33.41 2.03.3.32-.06.62-.16.87-.31.2-.11.35-.25.45-.39a.75.75 0 0 0 .1-.2.69.69 0 0 0 .04-.25v-.13c-.06-.53-.4-5.16-.74-5.36-.8-.46-2.09-.46-2.89 0-.37.21-.44 4.58-.44 5.4v.11Z",
                className: "MainSvg_svg__cls-53"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1691,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M237.14 228.34c.12 4.34-4.59 5.7-5.48 5.62-1.24-.12-1.97-2.36-2.16-5.08-.2-2.72 1.22-5.05 3.18-5.19 1.95-.14 4.39 1.92 4.47 4.65Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1695,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M232.77 225.8s2.3.56 2.55 3.17.02 4.39-2.32 5.91c0 0 5.08.12 6.71-3.99s-1.71-9.51-6.5-7.56c0 0-2.17-.83-3.33-.07-1.38.9-3.19 3.48.16 8.7 0 0-1.95-7.18 2.73-6.15Z",
                className: "MainSvg_svg__cls-65"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1699,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M235.81 230.18c.37-.43.45-.97.17-1.22s-.81-.09-1.18.33c-.37.43.06.32-.17 1.22-.09.36.81.09 1.18-.33Z",
                className: "MainSvg_svg__cls-17"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1703,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M235.47 232.2ZM235.44 231.8Z",
                className: "MainSvg_svg__cls-69"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1707,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "path",
              {
                d: "M226.2 297.01c.97-.93 1.61-1.71 2.01-2.26-.25.44-.44.89-.2.95.8.19 2.55-1.72 2.55-1.72.23-.26.21-.35.21-.35.34 1.05.22 1.56-.1 1.92-.24.39-.61 1.08-.62 1.54 0 0-.4.48-.58.14 0 0 .1-.44-.1-.6-.21.26-.41.63-.65 1.23-.56 1.39-2.98 1.71-3.57 1.25-.49-.39.14-1.23 1.05-2.1ZM230.18 299.52c1.36-1.96 2-3.45 2.04-3.55-.21.59-.58 1.75-.2 1.92.75.34 1.58-1.12 2-1.61.29-.34.24-.55.24-.55.36.61.38 1.16.23 1.6v.02c-.09.21-.2.39-.33.54-.21.39-.45.9-.45 1.27 0 0-.31.36-.5.23-.06.28-.16.6-.37 1.01-.7 1.33-2.55 1.98-3.09 1.46-.45-.43-.29-1.31.43-2.34Z",
                className: "MainSvg_svg__cls-73"
              },
              void 0,
              !1,
              {
                fileName: "app/assets/svgs/MainSvg.js",
                lineNumber: 1711,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/assets/svgs/MainSvg.js",
            lineNumber: 21,
            columnNumber: 9
          }, this) }, void 0, !1, {
            fileName: "app/assets/svgs/MainSvg.js",
            lineNumber: 20,
            columnNumber: 7
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/MainSvg.js",
          lineNumber: 15,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/svgs/MainSvg.js",
    lineNumber: 3,
    columnNumber: 3
  },
  this
), MainSvg_default = SvgMainSvg;

// app/components/Main.tsx
import { styled as styled3 } from "@mui/material";

// app/components/ui/Button.jsx
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/node/styles/index.js";
var Button = styled(MuiButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 500,
  borderRadius: 24,
  padding: "12px 48px",
  height: 48,
  border: "none",
  lineHeight: 1.5,
  color: "#1C1300",
  backgroundColor: "#F0B030",
  "&:hover": {
    backgroundColor: "#D49B2A"
  }
}), Button_default = Button;

// app/assets/icons/IconKakaotalk.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var IconKakaotalk = () => /* @__PURE__ */ jsxDEV8(
  "svg",
  {
    width: "90",
    height: "90",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsxDEV8(
        "path",
        {
          d: "M23.2715 28.9807H26.1513L24.7114 24.9904L23.2715 28.9807Z",
          fill: "#d89c54"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/icons/IconKakaotalk.jsx",
          lineNumber: 10,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        "path",
        {
          d: "M30 8C16.1923 8 5 16.6066 5 27.2248C5 34.0894 9.68029 40.1194 16.7187 43.5142C16.3365 44.8013 14.2572 51.7996 14.1755 52.3506C14.1755 52.3506 14.125 52.7632 14.399 52.9203C14.4907 52.9654 14.5909 52.9918 14.6934 52.9978C14.7959 53.0039 14.8986 52.9894 14.9952 52.9554C15.7837 52.8476 24.1298 47.1388 25.5721 46.1565C27.0392 46.3551 28.5188 46.4531 30 46.4495C43.8077 46.4495 55 37.8429 55 27.2248C55 16.6066 43.8077 8 30 8ZM17.6274 24.2402C17.5962 26.9598 17.6514 29.8201 17.6058 32.4975C17.5913 33.3532 17.0865 33.6088 16.4038 33.8526C16.3267 33.8792 16.2436 33.8849 16.1635 33.869C15.3822 33.719 14.7596 33.447 14.7404 32.4998C14.6851 29.8248 14.7572 26.9598 14.7187 24.2402C14.0577 24.2144 13.1154 24.266 12.5024 24.2402C11.6514 24.1863 11.0601 23.6588 11.0962 22.8734C11.1322 22.088 11.5625 21.523 12.5168 21.5089C14.7716 21.4761 17.5649 21.4761 19.8197 21.5089C20.7812 21.523 21.2091 22.0903 21.238 22.8734C21.2668 23.6565 20.6851 24.1863 19.8365 24.2402C19.2308 24.266 18.2909 24.2144 17.6274 24.2402ZM29.7428 33.7237C29.4544 33.8517 29.1413 33.918 28.8245 33.9183C28.2236 33.9183 27.7644 33.6838 27.6226 33.297L26.9014 31.473H22.512L21.7909 33.297C21.6514 33.6791 21.1923 33.9183 20.5889 33.9183C20.2729 33.9183 19.9605 33.8519 19.6731 33.7237C19.274 33.5455 18.8918 33.0531 19.3293 31.7262L22.7885 22.8687C22.9335 22.4785 23.1933 22.1388 23.5354 21.8919C23.8775 21.645 24.2866 21.502 24.7115 21.4808C25.1362 21.5043 25.5445 21.6485 25.8862 21.8955C26.2279 22.1425 26.4881 22.4816 26.6346 22.8711L30.0817 31.7238C30.5216 33.0531 30.1394 33.5549 29.7428 33.7237ZM37.0312 33.7237H32.4038C32.0455 33.7306 31.6989 33.5988 31.4399 33.3572C31.1808 33.1155 31.0305 32.7837 31.0216 32.4342V22.8875C31.037 22.5167 31.1988 22.166 31.4733 21.909C31.7477 21.6519 32.1135 21.5083 32.494 21.5083C32.8745 21.5083 33.2403 21.6519 33.5147 21.909C33.7891 22.166 33.951 22.5167 33.9663 22.8875V31.1518H37.0312C37.2116 31.1412 37.3922 31.1666 37.5621 31.2266C37.7319 31.2866 37.8874 31.3799 38.019 31.5007C38.1505 31.6215 38.2553 31.7672 38.3269 31.929C38.3986 32.0907 38.4355 32.265 38.4355 32.4412C38.4355 32.6174 38.3986 32.7918 38.3269 32.9535C38.2553 33.1153 38.1505 33.261 38.019 33.3818C37.8874 33.5026 37.7319 33.5958 37.5621 33.6558C37.3922 33.7158 37.2116 33.7413 37.0312 33.7307V33.7237ZM48.3293 32.664C48.2918 32.9414 48.1703 33.2017 47.9802 33.4114C47.7902 33.6212 47.5404 33.7709 47.2626 33.8414C46.9849 33.9118 46.6919 33.8999 46.4212 33.8071C46.1504 33.7143 45.9142 33.5449 45.7428 33.3204L42.3606 28.9526L41.8606 29.4403V32.5092C41.8606 32.8823 41.7086 33.2401 41.4381 33.5039C41.1676 33.7677 40.8008 33.9159 40.4183 33.9159C40.0357 33.9159 39.6689 33.7677 39.3984 33.5039C39.1279 33.2401 38.976 32.8823 38.976 32.5092V22.8968C38.976 22.5238 39.1279 22.166 39.3984 21.9022C39.6689 21.6384 40.0357 21.4902 40.4183 21.4902C40.8008 21.4902 41.1676 21.6384 41.4381 21.9022C41.7086 22.166 41.8606 22.5238 41.8606 22.8968V25.9118L45.8846 21.9872C45.99 21.8856 46.115 21.8055 46.2524 21.7515C46.3899 21.6976 46.537 21.6709 46.6851 21.673C47.0453 21.6822 47.3892 21.8209 47.651 22.0623C47.9128 22.3038 48.0739 22.631 48.1034 22.9812C48.1163 23.1375 48.0949 23.2947 48.0406 23.4423C47.9863 23.5898 47.9003 23.7244 47.7885 23.837L44.4952 27.0419L48.0457 31.63C48.2755 31.9276 48.3749 32.302 48.3221 32.671L48.3293 32.664Z",
          fill: "#d89c54"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/icons/IconKakaotalk.jsx",
          lineNumber: 14,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/icons/IconKakaotalk.jsx",
    lineNumber: 3,
    columnNumber: 5
  },
  this
), IconKakaotalk_default = IconKakaotalk;

// app/assets/icons/IconPhone.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var IconPhone = () => /* @__PURE__ */ jsxDEV9(
  "svg",
  {
    width: "90",
    height: "90",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsxDEV9(
      "path",
      {
        d: "M46.6562 8.9375H14.3438C13.1751 8.9375 12.0544 9.40173 11.2281 10.2281C10.4017 11.0544 9.9375 12.1751 9.9375 13.3438V45.6562C9.9375 46.8249 10.4017 47.9456 11.2281 48.7719C12.0544 49.5983 13.1751 50.0625 14.3438 50.0625H46.6562C47.8249 50.0625 48.9456 49.5983 49.7719 48.7719C50.5983 47.9456 51.0625 46.8249 51.0625 45.6562V13.3438C51.0625 12.1751 50.5983 11.0544 49.7719 10.2281C48.9456 9.40173 47.8249 8.9375 46.6562 8.9375ZM45.1517 37.1531L43.7747 43.1199C43.7048 43.4233 43.5341 43.694 43.2906 43.8878C43.047 44.0817 42.7449 44.1874 42.4336 44.1875C27.7461 44.1875 15.8125 32.2805 15.8125 17.5664C15.8234 17.258 15.933 16.9613 16.1252 16.7199C16.3174 16.4784 16.582 16.3051 16.8801 16.2253L22.8469 14.8483C22.9487 14.8268 23.0522 14.8148 23.1562 14.8125C23.4225 14.8259 23.6803 14.9104 23.9029 15.0571C24.1255 15.2039 24.3048 15.4075 24.4221 15.6469L27.176 22.0727C27.2435 22.246 27.281 22.4294 27.2871 22.6152C27.2647 23.0229 27.0834 23.4055 26.7822 23.681L23.304 26.5267C25.4115 30.9935 29.0065 34.5885 33.4733 36.696L36.319 33.2178C36.5945 32.9166 36.9771 32.7353 37.3848 32.7129C37.5706 32.7189 37.7541 32.7564 37.9273 32.824L44.3531 35.5779C44.5926 35.695 44.7963 35.8743 44.9431 36.0969C45.0899 36.3195 45.1743 36.5774 45.1875 36.8438C45.1857 36.9478 45.1737 37.0514 45.1517 37.1531Z",
        fill: "#d89c54"
      },
      void 0,
      !1,
      {
        fileName: "app/assets/icons/IconPhone.jsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/assets/icons/IconPhone.jsx",
    lineNumber: 3,
    columnNumber: 5
  },
  this
), IconPhone_default = IconPhone;

// app/components/Main.tsx
import { useState as useState3, useEffect as useEffect3, useRef as useRef3 } from "react";
import {
  Snackbar,
  SwipeableDrawer as MuiSwipeableDrawer,
  Alert
} from "@mui/material";

// app/components/CounselModal.jsx
import {
  Dialog as MuiDialog,
  TextField as MuiTextField,
  styled as styled2
} from "@mui/material";
import { useState as useState2, useRef as useRef2 } from "react";

// app/styles/main.css.ts
var main_banner_button = "main_main_banner_button__1bfkz6f0", main_banner_button_text = "main_main_banner_button_text__1bfkz6f1", send_email_form = "main_send_email_form__1bfkz6f2";
var mail_bottom_sheet_submit_button = "main_mail_bottom_sheet_submit_button__1bfkz6f4";

// app/components/CounselModal.jsx
import emailjs from "@emailjs/browser";
import { Fragment as Fragment2, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Dialog = styled2(MuiDialog)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   overflow: "hidden",
  width: "100%",
  "& .MuiPaper-root": {
    background: root.color.COLOR_08,
    color: root.color.COLOR_01,
    // maxWidth: 400,
    height: 600,
    borderRadius: 4,
    fontSize: 16,
    padding: 32,
    margin: 0,
    position: "relative",
    width: "100%"
  },
  "& .MuiDialog-container": {
    background: "transparent",
    color: root.color.WHITE,
    width: "90%",
    padding: 32
  },
  "& .content-title": {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 1.6,
    padding: "0 0 20px",
    borderBottom: `1px solid ${root.color.WHITE}`
  },
  "& .agreement": {
    fontSize: 12,
    margin: 0,
    color: root.color.COLOR_05
  },
  "& .content": {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 1.6,
    "& h2": {
      fontWeight: 400,
      fontSize: 18,
      marginTop: 28
    },
    "& p": {
      fontWeight: 200,
      fontSize: 14,
      marginBottom: 20
    }
  }
})), TextField = styled2(MuiTextField)(() => ({
  background: "transparent",
  color: root.color.WHITE,
  width: "100%",
  "& input": {
    width: "100%",
    fontSize: 14
  },
  "& textarea": {
    width: "100%",
    fontSize: 14
  },
  "&:active": {
    border: "none"
  }
})), CounselModal = ({ onClose, isRender, onOpenSnackbar }) => {
  let form = useRef2(), [userInfo, setUserInfo] = useState2({
    email: "",
    name: "",
    content: ""
  });
  return /* @__PURE__ */ jsxDEV10(Fragment2, { children: /* @__PURE__ */ jsxDEV10("div", { style: { padding: "40px 20px", position: "relative" }, children: /* @__PURE__ */ jsxDEV10(
    "form",
    {
      ref: form,
      onSubmit: (e) => {
        e.preventDefault(), emailjs.sendForm(
          "service_rmtlcpa",
          "template_vmdkb9q",
          form.current,
          "kN_K_gdIppMdJChHt"
        ).then((res) => {
          onClose(), onOpenSnackbar(!0);
        });
      },
      className: send_email_form,
      style: { width: "100%" },
      children: [
        /* @__PURE__ */ jsxDEV10(
          TextField,
          {
            label: "\uC774\uB984",
            style: { fontSize: 12 },
            variant: "standard",
            helperText: "\uC790\uC138\uD55C \uC0C1\uB2F4\uC744 \uC704\uD574 \uC2E4\uBA85\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",
            onChange: ({ target }) => setUserInfo({ ...userInfo, name: target.value }),
            autoFocus: !0,
            type: "text",
            name: "user_name",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/CounselModal.jsx",
            lineNumber: 122,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(
          TextField,
          {
            style: { fontSize: 12 },
            label: "\uC774\uBA54\uC77C",
            helperText: "\uB2F5\uBCC0 \uBC1B\uC73C\uC2E4 \uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC815\uD655\uD788 \uC785\uB825\uD574 \uC8FC\uC138\uC694",
            variant: "standard",
            onChange: ({ target }) => setUserInfo({ ...userInfo, email: target.value }),
            type: "email",
            name: "user_email",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/CounselModal.jsx",
            lineNumber: 136,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(
          TextField,
          {
            label: "\uBB38\uC758 \uB0B4\uC6A9",
            multiline: !0,
            required: !0,
            onChange: ({ target }) => setUserInfo({ ...userInfo, content: target.value }),
            placeholder: "\uC5F0\uB77D\uCC98\uB97C \uD568\uAED8 \uAE30\uC7AC\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
            minRows: 4,
            type: "text",
            name: "message",
            style: { margin: "20px 0 8px" }
          },
          void 0,
          !1,
          {
            fileName: "app/components/CounselModal.jsx",
            lineNumber: 149,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("div", { className: "agreement", children: /* @__PURE__ */ jsxDEV10(
          "p",
          {
            style: {
              margin: 0,
              fontSize: 12,
              color: root.color2.GRAY_01,
              fontWeight: 300,
              paddingBottom: 40
            },
            children: [
              "\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uB97C \uC704\uD55C \uC774\uC6A9\uC790 \uB3D9\uC758 \uC0AC\uD56D ",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 174,
                columnNumber: 36
              }, this),
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 175,
                columnNumber: 15
              }, this),
              "1. \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uBAA9\uC801 ",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 176,
                columnNumber: 35
              }, this),
              " ",
              "  ",
              "\uAC00. \uBB38\uC758\uC5D0 \uB300\uD55C \uB2F5\uBCC0",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 177,
                columnNumber: 15
              }, this),
              "  ",
              "\uB098. \uBBFC\uC6D0\uC0AC\uBB34 \uCC98\uB9AC ",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 178,
                columnNumber: 32
              }, this),
              "  ",
              "\uB2E4. \uC7AC\uD654 \uB610\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 180,
                columnNumber: 15
              }, this),
              "  ",
              "\uB77C. \uB9C8\uCF00\uD305 \uD65C\uC6A9 \uBC0F \uAD11\uACE0\uBB3C \uC81C\uACF5 ",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 181,
                columnNumber: 40
              }, this),
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 182,
                columnNumber: 15
              }, this),
              "2. \uC218\uC9D1\uD56D\uBAA9 : \uC774\uB984, \uC5F0\uB77D\uCC98, \uC774\uBA54\uC77C \uB4F1",
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 183,
                columnNumber: 39
              }, this),
              /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
                fileName: "app/components/CounselModal.jsx",
                lineNumber: 184,
                columnNumber: 15
              }, this),
              " 3. \uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04 : \uC774\uC6A9\uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uB54C\uAE4C\uC9C0 \uBCF4\uC720\uD569\uB2C8\uB2E4."
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/CounselModal.jsx",
            lineNumber: 165,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/CounselModal.jsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(
          Button_default,
          {
            type: "submit",
            id: "mail_submit",
            className: mail_bottom_sheet_submit_button,
            disabled: !userInfo.content || !userInfo.email || !userInfo.name,
            children: "\uBB38\uC758\uD558\uAE30"
          },
          void 0,
          !1,
          {
            fileName: "app/components/CounselModal.jsx",
            lineNumber: 189,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CounselModal.jsx",
      lineNumber: 116,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/CounselModal.jsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CounselModal.jsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}, CounselModal_default = CounselModal;

// app/assets/svgs/DesktopMainText.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var SvgDesktopMainText = (props) => /* @__PURE__ */ jsxDEV11(
  "svg",
  {
    width: "472",
    height: "97",
    viewBox: "0 0 472 97",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M32.56 0.600006V9.88001H37.6V16.28H32.56V23.12H25.6V18.84C19.8 20.72 11.72 21.56 0.959999 21.56V3.28H20.08V8.96001H8.08L8.12 15.88C12.6 15.88 19.48 15.4 25.6 13.68V0.600006H32.56ZM18.96 23.48C27.76 23.48 33.08 26.52 33.08 31.52C33.08 36.64 27.76 39.52 18.96 39.52C10.08 39.52 4.8 36.64 4.8 31.52C4.8 26.52 10.08 23.48 18.96 23.48ZM24.72 33C25.32 32.6 25.56 32.04 25.56 31.4C25.56 30.76 25.32 30.2 24.72 29.8C23.44 29.16 21.6 28.76 18.96 28.76C16.28 28.76 14.44 29.16 13.12 29.8C12.6 30.2 12.32 30.76 12.32 31.4C12.32 32.04 12.6 32.6 13.12 33C14.4 33.64 16.28 34 18.96 34C21.6 34 23.44 33.64 24.72 33Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M67.16 0.600006H74.28V29.24H67.16V0.600006ZM60.96 23.92L51.88 17.28C49.8 20.6 47.12 23.44 43.92 25.84L39.08 20.68C45.4 16.44 48.88 10.64 49.28 2.6L56.44 2.88001C56.16 6.00001 55.56 8.88 54.64 11.48L64.52 18.68L60.96 23.92ZM54.16 25.6V32.64H75.44V38.84H47.04V25.6H54.16Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 14,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M114.28 39H107.32V0.600006H114.28V39ZM92.52 23.96C86.28 23.96 81.6 20.52 81.6 13.96C81.6 7.4 86.28 4.00001 92.52 4.00001C98.76 4.00001 103.44 7.4 103.44 13.96C103.44 20.52 98.76 23.96 92.52 23.96ZM92.52 18.4C95.28 18.4 96.72 16.8 96.72 13.96C96.72 11.16 95.28 9.52001 92.52 9.52001C89.8 9.52001 88.36 11.16 88.36 13.96C88.36 16.8 89.8 18.4 92.52 18.4ZM79.88 34.64L79.08 28.04C89.84 28.04 98.08 27.64 105.32 26.24L106 32.56C98.88 33.96 90.4 34.64 79.88 34.64Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 18,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M161.111 15.2L154.111 14.8C154.631 12.36 154.911 9.96 154.991 7.48001H134.271V1.84H162.031C161.991 6.64 161.711 11.4 161.111 15.2ZM149.591 9.72001V16.8H167.391V22.4H129.391V16.8H142.511V9.72001H149.591ZM148.391 24.48C157.431 24.48 162.791 27.28 162.791 31.96C162.791 36.8 157.431 39.4 148.391 39.4C139.351 39.4 133.991 36.8 133.991 31.96C133.991 27.28 139.351 24.48 148.391 24.48ZM154.391 33.24C154.911 32.92 155.151 32.44 155.151 31.84C155.151 31.24 154.911 30.72 154.391 30.36C152.991 29.76 151.111 29.4 148.391 29.4C145.671 29.4 143.791 29.76 142.431 30.36C141.871 30.72 141.631 31.24 141.631 31.84C141.631 32.44 141.911 32.92 142.431 33.24C143.791 33.92 145.671 34.28 148.391 34.28C151.111 34.28 152.991 33.92 154.391 33.24Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 22,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M204.671 23H197.551V14.4H190.991V8.52H197.551V0.600006H204.671V23ZM194.151 18.24L190.911 23L182.751 18.32C179.871 20.72 176.431 22.68 172.671 24.08L169.431 18.84C176.431 16.48 180.591 12.96 182.791 9.16001V9.00001H171.711V3.28H190.951C190.511 7.4 188.991 11 186.751 14.04L194.151 18.24ZM190.591 23.48C199.391 23.48 204.711 26.52 204.711 31.52C204.711 36.64 199.391 39.52 190.591 39.52C181.711 39.52 176.431 36.64 176.431 31.52C176.431 26.52 181.711 23.48 190.591 23.48ZM196.351 33C196.951 32.6 197.191 32.04 197.191 31.4C197.191 30.76 196.951 30.2 196.351 29.8C195.071 29.16 193.231 28.76 190.591 28.76C187.911 28.76 186.071 29.16 184.751 29.8C184.231 30.2 183.951 30.76 183.951 31.4C183.951 32.04 184.231 32.6 184.751 33C186.031 33.64 187.911 34 190.591 34C193.231 34 195.071 33.64 196.351 33Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 26,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M228.391 14.04C219.351 14.04 214.031 11.88 214.031 7.44001C214.031 3.24001 219.351 0.880005 228.391 0.880005C237.431 0.880005 242.751 3.24001 242.751 7.44001C242.751 11.88 237.431 14.04 228.391 14.04ZM228.391 9.36001C231.151 9.36001 233.071 9.08001 234.471 8.56001C234.911 8.32 235.151 7.96 235.151 7.52001C235.151 7.04 234.951 6.68001 234.471 6.44C233.031 5.92 231.151 5.68001 228.391 5.68001C225.631 5.68001 223.711 5.92 222.311 6.44C221.831 6.68001 221.671 7.04 221.671 7.52001C221.671 7.96 221.871 8.32 222.311 8.56001C223.711 9.08001 225.631 9.36001 228.391 9.36001ZM247.391 20.68H209.391V15.36H247.391V20.68ZM243.951 39.08H214.711V28.64H234.791V26.88H214.231V22.48H242.031V32.6H221.951V34.4H243.951V39.08Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 30,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M288.101 39V0.600006H295.061V39H288.101ZM265.741 2.88001H280.861V7.64001H265.741V2.88001ZM263.141 25.84L260.181 20.6C267.461 19.24 272.341 17.36 275.101 14.72V14.48L271.101 14.72H262.741V9.48001H283.221C282.901 12.84 281.621 15.6 279.621 17.88L286.021 20.28L283.181 25.12L274.421 21.96C271.261 23.72 267.381 25 263.141 25.84ZM277.061 23.96V28.36C280.341 28.12 283.341 27.76 286.181 27.32L286.781 33.32C279.701 34.6 271.181 35.16 260.621 35.16L259.861 28.84C263.621 28.84 267.061 28.8 270.261 28.68V23.96H277.061Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 34,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M318.781 19.24C309.701 19.24 304.221 15.92 304.221 10.4C304.221 5 309.701 1.60001 318.781 1.60001C327.901 1.60001 333.341 5 333.341 10.4C333.341 15.92 327.901 19.24 318.781 19.24ZM312.661 8.68C312.141 9.12001 311.861 9.72001 311.861 10.44C311.861 11.12 312.141 11.76 312.661 12.2C313.941 13.08 315.901 13.56 318.781 13.56C321.661 13.56 323.621 13.08 324.901 12.2C325.421 11.76 325.701 11.12 325.701 10.44C325.701 9.72001 325.421 9.12001 324.901 8.68C323.621 7.80001 321.661 7.32001 318.781 7.32001C315.901 7.32001 313.941 7.80001 312.661 8.68ZM299.781 21.48H337.781V27.48H322.421V38.92H315.181V27.48H299.781V21.48Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 38,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M375.061 29.24H367.941V14.32H359.181V7.92H367.941V0.600006H375.061V29.24ZM364.181 19.72L360.741 24.96L351.621 18.04C349.781 21.16 347.421 23.88 344.541 26.2L339.741 21.12C345.661 16.68 348.661 11.12 349.101 2.6L356.061 2.88001C355.781 6.36001 355.181 9.48001 354.221 12.32L364.181 19.72ZM354.941 25.6V32.64H376.221V38.84H347.821V25.6H354.941Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 42,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M398.781 24.68C389.541 24.68 383.981 20.44 383.981 14C383.981 7.64001 389.541 3.36001 398.781 3.36001C408.021 3.36001 413.581 7.64001 413.581 14C413.581 20.44 408.021 24.68 398.781 24.68ZM398.781 18.28C401.781 18.28 403.821 17.6 404.981 16.4C405.581 15.76 405.901 15 405.901 14C405.901 13.08 405.581 12.28 404.981 11.68C403.781 10.48 401.781 9.8 398.781 9.8C395.781 9.8 393.741 10.48 392.581 11.68C391.981 12.28 391.661 13.08 391.661 14C391.661 15 391.981 15.76 392.581 16.4C393.741 17.6 395.781 18.28 398.781 18.28ZM417.781 35.68H379.781V29.08H417.781V35.68Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 46,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M442.341 24.6V29.36H457.781V35.68H419.781V29.36H435.261V24.6H425.261V11.48H445.221V9.04H424.861V3.48H452.181V16.56H432.181V19.08H453.781V24.6H442.341Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 50,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M466.301 43.92L462.141 43.48C463.861 40.8 464.741 38.08 464.741 35.2C464.741 33.16 463.701 31.52 462.181 31C462.301 28.84 463.941 26.64 466.621 26.64C469.421 26.64 471.301 28.48 471.301 31.88C471.301 36.44 468.821 41.44 466.301 43.92Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 54,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M32.56 56.6V65.88H37.6V72.28H32.56V79.12H25.6V74.84C19.8 76.72 11.72 77.56 0.959999 77.56V59.28H20.08V64.96H8.08L8.12 71.88C12.6 71.88 19.48 71.4 25.6 69.68V56.6H32.56ZM18.96 79.48C27.76 79.48 33.08 82.52 33.08 87.52C33.08 92.64 27.76 95.52 18.96 95.52C10.08 95.52 4.8 92.64 4.8 87.52C4.8 82.52 10.08 79.48 18.96 79.48ZM24.72 89C25.32 88.6 25.56 88.04 25.56 87.4C25.56 86.76 25.32 86.2 24.72 85.8C23.44 85.16 21.6 84.76 18.96 84.76C16.28 84.76 14.44 85.16 13.12 85.8C12.6 86.2 12.32 86.76 12.32 87.4C12.32 88.04 12.6 88.6 13.12 89C14.4 89.64 16.28 90 18.96 90C21.6 90 23.44 89.64 24.72 89Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 58,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M67.16 56.6H74.28V85.24H67.16V56.6ZM60.96 79.92L51.88 73.28C49.8 76.6 47.12 79.44 43.92 81.84L39.08 76.68C45.4 72.44 48.88 66.64 49.28 58.6L56.44 58.88C56.16 62 55.56 64.88 54.64 67.48L64.52 74.68L60.96 79.92ZM54.16 81.6V88.64H75.44V94.84H47.04V81.6H54.16Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 62,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M114.28 95H107.32V56.6H114.28V95ZM92.52 79.96C86.28 79.96 81.6 76.52 81.6 69.96C81.6 63.4 86.28 60 92.52 60C98.76 60 103.44 63.4 103.44 69.96C103.44 76.52 98.76 79.96 92.52 79.96ZM92.52 74.4C95.28 74.4 96.72 72.8 96.72 69.96C96.72 67.16 95.28 65.52 92.52 65.52C89.8 65.52 88.36 67.16 88.36 69.96C88.36 72.8 89.8 74.4 92.52 74.4ZM79.88 90.64L79.08 84.04C89.84 84.04 98.08 83.64 105.32 82.24L106 88.56C98.88 89.96 90.4 90.64 79.88 90.64Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 66,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M157.551 77.4H152.031L152.231 80.04C145.831 80.84 139.231 81.16 130.631 81.16L129.991 75.52H133.551L132.831 67.24L138.751 67.04L139.151 75.4L142.231 75.28L142.591 67.04L148.511 67.24L147.911 74.88C149.231 74.76 150.511 74.6 151.791 74.44L151.991 77V71.84H157.551V68.6H151.991V63.04H157.551V56.6H164.671V85.24H157.551V77.4ZM130.631 59.8H151.031V65.68H130.631V59.8ZM144.551 82.92V88.76H165.831V94.84H137.431V82.92H144.551Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 70,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M198.991 95V56.6H205.391V95H198.991ZM187.271 71.28H189.951V58.04H196.191V93.6H189.951V78.12H187.311C186.591 85.76 183.111 89.2 178.671 89.2C173.631 89.2 169.911 84.8 169.911 74.88C169.911 64.96 173.631 60.56 178.671 60.56C183.071 60.56 186.471 63.88 187.271 71.28ZM178.791 82.76C180.431 82.76 181.351 79.96 181.351 74.88C181.351 69.8 180.431 67 178.791 67C177.111 67 176.191 69.8 176.191 74.88C176.191 79.96 177.111 82.76 178.791 82.76Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 74,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M247.941 67.84V56.6H255.061V95H247.941V74.4H239.181V67.84H247.941ZM229.101 60.04L236.261 60.2C236.101 64.64 235.541 68.64 234.621 72.24L244.661 83.28L240.221 88.44L232.141 79.24C230.381 83.08 228.101 86.4 225.341 89.32L219.741 84.28C225.661 78.52 228.861 71.16 229.101 60.04Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 78,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M289.381 56.6H295.781V78.16H289.381V56.6ZM263.181 80.24L259.541 75.16C265.541 72.64 268.901 68.8 270.101 65.6V65.44H261.541V59.8H277.421C277.341 62.24 276.901 64.52 276.181 66.6H280.341V57.32H286.581V78.12H280.341V72.2H273.261C270.781 75.64 267.301 78.32 263.181 80.24ZM290.621 84.24L297.581 90.48L294.101 95.32L287.901 89.68C286.141 92.24 283.821 94.44 280.981 96.32L276.741 91.48C282.181 88.12 284.701 84.52 285.341 79.12L291.661 79.6C291.461 81.28 291.101 82.8 290.621 84.24ZM275.741 83.68L279.581 87.08L275.701 91.92L272.981 89.24C271.221 91.88 268.981 94.12 266.461 95.84L262.221 91.12C266.981 88.12 269.821 84.32 270.461 79.32L276.621 79.84C276.461 81.16 276.141 82.44 275.741 83.68Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 82,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M333.181 71.52L318.141 65.48C314.501 68.32 309.741 70.48 304.541 71.96L301.301 66.4C309.941 64.36 315.661 60.88 317.621 56.32L324.341 57.64C323.861 58.88 323.181 60.04 322.421 61.12L336.061 66.32L333.181 71.52ZM299.781 78.36V72.88H337.781V78.36H299.781ZM312.261 82.8H325.261V80.04H332.341V94.88H305.261V80.04H312.261V82.8ZM312.101 89.6H325.381L325.421 87.2H312.141L312.101 89.6Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 86,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M367.941 78.12V56.6H375.061V95H367.941V84.2C361.861 86.24 352.581 87.36 342.341 87.36V60.88H349.301V80.84C353.341 80.84 361.861 79.8 367.941 78.12Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 90,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV11(
        "path",
        {
          d: "M413.341 71.52H418.381V78.64H413.341V95H406.381V85C400.181 86.96 392.101 87.76 381.821 87.76V61H401.301V67.48H388.981L389.021 81.28C393.421 81.28 400.221 80.76 406.381 79.04V56.6H413.341V71.52Z",
          fill: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/svgs/DesktopMainText.tsx",
          lineNumber: 94,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/svgs/DesktopMainText.tsx",
    lineNumber: 3,
    columnNumber: 3
  },
  this
), DesktopMainText_default = SvgDesktopMainText;

// app/components/Main.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var drawerBleeding = 56, WORDS_LIST = [
  {
    label: "\uD615\uC0AC",
    icon: /* @__PURE__ */ jsxDEV12(LocalPolice, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  },
  {
    label: "\uC0C1\uC18D",
    icon: /* @__PURE__ */ jsxDEV12(ReceiptLong, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  },
  {
    label: "\uAD50\uD1B5\uC0AC\uACE0",
    icon: /* @__PURE__ */ jsxDEV12(CarCrash, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  },
  {
    label: "\uC190\uD574\uBC30\uC0C1",
    icon: /* @__PURE__ */ jsxDEV12(Gavel, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  },
  {
    label: "\uC2A4\uD0C0\uD2B8\uC5C5",
    icon: /* @__PURE__ */ jsxDEV12(Business, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  },
  {
    label: "\uC678\uAD6D\uC778 \uAD00\uB828",
    icon: /* @__PURE__ */ jsxDEV12(Public, { style: { fontSize: 24, paddingTop: 3 } }, void 0, !1, {
      fileName: "app/components/Main.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  }
], defaultOptions2 = {
  loop: !0,
  autoplay: !0,
  animationData: JSON.stringify(law_default),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}, clickOptions = {
  loop: !0,
  autoplay: !0,
  animationData: JSON.stringify(click_default),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}, clickMainOptions = {
  loop: !0,
  autoplay: !0,
  animationData: JSON.stringify(clickMain3_default),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}, SwipeableDrawer = styled3(MuiSwipeableDrawer)(() => ({
  "& .MuiPaper-root": {
    margin: "0 auto",
    maxWidth: 1e3,
    borderRadius: "20px 20px 0 0"
  }
})), Main = () => {
  let [isSnackbarOpen, setIsSnackbarOpen] = useState3(!1), [open, setOpen] = useState3(!1), [isMailOpen, setIsMailOpen] = useState3(!1), toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }, [isClicked, setIsClicked] = useState3({
    kakao: 0,
    tel: 0,
    place: 0,
    mail: 0
  }), shareButtonRef = useRef3(null), handleKakaoClick = () => {
    setOpen(!1), setIsClicked({
      ...isClicked,
      kakao: isClicked.kakao + 1
    });
  }, handleMailClick = () => {
    console.log("??????"), setIsMailOpen(!0);
  }, handleTelClick = () => {
    setOpen(!1), setIsClicked({
      ...isClicked,
      tel: isClicked.tel + 1
    });
  }, handleMailSubmitComplete = () => {
    setIsClicked({
      ...isClicked,
      mail: isClicked.mail + 1
    });
  };
  useEffect3(() => {
    (window && window.innerWidth) < 1200;
  }, []), useEffect3(() => {
    window && (window.CallMtm = window.CallMtm || function() {
      (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
    }, CallMtm({
      productName: "mail_submit",
      //광고주 측에서 설정하고 싶은 값(default convType) : "mail_submit_mobile", //광고주 측에서 설정하고 싶은 값(default convType)
      convType: "etc",
      //etc, join, login
      click: "#mail_submit"
      //click으로 전환 잡을 경우 css selector 값
    }));
  }, [isClicked.mail]), useEffect3(() => {
    window && (window.CallMtm = window.CallMtm || function() {
      (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
    }, CallMtm({
      productName: "kakao",
      convType: "etc",
      click: "#kakao"
    }));
  }, [isClicked.kakao]), useEffect3(() => {
    window && (window.CallMtm = window.CallMtm || function() {
      (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
    }, CallMtm({
      productName: "tel",
      convType: "etc",
      click: "#tel"
    }), console.log("???"));
  }, [isClicked.tel]), console.log(isClicked);
  let [kakaokey, setKakaokey] = useState3("");
  return useEffect3(() => {
    window && setKakaokey(window.ENV.KAKAO_JS_KEY);
  }, []), useEffect3(() => {
    window && (window.CallMtm = window.CallMtm || function() {
      (window.CallMtm.q = window.CallMtm.q || []).push(arguments);
    }, CallMtm({
      productName: "place",
      convType: "etc",
      click: "#place"
    }));
  }, [isClicked.place]), /* @__PURE__ */ jsxDEV12("section", { id: "main", className: mainSection, children: [
    /* @__PURE__ */ jsxDEV12(
      "div",
      {
        style: {
          height: 500
        },
        children: /* @__PURE__ */ jsxDEV12("div", { className: main_title_area, children: [
          /* @__PURE__ */ jsxDEV12(
            MainSvg_default,
            {
              style: {
                position: "absolute",
                bottom: -500,
                right: 0,
                maxWidth: 520,
                zIndex: 0
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Main.tsx",
              lineNumber: 239,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            "p",
            {
              style: {
                color: root.color2.COLOR_05,
                fontWeight: 500,
                fontSize: 16,
                position: "absolute",
                left: 20
              },
              children: "\uCD5C\uACE0\uC758 \uC804\uBB38\uAC00\uAC00 \uD568\uAED8\uD569\uB2C8\uB2E4"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Main.tsx",
              lineNumber: 248,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", left: 0, top: -9 } }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 259,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", left: 20, top: 48 }, children: /* @__PURE__ */ jsxDEV12(DesktopMainText_default, {}, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 264,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 262,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV12(
            "p",
            {
              style: {
                color: root.color2.GRAY_02,
                fontWeight: 500,
                fontSize: 18,
                marginTop: 28,
                lineHeight: 1.5,
                position: "relative",
                top: 180,
                left: 20,
                zIndex: 5
              },
              children: /* @__PURE__ */ jsxDEV12("span", { style: { background: root.color.WHITE }, children: [
                '"\uB2F9\uC2E0\uC758 \uC815\uC758, \uC624\uC9C1 \uB2F9\uC2E0\uC744 \uC704\uD55C \uACF5\uC815"',
                /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 282,
                  columnNumber: 15
                }, this),
                "\uCD5C\uC801\uC758 \uBC29\uBC95\uC73C\uB85C \uB2F9\uC2E0\uB9CC\uC744 \uC704\uD574 \uC2F8\uC6B0\uACA0\uC2B5\uB2C8\uB2E4"
              ] }, void 0, !0, {
                fileName: "app/components/Main.tsx",
                lineNumber: 280,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Main.tsx",
              lineNumber: 267,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            Button_default,
            {
              style: {
                position: "absolute",
                left: 20,
                top: 260,
                fontSize: 14,
                fontWeight: 400,
                height: 42,
                marginTop: 30,
                width: "fit-content",
                padding: "8px 22px",
                background: root.color2.COLOR_05,
                color: root.color.WHITE
              },
              onClick: handleMailClick,
              children: "\uC9C0\uAE08 \uB2F9\uC7A5 \uBB34\uB8CC\uB85C \uBC95\uB960 \uC0C1\uB2F4\uC744 \uBC1B\uC544\uBCF4\uC138\uC694"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Main.tsx",
              lineNumber: 287,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Main.tsx",
          lineNumber: 238,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Main.tsx",
        lineNumber: 233,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      "div",
      {
        style: {
          position: "relative",
          top: 0,
          height: 170,
          borderRadius: 18
        },
        children: /* @__PURE__ */ jsxDEV12("div", { className: main_words_list_container, children: WORDS_LIST.map((word) => /* @__PURE__ */ jsxDEV12("div", { className: main_words_list_item, children: [
          /* @__PURE__ */ jsxDEV12("div", { children: word.icon }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, this),
          word.label
        ] }, word.label, !0, {
          fileName: "app/components/Main.tsx",
          lineNumber: 319,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/components/Main.tsx",
          lineNumber: 316,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Main.tsx",
        lineNumber: 308,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      "div",
      {
        style: {
          position: "relative",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexDirection: "row"
        },
        children: [
          /* @__PURE__ */ jsxDEV12("a", { id: "tel", href: "tel:01079340883", className: main_banner_button, children: /* @__PURE__ */ jsxDEV12("div", { onClick: handleTelClick, children: [
            /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 0, right: 0 }, children: /* @__PURE__ */ jsxDEV12(IconPhone_default, {}, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 344,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 343,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 80, right: 12 } }, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 346,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: main_banner_button_text, children: [
              "\uBB34\uB8CC",
              /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
                fileName: "app/components/Main.tsx",
                lineNumber: 352,
                columnNumber: 15
              }, this),
              "\uC804\uD654 \uC0C1\uB2F4"
            ] }, void 0, !0, {
              fileName: "app/components/Main.tsx",
              lineNumber: 350,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Main.tsx",
            lineNumber: 342,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 341,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV12(
            "a",
            {
              id: "kakao",
              href: "https://pf.kakao.com/_TsAxdG",
              className: main_banner_button,
              target: "_blank",
              children: /* @__PURE__ */ jsxDEV12("div", { onClick: handleKakaoClick, children: [
                /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 0, right: 8 }, children: /* @__PURE__ */ jsxDEV12(IconKakaotalk_default, {}, void 0, !1, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 366,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 365,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 80, right: 12 } }, void 0, !1, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 368,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV12("p", { className: main_banner_button_text, children: [
                  "\uBB34\uB8CC",
                  /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
                    fileName: "app/components/Main.tsx",
                    lineNumber: 373,
                    columnNumber: 15
                  }, this),
                  "\uCE74\uCE74\uC624\uD1A1 \uC0C1\uB2F4"
                ] }, void 0, !0, {
                  fileName: "app/components/Main.tsx",
                  lineNumber: 371,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Main.tsx",
                lineNumber: 364,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Main.tsx",
              lineNumber: 358,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12("div", { id: "mail", onClick: handleMailClick, className: main_banner_button, children: /* @__PURE__ */ jsxDEV12("div", { children: [
            /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 0, right: 0 }, children: /* @__PURE__ */ jsxDEV12(IconPhone_default, {}, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 382,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 381,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV12("div", { style: { position: "absolute", top: 80, right: 12 } }, void 0, !1, {
              fileName: "app/components/Main.tsx",
              lineNumber: 384,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV12("p", { className: main_banner_button_text, children: [
              "\uBB34\uB8CC",
              /* @__PURE__ */ jsxDEV12("br", {}, void 0, !1, {
                fileName: "app/components/Main.tsx",
                lineNumber: 390,
                columnNumber: 15
              }, this),
              "\uBA54\uC77C \uC0C1\uB2F4"
            ] }, void 0, !0, {
              fileName: "app/components/Main.tsx",
              lineNumber: 388,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Main.tsx",
            lineNumber: 380,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Main.tsx",
            lineNumber: 379,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Main.tsx",
        lineNumber: 328,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      SwipeableDrawer,
      {
        anchor: "bottom",
        onOpen: () => setIsMailOpen(!0),
        open: isMailOpen,
        onClose: () => setIsMailOpen(!1),
        swipeAreaWidth: drawerBleeding,
        disableSwipeToOpen: !1,
        ModalProps: {
          keepMounted: !0
        },
        children: isMailOpen && /* @__PURE__ */ jsxDEV12("div", { className: mail_bottom_sheet_container, children: /* @__PURE__ */ jsxDEV12(
          CounselModal_default,
          {
            onOpenSnackbar: () => setIsSnackbarOpen(!0),
            onClose: toggleDrawer(!1)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Main.tsx",
            lineNumber: 409,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Main.tsx",
          lineNumber: 408,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Main.tsx",
        lineNumber: 396,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV12(
      Snackbar,
      {
        anchorOrigin: { vertical: "top", horizontal: "center" },
        open: isSnackbarOpen,
        autoHideDuration: 2e3,
        onClose: handleMailSubmitComplete,
        children: /* @__PURE__ */ jsxDEV12(Alert, { severity: "success", sx: { width: "90%" }, children: "\uC0C1\uB2F4 \uBB38\uC758 \uBA54\uC77C\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }, void 0, !1, {
          fileName: "app/components/Main.tsx",
          lineNumber: 422,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Main.tsx",
        lineNumber: 416,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Main.tsx",
    lineNumber: 232,
    columnNumber: 5
  }, this);
}, Main_default = Main;

// app/components/Place.tsx
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var Place = () => {
  let latLng = {
    lat: 37.517404,
    lng: 127.01876
  };
  return /* @__PURE__ */ jsxDEV13("section", { id: "place_mobile", className: place_section, children: [
    /* @__PURE__ */ jsxDEV13("div", { style: { position: "absolute", right: 20, top: -16, zIndex: 0 } }, void 0, !1, {
      fileName: "app/components/Place.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: place_content_area, children: [
      /* @__PURE__ */ jsxDEV13("h2", { style: { color: root.color.COLOR_01, marginTop: 0 }, children: "\uC624\uC2DC\uB294 \uAE38" }, void 0, !1, {
        fileName: "app/components/Place.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13(
        "p",
        {
          style: {
            color: root.color.COLOR_04,
            fontWeight: 400,
            margin: "40px 0",
            paddingLeft: 20
          },
          children: [
            "\uC11C\uC6B8 \uC11C\uCD08\uAD6C \uAC15\uB0A8\uB300\uB85C 623",
            /* @__PURE__ */ jsxDEV13("br", {}, void 0, !1, {
              fileName: "app/components/Place.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            "\uBC95\uBB34\uBC95\uC778 \uC18C\uC6B8"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Place.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Place.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "div",
      {
        style: {
          display: "flex",
          height: 280,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto"
        },
        children: /* @__PURE__ */ jsxDEV13(
          Map,
          {
            draggable: !0,
            id: "map",
            level: 3,
            onClick: () => window.open("https://kko.to/5gtm6q2CpD"),
            center: { lat: latLng.lat, lng: latLng.lng },
            style: {
              width: "100%",
              maxWidth: 600,
              minWidth: 300,
              height: 250,
              border: `1px solid ${root.color2.BLACK}`
            },
            children: /* @__PURE__ */ jsxDEV13(MapMarker, { position: { lat: latLng.lat, lng: latLng.lng }, children: /* @__PURE__ */ jsxDEV13("div", { style: { color: "#000" }, children: "\uBC95\uBB34\uBC95\uC778 \uC18C\uC6B8" }, void 0, !1, {
              fileName: "app/components/Place.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/Place.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Place.tsx",
            lineNumber: 53,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Place.tsx",
        lineNumber: 43,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Place.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, Place_default = Place;

// app/data/profile.ts
var kongJiYeon = {
  education: {
    name: "\uD559\uB825",
    content: ["\uACBD\uD76C\uB300\uD559\uAD50 \uC790\uC728\uC804\uACF5\uD559\uACFC", "\uACBD\uD76C\uB300\uD559\uAD50 \uBC95\uD559\uC804\uBB38\uB300\uD559\uC6D0"]
  },
  experience: {
    name: "\uACBD\uB825",
    content: [
      "\uAD6D\uBC29\uBD80 \uC2E4\uBB34 \uC218\uC2B5",
      "\u524D) \uBC95\uBB34\uBC95\uC778 \uD574\uB791",
      "\u524D) \uBC95\uBB34\uBC95\uC778 AK \uAD50\uD1B5\uC0AC\uACE0, \uC190\uD574\uBC30\uC0C1 \uC804\uB2F4",
      "\u73FE) \uBC95\uBB34\uBC95\uC778 \uC18C\uC6B8 \uD30C\uD2B8\uB108 \uBCC0\uD638\uC0AC",
      "\u73FE) \uC11C\uC6B8 \uAD00\uC545\uACBD\uCC30\uC11C \uC120\uB3C4\uC2EC\uC0AC\uC704\uC6D0",
      "\u73FE) \uC11C\uC6B8 \uAD00\uC545\uACBD\uCC30\uC11C \uC548\uBCF4\uC790\uBB38\uD611\uC758\uD68C \uD68C\uC6D0",
      "EBS '\uC9C1\uC5C5\uD0D0\uAD6C, \uBCC4\uC77C\uC785\uB2C8\uB2E4' \uCD9C\uC5F0"
    ]
  }
}, jeongJinKwon = {
  education: {
    name: "\uD559\uB825",
    content: ["\uC11C\uC6B8\uB300\uD559\uAD50 \uC0AC\uD68C\uD559\uACFC", "\uACBD\uD76C\uB300\uD559\uAD50 \uBC95\uD559\uC804\uBB38\uB300\uD559\uC6D0"]
  },
  experience: {
    name: "\uACBD\uB825",
    content: [
      "\u524D) \uAC10\uC0AC\uC6D0 \uAD6D\uBC29\uAC10\uC0AC\uAD6D (\uAD6D\uBC29\uBD80, \uBC29\uC704\uC0AC\uC5C5\uCCAD) \uAC10\uC0AC\uAD00",
      "\u524D) \uC6B8\uC0B0\uC9C0\uAC80 \uC2E4\uBB34 \uC218\uC2B5",
      "\u524D) \uBC95\uBB34\uBC95\uC778 \uCD5C\uC120, \uBC95\uBB34\uBC95\uC778 AK",
      "\u524D) \uBC95\uB960\uC0AC\uBB34\uC18C \uC704\uB4DC\uC724 \uD30C\uD2B8\uB108 \uBCC0\uD638\uC0AC",
      "\u73FE) \uBC95\uBB34\uBC95\uC778 \uC18C\uC6B8 \uD30C\uD2B8\uB108 \uBCC0\uD638\uC0AC",
      "\u73FE) \uC11C\uC6B8 \uD61C\uD654\uACBD\uCC30\uC11C \uC989\uACB0\uC2EC\uD310\uC704\uC6D0",
      "\u73FE) \uC11C\uC6B8 \uC591\uCC9C\uAD6C\uCCAD \uC804\uC138\uC0AC\uAE30\uD53C\uD574 \uBC95\uB960\uC0C1\uB2F4\uAD00"
    ]
  }
};

// app/styles/profile.css.ts
var profileSection = "profile_profileSection__1c4gy1f0", profile_kong = "profile_profile_kong__1c4gy1f1", profile_jeong = "profile_profile_jeong__1c4gy1f2";
var profile_title_text = "profile_profile_title_text__1c4gy1f4 root_text__1a58cmf0", profile_title_name = "profile_profile_title_name__1c4gy1f5 root_text__1a58cmf0", ul = "profile_ul__1c4gy1f6 root_text__1a58cmf0", li_span = "profile_li_span__1c4gy1f7 root_text__1a58cmf0", li_strong = "profile_li_strong__1c4gy1f8 root_text__1a58cmf0", name = "profile_name__1c4gy1f9";

// app/components/Profile.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Profile = () => /* @__PURE__ */ jsxDEV14("section", { className: profileSection, children: [
  /* @__PURE__ */ jsxDEV14("div", { id: "profile_mobile", className: profile_kong, children: [
    /* @__PURE__ */ jsxDEV14(
      "img",
      {
        src: "https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_kong_solo.png",
        width: 300,
        height: 500,
        style: {
          objectFit: "contain"
        },
        alt: "\uACF5\uC9C0\uC5F0 \uBCC0\uD638\uC0AC"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Profile.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14("div", { children: [
      /* @__PURE__ */ jsxDEV14("div", { className: profile_title_text, children: [
        "\uBCC0\uD638\uC0AC ",
        /* @__PURE__ */ jsxDEV14("em", { className: profile_title_name, children: "\uACF5 \uC9C0 \uC5F0" }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Profile.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14("ul", { className: ul, children: [
        /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("span", { className: li_span, children: kongJiYeon.education.name }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        kongJiYeon.education.content.map((item) => /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("strong", { className: li_strong, children: item }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 41,
          columnNumber: 19
        }, this) }, item, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this)),
        /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("span", { style: { marginTop: 28 }, className: li_span, children: "\uACBD\uB825" }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        kongJiYeon.experience.content.map((item) => /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("strong", { className: li_strong, children: item }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 54,
          columnNumber: 19
        }, this) }, item, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/Profile.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Profile.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV14("div", { className: profile_jeong, children: [
    /* @__PURE__ */ jsxDEV14(
      "img",
      {
        src: "https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/profile_jeong_solo.png",
        width: 300,
        height: 500,
        style: {
          objectFit: "contain"
        },
        alt: "\uC815\uC9C4\uAD8C \uBCC0\uD638\uC0AC"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Profile.tsx",
        lineNumber: 62,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14("div", { style: { paddingBottom: 40 }, children: [
      /* @__PURE__ */ jsxDEV14("div", { className: profile_title_text, children: [
        "\uBCC0\uD638\uC0AC ",
        /* @__PURE__ */ jsxDEV14("em", { className: name, children: "\uC815 \uC9C4 \uAD8C" }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Profile.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14("ul", { className: ul, children: [
        /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("span", { className: li_span, children: jeongJinKwon.education.name }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        jeongJinKwon.education.content.map((item) => /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("strong", { className: li_strong, children: item }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 82,
          columnNumber: 19
        }, this) }, item, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this)),
        /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("span", { style: { marginTop: 28 }, className: li_span, children: "\uACBD\uB825" }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        jeongJinKwon.experience.content.map((item) => /* @__PURE__ */ jsxDEV14("li", { children: /* @__PURE__ */ jsxDEV14("strong", { className: li_strong, children: item }, void 0, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, item, !1, {
          fileName: "app/components/Profile.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this))
      ] }, void 0, !0, {
        fileName: "app/components/Profile.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Profile.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Profile.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Profile.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this), Profile_default = Profile;

// app/styles/blogs.css.ts
var blogSection = "blogs_blogSection__1twvys70", blog_contents_container = "blogs_blog_contents_container__1twvys71", blog_section_title = "blogs_blog_section_title__1twvys72";
var blogs_container_1 = "blogs_blogs_container_1__1twvys77", blogs_container_2 = "blogs_blogs_container_2__1twvys78", blogs_container_1_img = "blogs_blogs_container_1_img__1twvys79", blogs_container_2_img = "blogs_blogs_container_2_img__1twvys7a", blogs_container_2_title = "blogs_blogs_container_2_title__1twvys7b", blogs_container_2_tag = "blogs_blogs_container_2_tag__1twvys7c";

// app/components/Blogs.tsx
import { useRouteLoaderData as useRouteLoaderData3 } from "@remix-run/react";

// app/assets/photo/woman.jpg
var woman_default = "/build/_assets/woman-3WS3KPTC.jpg";

// app/assets/photo/man.jpg
var man_default = "/build/_assets/man-W2PYQGVZ.jpg";

// app/assets/photo/startup.jpg
var startup_default = "/build/_assets/startup-FKSKQI7U.jpg";

// app/assets/photo/create.jpg
var create_default = "/build/_assets/create-MLESIQB7.jpg";

// app/assets/photo/working.jpg
var working_default = "/build/_assets/working-HPY6IF6Q.jpg";

// app/components/Blogs.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var Blogs = () => {
  let data = useRouteLoaderData3("routes/_index"), posts = data.posts, featuredPost = data.featuredPosts?.[0];
  console.log(featuredPost);
  let css = (content) => `
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
  return /* @__PURE__ */ jsxDEV15("section", { id: "blogs_mobile", className: blogSection, children: [
    /* @__PURE__ */ jsxDEV15("div", { style: { position: "absolute", right: 20, top: 90 } }, void 0, !1, {
      fileName: "app/components/Blogs.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: blog_contents_container, children: [
      /* @__PURE__ */ jsxDEV15("h2", { className: blog_section_title, children: [
        "\uBE14\uB85C\uADF8\uB97C \uD1B5\uD574 \uB354 \uB9CE\uC740",
        /* @__PURE__ */ jsxDEV15("br", {}, void 0, !1, {
          fileName: "app/components/Blogs.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        "\uBC95\uB960 \uC815\uBCF4\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694"
      ] }, void 0, !0, {
        fileName: "app/components/Blogs.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15(
        "div",
        {
          style: {
            display: "flex",
            width: 860,
            gap: 20,
            paddingBottom: 2,
            boxSizing: "border-box",
            margin: "0 auto"
          },
          children: [
            /* @__PURE__ */ jsxDEV15("div", { className: blogs_container_1, children: [
              /* @__PURE__ */ jsxDEV15(
                "img",
                {
                  className: blogs_container_1_img,
                  src: woman_default,
                  alt: featuredPost.contentObj.title
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 80,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15("div", { children: [
                /* @__PURE__ */ jsxDEV15("p", { className: blogs_container_2_tag, style: { marginBottom: 8 }, children: featuredPost.contentObj.tag }, void 0, !1, {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV15("h3", { className: blogs_container_2_title, children: featuredPost.contentObj.title }, void 0, !1, {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 89,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Blogs.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV15("div", { dangerouslySetInnerHTML: { __html: css(featuredPost.html) } }, void 0, !1, {
                fileName: "app/components/Blogs.tsx",
                lineNumber: 93,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Blogs.tsx",
              lineNumber: 79,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV15("div", { className: blogs_container_1, children: [
              /* @__PURE__ */ jsxDEV15(
                "div",
                {
                  className: blogs_container_2,
                  style: { background: root.color2.COLOR_07 },
                  children: posts[3] && /* @__PURE__ */ jsxDEV15(Fragment3, { children: [
                    /* @__PURE__ */ jsxDEV15(
                      "img",
                      {
                        className: blogs_container_2_img,
                        src: man_default,
                        alt: posts[3].contentObj.title
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Blogs.tsx",
                        lineNumber: 102,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV15("p", { className: blogs_container_2_tag, children: posts[3].contentObj.tag }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 107,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV15("h3", { className: blogs_container_2_title, children: posts[3].contentObj.title }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 110,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Blogs.tsx",
                    lineNumber: 101,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15(
                "div",
                {
                  className: blogs_container_2,
                  style: { background: root.color2.COLOR_04 },
                  children: posts[2] && /* @__PURE__ */ jsxDEV15(Fragment3, { children: [
                    /* @__PURE__ */ jsxDEV15(
                      "img",
                      {
                        className: blogs_container_2_img,
                        src: working_default,
                        alt: posts[2].contentObj.title
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Blogs.tsx",
                        lineNumber: 122,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV15("p", { className: blogs_container_2_tag, children: posts[2].contentObj.tag }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 127,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV15("h3", { className: blogs_container_2_title, children: posts[2].contentObj.title }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 130,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Blogs.tsx",
                    lineNumber: 121,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 116,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15(
                "div",
                {
                  className: blogs_container_2,
                  style: { background: root.color2.BLUE_01 },
                  children: posts[4] && /* @__PURE__ */ jsxDEV15(Fragment3, { children: [
                    /* @__PURE__ */ jsxDEV15(
                      "img",
                      {
                        className: blogs_container_2_img,
                        src: startup_default,
                        alt: posts[4].contentObj.title
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Blogs.tsx",
                        lineNumber: 142,
                        columnNumber: 19
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV15("p", { className: blogs_container_2_tag, children: posts[4].contentObj.tag }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 147,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV15("h3", { className: blogs_container_2_title, children: posts[4].contentObj.title }, void 0, !1, {
                      fileName: "app/components/Blogs.tsx",
                      lineNumber: 150,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Blogs.tsx",
                    lineNumber: 141,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 136,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV15("div", { className: blogs_container_2, children: posts[1] && /* @__PURE__ */ jsxDEV15(Fragment3, { children: [
                /* @__PURE__ */ jsxDEV15(
                  "img",
                  {
                    className: blogs_container_2_img,
                    src: create_default,
                    alt: posts[1].contentObj.title
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Blogs.tsx",
                    lineNumber: 159,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV15("p", { className: blogs_container_2_tag, children: posts[1].contentObj.tag }, void 0, !1, {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 164,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV15("h3", { className: blogs_container_2_title, children: posts[1].contentObj.title }, void 0, !1, {
                  fileName: "app/components/Blogs.tsx",
                  lineNumber: 167,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Blogs.tsx",
                lineNumber: 158,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/Blogs.tsx",
                lineNumber: 156,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Blogs.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Blogs.tsx",
          lineNumber: 69,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Blogs.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Blogs.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, Blogs_default = Blogs;

// app/routes/_index.tsx
import { json as json2 } from "@remix-run/node";
import { Fragment as Fragment4, jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var loader3 = async ({ context }) => {
  let rawPosts = await getPosts();
  if (!rawPosts)
    return json2({
      featuredPosts: [],
      posts: [],
      success: []
    });
  let posts = rawPosts.map((item) => {
    let tagRegex = /\[([^\]]+)\]/g, titleRegex = /\]\s*(.*)/g, tag = tagRegex.exec(item.title)?.[1] || "", title = titleRegex.exec(item.title)?.[1] || "";
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
        title: title.trim()
      }
    };
  });
  return {
    featuredPosts: posts.filter(
      (post) => post.tags.map((v2) => v2.name).includes("main_featured")
    ),
    posts: posts.filter(
      (post) => post.tags.map((v2) => v2.name).includes("blog-list")
    ),
    success: posts.filter(
      (post) => post.tags.map((v2) => v2.name).includes("success")
    ),
    images: posts.map((post) => post.feature_image)
  };
};
function Component() {
  return /* @__PURE__ */ jsxDEV16(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV16(
      "script",
      {
        defer: !0,
        async: !0,
        src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=93b6e1f465e1f23c4f13b18572656676&libraries=services,clusterer&autoload=false"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16(
      "script",
      {
        defer: !0,
        async: !0,
        src: "https://cdn.megadata.co.kr/dist/prod/v2/mtm.js?adverId=livertem&device=B"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16(
      "meta",
      {
        name: "ahrefs-site-verification",
        content: "bce11dd1e79258121a73a137633566152ab1d60a8584185afcc2f880797effa5"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16(Main_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Profile_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Success_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Blogs_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(Place_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

// app/routes/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader4
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { Fragment as Fragment5, jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var loader4 = async ({ params }) => {
  let post = await getSinglePost(params.id);
  return json3({ id: params.id, post });
}, SuccessItemPage = () => {
  let { id, post } = useLoaderData3();
  console.log("post", post);
  let css = (content) => `
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
  return /* @__PURE__ */ jsxDEV17(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV17(
      "img",
      {
        className: success_detail_img,
        loading: "lazy",
        src: post.feature_image,
        alt: post.title
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$id.tsx",
        lineNumber: 39,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV17("div", { style: { padding: 40 }, children: [
      /* @__PURE__ */ jsxDEV17(
        "h1",
        {
          className: text,
          style: {
            padding: "0px 16px",
            fontSize: 28,
            fontWeight: 600,
            color: root.color2.COLOR_00,
            marginBottom: 100
          },
          children: post.title
        },
        void 0,
        !1,
        {
          fileName: "app/routes/$id.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17("div", { dangerouslySetInnerHTML: { __html: css(post.html) } }, void 0, !1, {
        fileName: "app/routes/$id.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$id.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$id.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, id_default = SuccessItemPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EB6LI7YH.js", imports: ["/build/_shared/chunk-JXHNNPNR.js", "/build/_shared/chunk-ETDYJQRC.js", "/build/_shared/chunk-VL7VHDU6.js", "/build/_shared/chunk-H36SQQE5.js", "/build/_shared/chunk-DVDY42VR.js", "/build/_shared/chunk-JKUASME7.js", "/build/_shared/chunk-TVZC3ZTX.js", "/build/_shared/chunk-PHVU3ALL.js", "/build/_shared/chunk-N4FG5RPV.js", "/build/_shared/chunk-RODUX5XG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3JHAJMWG.js", imports: ["/build/_shared/chunk-GMCSXESL.js", "/build/_shared/chunk-WQFJ2CRD.js", "/build/_shared/chunk-AOWHKA3M.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/$id": { id: "routes/$id", parentId: "root", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/$id-PZIFKFIN.js", imports: ["/build/_shared/chunk-6U5DHFTL.js", "/build/_shared/chunk-5IFORRK5.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5UB3KVW6.js", imports: ["/build/_shared/chunk-6U5DHFTL.js", "/build/_shared/chunk-5IFORRK5.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/success": { id: "routes/success", parentId: "root", path: "success", index: void 0, caseSensitive: void 0, module: "/build/routes/success-DV5HHSJ4.js", imports: ["/build/_shared/chunk-5IFORRK5.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "44286750", hmr: { runtime: "/build/_shared/chunk-PHVU3ALL.js", timestamp: 1696976816969 }, url: "/build/manifest-44286750.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/success": {
    id: "routes/success",
    parentId: "root",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$id": {
    id: "routes/$id",
    parentId: "root",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
