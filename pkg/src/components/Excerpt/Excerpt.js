import React from "react";

export function Excerpt({ className, text, ...restProps }) {
  let textToDisplay = text.length > 153 ? text.slice(0, 150) + "…" : text;

  return (
    <div className={className} {...restProps}>
      <p>{textToDisplay}</p>
    </div>
  );
}
