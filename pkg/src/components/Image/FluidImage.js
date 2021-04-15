import Img from "gatsby-image";
import React, { useRef } from "react";

import { BEM, useBEM } from "../../hooks/bem";
import useComponentSize from "../../hooks/component-size";
import { Link } from "../Link";

import "./Image.scss";

export function FluidImage({
  namespace = "image",
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
  credit,
  linkTo,
  estimatedWidth = 320,
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
    <BEM namespace={namespace}>
      {() => {
        let bem = useBEM();
        return (
          <WrapperComponent className={bem(className)} ref={ref} {...restProps}>
            <Link
              to={linkTo}
              className={bem("__link", linkClassName)}
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
                className={bem("__image", imgClassName)}
                {...imgRestProps}
              />
            </Link>
            {caption || credit ? (
              <figcaption className={bem("__caption")}>
                {caption && <>{caption}</>}
                {credit && (
                  <p className={bem("__photographer")}>
                    {"Fotograf: " + credit}
                  </p>
                )}
              </figcaption>
            ) : null}
          </WrapperComponent>
        );
      }}
    </BEM>
  );
}
