import React from "react";

// import { usePageContext } from "../../hooks/page-context";

export function SiteLayout({ children, ...restProps }) {
  // const [pageContext] = usePageContext();
  // const { contentNode: { title } = {} } = pageContext;
  return <div {...restProps}>{children}</div>;
}
