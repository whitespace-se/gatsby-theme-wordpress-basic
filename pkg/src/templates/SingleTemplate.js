import { H, Section } from "@jfrk/react-heading-levels";
import React, { useEffect } from "react";

import { FluidImage } from "../components/Image";
import { Time } from "../components/Time";
import { WPBlocks } from "../components/WPBlocks";
import { usePageContext } from "../hooks/page-context";

export default function SingleTemplate({ pageContext }) {
  const {
    contentNode: { title, dateGmt, featuredImage, contentMedia, blocksJSON },
    // isPreview,
  } = pageContext;

  const [, setPageContext] = usePageContext();
  useEffect(() => {
    setPageContext(pageContext);
  }, [pageContext]);

  return (
    <article>
      <H>{title}</H>
      <Section>
        <div>
          Published: <Time date={dateGmt} />
        </div>
        {!!(featuredImage && featuredImage.node) && (
          <FluidImage {...featuredImage.node} />
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
