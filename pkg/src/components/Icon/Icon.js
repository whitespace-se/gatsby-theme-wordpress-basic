import { css } from "@emotion/core";
import React from "react";

import { BEM, useBEM } from "../../hooks/bem";

import "./Icon.scss";

export function Icon({
  namespace = "icon",
  className,
  name,
  color = "currentColor",
  size,
  ...restProps
}) {
  return (
    <BEM namespace={namespace}>
      {() => {
        let bem = useBEM();
        return (
          <span
            className={bem(className)}
            css={css`
              --icon-color: ${color};
              --icon-size: ${size};
              mask-image: ${name ? `url("/icons/${name}.svg")` : "none"};
            `}
            {...restProps}
          />
        );
      }}
    </BEM>
  );
}
