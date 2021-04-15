import { H } from "@jfrk/react-heading-levels";
import cx from "classnames";
import React from "react";
// import { Link } from "gatsby";

import { Excerpt } from "../Excerpt";
import { FluidImage } from "../Image";
import { Time } from "../Time";

import { CardEventBadge } from "./CardEventBadge";

export function CardIndexEvent({
  className,
  title,
  date,
  url,
  excerpt,
  image,
  repeatableEvent,
  ...restProps
}) {
  return (
    <article
      className={cx(
        "c-card c-card--event c-card--style-default c-card--spacing",
        className,
      )}
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
          <div className="c-card__meta">
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
            {repeatableEvent && (
              <span className="c-card__event-repeatable">
                Återkommande evenemang
              </span>
            )}
          </div>
        </div>
      )}
      {excerpt && <Excerpt className="c-card__body" text={excerpt} />}
      {image && (
        <div className={cx("c-card__image")}>
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
          />
          <div className="c-card__event">
            {date ? <CardEventBadge date={date} /> : null}
          </div>
        </div>
      )}
    </article>
  );
}
