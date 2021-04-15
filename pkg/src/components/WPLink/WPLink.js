import React from "react";

import { Link } from "../Link";

export function WPLink({ href, ...restProps }) {
  return <Link to={href} {...restProps} />;
}
