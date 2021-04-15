import { H } from "@jfrk/react-heading-levels";
import cx from "classnames";
import React from "react";

import { Excerpt } from "../Excerpt";
import { Time } from "../Time";

export function CardList({
  className,
  title,
  excerpt,
  date,
  url,
  ...restProps
}) {
  return (
    <article className={cx("c-card c-card--list", className)} {...restProps}>
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
          {excerpt && <Excerpt className="c-card__body" text={excerpt} />}
        </div>
      )}
    </article>
  );
}
