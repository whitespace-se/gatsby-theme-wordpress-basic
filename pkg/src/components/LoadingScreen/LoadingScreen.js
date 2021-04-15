import { css } from "@emotion/core";
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { Takeover } from "../Takeover";

export function LoadingScreen({ label }) {
  return (
    <>
      <div>
        <Takeover>
          <span
            css={css`
              opacity: 0.25;
            `}
          >
            <PulseLoader size={20} />
          </span>
          <span
            css={css`
              opacity: 0.75;
              margin-top: 1em;
            `}
          >
            {label}
          </span>
        </Takeover>
      </div>
    </>
  );
}
