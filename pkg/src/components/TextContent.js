import clsx from "clsx";
import React from "react";

import * as defaultStyles from "./TextContent.module.css";

export default function TextContent({
  as: Component = "div",
  children,
  className,
  style = defaultStyles,
  ...restProps
}) {
  return (
    <Component className={clsx(style.component, className)} {...restProps}>
      {children}
    </Component>
  );
}
