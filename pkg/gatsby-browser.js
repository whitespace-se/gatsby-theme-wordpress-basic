import React from "react";
import rehypeParse from "rehype-dom-parse";
import "url-polyfill";

import { SiteLayout } from "./src/components";
import { pageContext } from "./src/hooks";
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

export const wrapPageElement = ({
  element,
  props: { pageContext: context, ...props },
}) => {
  return (
    <pageContext.Provider value={context}>
      <SiteLayout {...props}>{element}</SiteLayout>
    </pageContext.Provider>
  );
};

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
