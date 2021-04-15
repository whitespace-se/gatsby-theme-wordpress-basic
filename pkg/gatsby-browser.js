// import { init } from "@jeanfredrik/yett";
import React from "react";
import rehypeParse from "rehype-dom-parse";
import "url-polyfill";

import { PageWrapper } from "./src/PageWrapper";
import createHTMLProcessor from "./src/utils/html";

// import "./src/styles/index.scss";

const htmlProcessor = createHTMLProcessor({ rehypeParse });

// let whitelist = [];
// let blacklist = [];

// if (window.location.host !== "") {
//   // Allow all scripts on same origin
//   whitelist.push(`/*`);
//   whitelist.push(`${window.location.origin}/*`);

//   // Allow all Chrome extensions
//   whitelist.push(`chrome*`);

//   // Allow Rek.ai
//   whitelist.push(`https://static.rek.ai/*`);
// }

// //convert strings to regex and escape special characters
// whitelist = whitelist.length
//   ? whitelist.map(function (domain) {
//       return new RegExp(
//         `^${domain
//           .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
//           .replace(/\*/g, ".*")}$`,
//       );
//     })
//   : null;

// //convert strings to regex and escape special characters
// blacklist = blacklist.length
//   ? blacklist.map(function (domain) {
//       return new RegExp(
//         `^${domain
//           .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
//           .replace(/\*/g, ".*")}$`,
//       );
//     })
//   : null;

// init({
//   blacklist,
//   whitelist,
// });

export const onServiceWorkerUpdateReady = () => {
  console.info(
    "This application has been updated. The page will reload now to serve the latest version.",
  );
  window.location.reload();
};

export function wrapRootElement({ element }) {
  return <PageWrapper context={{ htmlProcessor }}>{element}</PageWrapper>;
}

export function shouldUpdateScroll({
  routerProps: { location: newLocation } = {},
  prevRouterProps: { location: prevLocation } = {},
}) {
  return !(
    newLocation &&
    prevLocation &&
    newLocation.pathname === prevLocation.pathname &&
    newLocation.hash === prevLocation.hash
  );
}
