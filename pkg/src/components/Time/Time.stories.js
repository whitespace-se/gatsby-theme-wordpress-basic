import React from "react";

import { Time } from "./Time";

export default {
  title: "Components/Time",
};

export const dateOnly = () => (
  <Time
    date="2020-03-12T14:30:19"
    format={{ year: "numeric", month: "numeric", day: "numeric" }}
  />
);
export const dateAndTime = () => <Time date="2020-03-12T14:30:19" />;

export const timeAgo = () => (
  <Time
    ago={true}
    date="2020-03-12T14:30:19"
    format={{ year: "numeric", month: "numeric", day: "numeric" }}
  />
);
