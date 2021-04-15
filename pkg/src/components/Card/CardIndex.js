// import { Link } from "gatsby";
import { H } from "@jfrk/react-heading-levels";
import cx from "classnames";
import React from "react";

import { Excerpt } from "../Excerpt";
import { FluidImage } from "../Image";
import { Time } from "../Time";

export function CardIndex({
  className,
  title,
  date,
  url,
  excerpt,
  content,
  image,
  ...restProps
}) {
  return (
    <article
      className={cx("c-card c-card--style-default c-card--spacing", className)}
      {...restProps}
    >
      {title && (
        <div className="c-card__title">
          <div>
            <H className="c-card__title-heading">
              {url ? (
                <a href={url} className="c-card__title-heading-link">
                  {title}
                </a>
              ) : (
                title
              )}
            </H>
          </div>
          {date && (
            <Time
              className="c-card__date"
              date={date}
              format={{
                month: "long",
                weekday: "long",
                day: "numeric",
              }}
            />
          )}
        </div>
      )}
      {excerpt && <Excerpt className="c-card__body" text={excerpt} />}
      {content && <div className="c-card__body c-article">{content}</div>}
      {image && (
        <FluidImage
          base64={image.base64}
          src={image.src}
          srcSet={image.srcSet}
          srcWebp={image.srcWebp}
          srcSetWebp={image.srcSetWebp}
          width={image.width}
          height={image.height}
          aspectRatio={640 / 360}
          alt={image.altText}
          className={cx("c-card__image")}
        />
      )}
    </article>
  );
}
