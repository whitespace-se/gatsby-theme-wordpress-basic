import React from "react";

import Link from "./Link";

export default function WPLink({ href, ...restProps }) {
  return <Link to={href} {...restProps} />;
}
