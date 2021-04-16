import React from "react";
import rehypeParse from "rehype-dom-parse";
import "url-polyfill";

import { PageWrapper } from "./src/PageWrapper";
import createHTMLProcessor from "./src/utils/html";

import "./src/index.css";

const htmlProcessor = createHTMLProcessor({ rehypeParse });

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
