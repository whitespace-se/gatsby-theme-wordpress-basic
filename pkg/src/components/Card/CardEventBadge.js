import React from "react";

export function CardEventBadge({ date, ...restProps }) {
  return (
    <div className="c-card__event-badge" role="presentation" {...restProps}>
      <span className="c-card__event-badge-day">
        {date.toLocaleString("sv-SE", {
          day: "numeric",
        })}
      </span>
      <span className="c-card__event-badge-month">
        {date.toLocaleString("sv-SE", {
          month: "short",
        })}
      </span>
    </div>
  );
}
