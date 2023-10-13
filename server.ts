// import { createRequestHandler } from "@remix-run/express";
// import express from "express";

// // notice that the result of `remix build` is "just a module"
// import * as build from "./build/index.js";

// const app = express();
// app.use(express.static("public"));

// // and your app is "just a request handler"
// app.all(
//   "*",
//   createRequestHandler({
//     build,
//     getLoadContext: (context) => ({ env: context.env }),
//     mode: build.mode,
//   })
// );

// app.listen(3000, () => {
//   console.log("App listening on http://localhost:3000");
// });

import { createRequestHandler } from "@remix-run/architect";
import * as build from "@remix-run/dev/server-build";

// if (process.env.NODE_ENV !== "production") {
//   const miscHandlers = [
//     rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, (req) =>
//       req.passthrough(),
//     ),
//   ];

//   const server = setupServer(...miscHandlers);

//   server.listen({ onUnhandledRequest: "bypass" });

//   process.once("SIGINT", () => server.close());
//   process.once("SIGTERM", () => server.close());
// }

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
