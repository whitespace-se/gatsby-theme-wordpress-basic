import cx from "classnames";
import React from "react";

import { BEM, useBEM } from "../../hooks/bem";
import { Icon, RoundIcon } from "../Icon";
import { Link } from "../Link";

import "./Button.scss";

export function Button({
  namespace = "button",
  className,
  title,
  link,
  roundIcon = false,
  iconBgColor,
  iconColor,
  iconBeforeName,
  iconAfterName,
  iconBeforeSize,
  iconAfterSize,
  iconClassName,
  iconBefore,
  iconAfter,
  ...restProps
}) {
  const iconComponent = (iconName = "arrow-right-1", iconSize = "12px") => {
    return roundIcon ? (
      <RoundIcon
        name={iconName}
        size={iconSize}
        color={iconColor}
        bgColor={iconBgColor}
        className={cx("u-m-l--200", iconClassName)}
      />
    ) : (
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        className={cx("u-m-l--200", iconClassName)}
      />
    );
  };

  return (
    <BEM namespace={namespace}>
      {() => {
        let bem = useBEM();
        return (
          <Link to={link} className={bem(className)} {...restProps}>
            {iconBefore ? iconComponent(iconBeforeName, iconBeforeSize) : null}
            {title}
            {iconAfter ? iconComponent(iconAfterName, iconAfterSize) : null}
          </Link>
        );
      }}
    </BEM>
  );
}
