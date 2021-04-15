import { css } from "@emotion/core";
import React from "react";

import { Takeover } from "../Takeover";

export function ErrorScreen({ error, label }) {
  return (
    <>
      <div>
        <Takeover>
          <span css={css``}>{label}</span>
          <span
            css={css`
              margin-top: 1em;
              background-color: var(--color-error);
              color: var(--color-light);
              border-radius: 0.5rem;
              padding: 1rem;
            `}
          >
            {error.message}
          </span>
        </Takeover>
      </div>
    </>
  );
}
