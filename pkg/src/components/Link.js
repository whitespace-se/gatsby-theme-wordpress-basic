import { useLocation } from "@gatsbyjs/reach-router";
import clsx from "clsx";
import { Link as GatsbyLink } from "gatsby";
import QueryString from "query-string";
import React from "react";

import { normalizeWordpressUrl } from "../utils/url";

function isExternalUrl(url) {
  try {
    let { hostname } = new URL(url);
    return !!hostname;
  } catch {
    return false;
  }
}

function isFragmentUrl(url) {
  return url.startsWith("#");
}

function isMailtoUrl(url) {
  return url.startsWith("mailto:");
}

export default function Link({
  to,
  disabled,
  queryParams,
  className,
  children,
  fallbackElement: FallbackElement,
  rel,
  target,
  ...restProps
}) {
  const location = useLocation();

  if (disabled) {
    return (
      <a
        href="#"
        className={cx("link--disabled", className)}
        aria-disabled={true}
        tabIndex={-1}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  if (!to && queryParams) {
    let currentParams = QueryString.parse(location.search);
    to = `${location.pathname}?${QueryString.stringify({
      ...currentParams,
      ...queryParams,
    })}`;
  }

  /**
   * Add rel="noopener noreferrer" to links with target="_blank"
   */
  if (target === "_blank") {
    rel = [
      ...new Set([...(rel ? rel.split(/\s+/g) : []), "noopener", "noreferrer"]),
    ].join(" ");
  }

  if (to && typeof to !== "string") {
    console.warn("<Link> component: `to` is not a string.", to);
    to = null;
  }

  if (!to) {
    if (FallbackElement) {
      return (
        <FallbackElement className={clsx(className)} {...restProps}>
          {children}
        </FallbackElement>
      );
    }
    return <>{children}</>;
  }

  const linkProps = {
    rel,
    target,
  };

  if (isMailtoUrl(to)) {
    return (
      <a
        href={to}
        className={clsx("link--mail", className)}
        {...linkProps}
        {...restProps}
      >
        {children}
      </a>
    );
  }
  if (isFragmentUrl(to)) {
    return (
      <a
        href={to}
        className={clsx("link--internal", className)}
        {...linkProps}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  to = normalizeWordpressUrl(to);

  if (isExternalUrl(to)) {
    return (
      <a
        href={to}
        className={clsx("link--external", className)}
        {...linkProps}
        {...restProps}
      >
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink
      to={to}
      className={clsx("link--internal", className)}
      {...linkProps}
      {...restProps}
    >
      {children}
    </GatsbyLink>
  );
}
