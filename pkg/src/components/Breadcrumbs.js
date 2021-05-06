import { Breadcrumbs as WhitespaceBreadcrumbs } from "@whitespace/components";
import React from "react";

import Link from "./Link";

Breadcrumbs.propTypes = WhitespaceBreadcrumbs.propTypes;

export default function Breadcrumbs({ components, ...restProps }) {
  return (
    <WhitespaceBreadcrumbs
      components={{ Link, ...components }}
      {...restProps}
    />
  );
}
