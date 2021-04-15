import React, { useRef } from "react";

import useComponentSize from "./component-size";

export default {
  title: "Dev/Hooks/Component Size",
  parameters: {
    weight: 99,
  },
};

export const basicUsage = () => {
  let ref = useRef(null);
  let { width, height } = useComponentSize(ref);

  return (
    <div
      style={{
        width: "50vw",
        height: "50vh",
        backgroundColor: "#0004",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
      ref={ref}
    >
      {`Width: ${width} px`}
      <br />
      {`Height: ${height} px`}
    </div>
  );
};
