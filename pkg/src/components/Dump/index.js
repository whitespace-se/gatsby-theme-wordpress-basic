import React from "react";

export function Dump({ children, ...restProps }) {
  return (
    <pre {...restProps}>
      <code>{JSON.stringify(children, null, 2)}</code>
    </pre>
  );
}
