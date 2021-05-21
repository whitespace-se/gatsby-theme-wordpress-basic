import React from "react";

import { Article } from "../components";
import {
  useHTMLProcessor,
  usePageChildren,
  usePageSiblings,
  useIsFullWidthPage,
  useIsFrontPage,
} from "../hooks";

export default function SingleTemplate({ pageContext }) {
  const {
    contentNode: {
      id,
      title,
      dateGmt,
      modifiedGmt,
      featuredImage,
      content: contentHTML,
      contentMedia,
      blocksJSON,
      contentArea,
      contentType: {
        node: { name: postType },
      },
      managedBy: { managedBy },
      tags: { nodes: tags } = {},
    },
    // isPreview,
  } = pageContext;

  const { processPageContent } = useHTMLProcessor();
  let { preamble, content } = processPageContent(contentHTML, { contentMedia });

  const articleProps = {
    featuredImage: !!(featuredImage && featuredImage.node) && {
      ...featuredImage.node,
      width: "1025",
      height: "288",
    },
    pageChildren: usePageChildren(id),
    pageSiblings: usePageSiblings(id),
    isFullWidthPage: useIsFullWidthPage(id, postType),
    hideTitle: useIsFrontPage(id),
    title: title,
    publishedDate: postType == "post" && dateGmt,
    blocksJSON: blocksJSON,
    contentMedia: contentMedia,
    preamble: !!preamble && preamble,
    content: content,
    lastUpdated: !useIsFrontPage(id) && modifiedGmt,
    managedBy: !useIsFrontPage(id) && managedBy,
    taxonomies: postType == "post" && tags.length ? [...tags] : false,
  };

  return <Article {...articleProps} />;
}
