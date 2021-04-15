import React from "react";
import useSSR from "use-ssr";

export default {
  title: "Dev/Hooks/SSR",
  parameters: {
    weight: 99,
  },
};

export const basicUsage = () => {
  var { isBrowser, isServer, isNative } = useSSR();

  /*
   * In your browser's chrome devtools console you should see
   * > IS BROWSER: 👍
   * > IS SERVER: 👎
   *
   * AND, in your terminal where your server is running you should see
   * > IS BROWSER: 👎
   * > IS SERVER: 👍
   */
  console.log("IS BROWSER: ", isBrowser ? "👍" : "👎");
  console.log("IS SERVER: ", isServer ? "👍" : "👎");
  console.log("IS NATIVE: ", isNative ? "👍" : "👎");
  return (
    <>
      Is in browser? {isBrowser ? "👍" : "👎"}
      <br />
      Is on server? {isServer ? "👍" : "👎"}
      <br />
      Is react native? {isNative ? "👍" : "👎"}
    </>
  );
};
