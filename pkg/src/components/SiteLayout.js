import React from "react";

export default function SiteLayout({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}
