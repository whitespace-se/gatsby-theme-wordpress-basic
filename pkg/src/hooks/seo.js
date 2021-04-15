import { contextType } from "focus-trap-react";

import { useHTMLProcessor } from "../hooks/htmlProcessor";

import { fallbackImage } from "./image-settings";
import { usePageContext } from "./pageContext";

export default function getOgGraphContent(siteMeta, initialSeo) {
  const context = usePageContext();

  switch (context.postTypeName) {
    case undefined:
      return ogGraphObject(null, null, siteMeta, initialSeo);
    default:
      return ogGraphObject(context, context.postTypeName, siteMeta, initialSeo);
  }
}

export function ogGraphObject(context, postType, siteMeta, initialSeo) {
  const { processPageContent, stripHTML } = useHTMLProcessor();
  let obj = {};

  if (context && context[postType]) {
    const processedContent = processPageContent(context[postType].content);

    let description = context[postType].description
      ? context[postType].description
      : processedContent.preamble
      ? stripHTML(context[postType].content).slice(0, 300)
      : null;

    obj = {
      metaTitle: context[postType].ogGraph.ogTitle
        ? context[postType].ogGraph.ogTitle
        : initialSeo.title
        ? initialSeo.title
        : siteMeta.title,
      metaDescription: context[postType].ogGraph.ogDescription
        ? context[postType].ogGraph.ogDescription
        : description
        ? description
        : siteMeta.description,
      metaImage: context[postType].ogGraph.ogImage
        ? context[postType].ogGraph.ogImage
        : context[postType].featuredImage
        ? context[postType].featuredImage
        : fallbackImage(),
      metaLanguage: context.intl,
      metaUrl: siteMeta.siteUrl + context[postType].url,
    };
  } else {
    obj = {
      metaTitle: initialSeo.title ? initialSeo.title : siteMeta.title,
      metaDescription: initialSeo.description
        ? initialSeo.description
        : siteMeta.description,
      metaImage: fallbackImage(),
      metaUrl: siteMeta.siteUrl,
    };
  }

  return obj;
}
