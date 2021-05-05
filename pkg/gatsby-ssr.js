import React from "react";
import rehypeParse from "rehype-parse";

import { SiteLayout } from "./src/components";
import { pageContext } from "./src/hooks";
import { PageWrapper } from "./src/PageWrapper";
import createHTMLProcessor from "./src/utils/html";

import "./src/index.css";

const htmlProcessor = createHTMLProcessor({ rehypeParse });

export const wrapRootElement = ({ element }) => {
  return <PageWrapper context={{ htmlProcessor }}>{element}</PageWrapper>;
};

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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.type === y.type) {
      return 0;
    }
    if (x.type === "style") {
      return 1;
    }
    if (y.type === "style") {
      return -1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
