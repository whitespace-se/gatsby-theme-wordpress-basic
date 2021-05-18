import { H, Section } from "@jfrk/react-heading-levels";
import React from "react";

import { Image, Time, WPBlocks, BoxNavigation } from "../components";
import { useHTMLProcessor } from "../hooks";
import { usePageChildren, usePageSiblings } from "../hooks/boxNavigation";

import * as styles from "./SingleTemplate.module.css";

export default function SingleTemplate({ pageContext }) {
  const {
    contentNode: {
      id,
      title,
      dateGmt,
      featuredImage,
      content,
      contentMedia,
      blocksJSON,
    },
    // isPreview,
  } = pageContext;

  const { processContent } = useHTMLProcessor();

  const pageChildren = usePageChildren(id);
  const pageSiblings = usePageSiblings(id);

  return (
    <article>
      <H>{title}</H>
      <BoxNavigation className={styles.childPages} items={pageChildren} />
      <Section>
        <div>
          Published: <Time date={dateGmt} />
        </div>
        {!!(featuredImage && featuredImage.node) && (
          <Image {...featuredImage.node} />
        )}
        {blocksJSON ? (
          <WPBlocks
            blocks={JSON.parse(blocksJSON)}
            contentMedia={contentMedia}
          />
        ) : (
          processContent(content, { contentMedia })
        )}
        <BoxNavigation
          className={styles.siblingPages}
          title="Relaterat innehåll"
          items={pageSiblings}
        />
      </Section>
    </article>
  );
}
