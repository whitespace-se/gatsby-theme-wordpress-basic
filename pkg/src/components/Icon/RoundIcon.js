import { css } from "@emotion/core";
import React from "react";

import { BEM, useBEM } from "../../hooks/bem";

import { Icon } from "./Icon";

// import "./Icon.scss";

export function RoundIcon({
  namespace = "round-icon",
  className,
  name,
  bgColor = "var(--color-primary)",
  color = "var(--color-text-inverse)",
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
              --icon-bg-color: ${bgColor};
              --icon-size: ${size};
            `}
            {...restProps}
          >
            <Icon name={name} color={null} size={null} />
          </span>
        );
      }}
    </BEM>
  );
}
