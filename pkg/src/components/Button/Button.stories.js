/** @jsx jsx */
// import React from "react";
import { css, jsx } from "@emotion/core";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const basicUsage = () => (
  <div
    css={css`
      width: 220px;
    `}
  >
    <Button
      className="footer__block-header-link"
      title="Fler kontaktuppgifter"
      link="/"
      iconAfter={true}
      buttonModifier="primary"
      iconModifier="primary"
    />
  </div>
);
