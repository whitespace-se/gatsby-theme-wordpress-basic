import { H, Section } from "@jfrk/react-heading-levels";
import React from "react";

import { Image, Time, WPBlocks } from "../components";

export default function SingleTemplate({ pageContext }) {
  const {
    contentNode: { title, dateGmt, featuredImage, contentMedia, blocksJSON },
    // isPreview,
  } = pageContext;

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
        {!!blocksJSON && (
          <WPBlocks
            blocks={JSON.parse(blocksJSON)}
            contentMedia={contentMedia}
          />
        )}
      </Section>
    </article>
  );
}
