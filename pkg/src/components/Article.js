import { H, Section } from "@jfrk/react-heading-levels";
import withComponentDefaults from "@whitespace/components/dist/withComponentDefaults";

import clsx from "clsx";
import React from "react";

import {
  Image,
  Time,
  WPBlocks,
  BoxNavigation,
  TextContent,
} from "../components";
import { utilities, layout } from "../foundation";

import * as defaultStyles from "./Article.module.css";

export default withComponentDefaults(Article);

function Article({
  className,
  styles = defaultStyles,
  featuredImage,
  isFullWidthPage,
  hideTitle,
  title,
  pageChildren,
  pageSiblings,
  publishedDate,
  blocksJSON,
  contentMedia,
  preamble,
  content,
  lastUpdated,
  managedBy,
  taxonomies,
  children,
  ...restProps
}) {
  return (
    <article
      className={clsx(layout.component, layout.componentWidthFull, className)}
      {...restProps}
    >
      {featuredImage && (
        <Image className={clsx(styles.featuredImage)} {...featuredImage} />
      )}
      <div
        className={clsx(
          layout.component,
          isFullWidthPage
            ? layout.componentWidthFull
            : layout.componentWidthNarrow,
        )}
      >
        <H className={clsx(hideTitle && utilities.visuallyHidden)}>{title}</H>
        <BoxNavigation className={styles.childPages} items={pageChildren} />
        <Section>
          {publishedDate && (
            <div
              className={clsx(styles.publishedDate)}
              aria-label={"Publicerad"}
            >
              <Time
                date={publishedDate}
                format={{
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }}
              />
            </div>
          )}
          <TextContent>
            {blocksJSON ? (
              <>
                <WPBlocks
                  blocks={JSON.parse(blocksJSON)}
                  contentMedia={contentMedia}
                />
              </>
            ) : (
              <>
                {preamble && (
                  <div className={clsx(styles.preamble)}>{preamble}</div>
                )}
                {content}
              </>
            )}
          </TextContent>
          <footer>
            <div className={styles.meta}>
              {lastUpdated && (
                <span className={styles.metaTime}>
                  {"Uppdaterad "}
                  <Time
                    date={lastUpdated}
                    format={{
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }}
                  />
                </span>
              )}
              {managedBy && (
                <span className={styles.metaAuthor}>
                  {"Sidansvarig: "} {managedBy}
                </span>
              )}
              {taxonomies && (
                <span className={styles.metaTaxonomies}>
                  {"Kategorier: "}{" "}
                  {taxonomies.map((taxonomy) => taxonomy.name).join(", ")}
                </span>
              )}
            </div>
          </footer>
          <BoxNavigation
            className={styles.siblingPages}
            title="Relaterat innehåll"
            items={pageSiblings}
          />
          {children}
        </Section>
      </div>
    </article>
  );
}
