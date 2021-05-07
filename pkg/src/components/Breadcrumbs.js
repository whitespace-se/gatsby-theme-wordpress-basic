import { Breadcrumbs as WhitespaceBreadcrumbs } from "@whitespace/components";
import React from "react";

import * as defaultStyles from "./Breadcrumbs.module.css";
import Link from "./Link";

Breadcrumbs.propTypes = WhitespaceBreadcrumbs.propTypes;

export default function Breadcrumbs({
  styles = defaultStyles,
  components,
  ...restProps
}) {
  return (
    <WhitespaceBreadcrumbs
      styles={styles}
      components={{ Link, ...components }}
      {...restProps}
    />
  );
}
