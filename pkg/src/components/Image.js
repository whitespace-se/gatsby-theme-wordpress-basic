import { useComponentSize } from "@whitespace/gatsby-hooks";
import clsx from "clsx";
import Img from "gatsby-image";
import React, { useRef } from "react";

import * as defaultStyles from "./Image.module.css";
import Link from "./Link";

export default function Image({
  styles = defaultStyles,
  WrapperComponent = null,
  src,
  srcSet,
  srcWebp,
  srcSetWebp,
  width,
  height,
  base64,
  aspectRatio,
  alt,
  caption,
  linkTo,
  estimatedWidth = 320,
  captionProps: { className: captionClassName, ...captionRestProps } = {},
  imgProps: { className: imgClassName, ...imgRestProps } = {},
  linkProps: { className: linkClassName, ...linkRestProps } = {},
  className,
  ...restProps
}) {
  let ref = useRef(null);

  let { width: componentWidth } = useComponentSize(ref, {
    width: estimatedWidth,
    height: (estimatedWidth / 16) * 9,
  });

  if (WrapperComponent == null) {
    WrapperComponent = caption ? "figure" : "div";
  }

  return (
    <WrapperComponent
      className={clsx(styles.component, className)}
      ref={ref}
      {...restProps}
    >
      <Link
        to={linkTo}
        className={clsx(styles.link, linkClassName)}
        {...linkRestProps}
      >
        <Img
          fluid={{
            src,
            srcSet,
            srcWebp,
            srcSetWebp,
            sizes: `${componentWidth}px`,
            aspectRatio: aspectRatio || width / height,
            width,
            height,
            base64,
            alt,
          }}
          alt={alt}
          className={clsx(styles.img, imgClassName)}
          {...imgRestProps}
        />
      </Link>
      {!!caption && (
        <figcaption
          className={clsx(styles.caption, captionClassName)}
          {...captionRestProps}
        >
          {caption}
        </figcaption>
      )}
    </WrapperComponent>
  );
}
