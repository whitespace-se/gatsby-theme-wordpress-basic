import React from "react";

import { Icon } from "./Icon";

export default {
  title: "Components/Icon",
  parameters: {
    weight: 99,
  },
};

export function basicUsage() {
  return <Icon name="arrow-right-bold" aria-label="Go right" />;
}
