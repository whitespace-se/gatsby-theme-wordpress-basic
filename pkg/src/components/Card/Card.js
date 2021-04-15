// import { Link } from "gatsby";
import { H } from "@jfrk/react-heading-levels";
import React from "react";

import { BEM, useBEM } from "../../hooks/bem";
import { Excerpt } from "../Excerpt";
import { RoundIcon } from "../Icon";
import { FluidImage } from "../Image";
import { Link } from "../Link";
import { Time } from "../Time";

import "./Card.scss";

export function Card({
  namespace = "card",
  className,
  title,
  date,
  url,
  excerpt,
  content,
  image,
  category,
  categoryIconName,
  ...restProps
}) {
  return (
    <BEM namespace={namespace}>
      {() => {
        let bem = useBEM();
        return (
          <article className={bem("--spacing", className)} {...restProps}>
            <div className={bem("__content")}>
              {title && (
                <div className={bem("__title")}>
                  <div>
                    <H className={bem("__title-heading")}>
                      {url ? (
                        <Link to={url} className={bem("__title-heading-link")}>
                          {title}
                        </Link>
                      ) : (
                        title
                      )}
                    </H>
                  </div>
                  {date && (
                    <Time
                      className={bem("__date")}
                      date={date}
                      format={{
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }}
                    />
                  )}
                  {category && (
                    <div className={bem("__category")}>
                      <RoundIcon
                        name={categoryIconName}
                        size="1rem"
                        color="var(--color-light)"
                        bgColor="var(--color-tertiary)"
                      />
                      {category}
                    </div>
                  )}
                </div>
              )}
              {excerpt && <Excerpt className={bem("__body")} text={excerpt} />}
              {content && (
                <div className={bem("__body c-article")}>{content}</div>
              )}
            </div>
            {image && (
              <FluidImage
                base64={image.base64}
                src={image.src}
                srcSet={image.srcSet}
                srcWebp={image.srcWebp}
                srcSetWebp={image.srcSetWebp}
                aspectRatio={image.aspectRatio}
                width={image.width}
                height={image.height}
                alt={image.altText}
                className={bem("__image")}
              />
            )}
          </article>
        );
      }}
    </BEM>
  );
}
