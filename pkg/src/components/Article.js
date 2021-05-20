import { H, Section } from "@jfrk/react-heading-levels";
import withComponentDefaults from "@whitespace/components/dist/withComponentDefaults";

import clsx from "clsx";
import React from "react";

import {
  Image,
  Time,
  WPBlocks,
  BoxNavigation,
  TextContent
} from "../components";


import * as defaultStyles from "./Article.module.css";
import { utilities, layout } from ".";


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
    <article className={clsx(layout.component, layout.componentWidthFull)} {...restProps}>
        {featuredImage && (
          <Image className={clsx(defaultStyles.featuredImage)} {...featuredImage}/>
        )}
        <div className={clsx(layout.component, isFullWidthPage ? layout.componentWidthFull : layout.componentWidthNarrow)}>
          <H className={clsx(hideTitle && utilities.visuallyHidden)}>{title}</H>
          <BoxNavigation className={defaultStyles.childPages} items={pageChildren} />
          <Section>
            {publishedDate && (
              <div className={clsx(defaultStyles.publishedDate)} aria-label={"Publicerad"}>
                <Time
                  date={publishedDate}
                  format={{
                    day: "numeric",
                    month: "long",
                    year: "numeric"
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
                  {preamble && <div className={clsx(defaultStyles.preamble)}>{preamble}</div>}
                  {content}
                </>
                )}
            </TextContent>
            <footer>
              <div className={defaultStyles.meta}>
                {lastUpdated && (
                  <span className={defaultStyles.metaTime}>
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
                {managedBy && ( <span className={defaultStyles.metaAuthor}>{"Sidansvarig: "} {managedBy}</span> )}
              {taxonomies && (<span className={defaultStyles.metaTaxonomies}>{"Kategorier: "} { taxonomies.map((taxonomy) => taxonomy.name).join(', ')}</span>)}
              </div>
            </footer>
            <BoxNavigation className={defaultStyles.siblingPages} title="Relaterat innehåll" items={pageSiblings} />
            {children}
          </Section>
        </div>
      </article>

  )
}
