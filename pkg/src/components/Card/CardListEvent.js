import { H } from "@jfrk/react-heading-levels";
import cx from "classnames";
import React from "react";

import { Time } from "../Time";

import { CardEventBadge } from "./CardEventBadge";

export function CardListEvent({ className, title, date, url, ...restProps }) {
  return (
    <article className={cx("c-card c-card--list", className)} {...restProps}>
      <div className="c-card__body-wrapper">
        {title && (
          <div className="c-card__title">
            <div className="c-card__event">
              {date ? <CardEventBadge date={date} /> : null}
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
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
