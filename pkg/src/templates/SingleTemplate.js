import { H, Section } from "@jfrk/react-heading-levels";
import React from "react";

import { Image, Time, WPBlocks } from "../components";
import { useHTMLProcessor } from "../hooks";

export default function SingleTemplate({ pageContext }) {
  const {
    contentNode: {
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

  return (
    <article>
      <H>{title}</H>
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
      </Section>
    </article>
  );
}
