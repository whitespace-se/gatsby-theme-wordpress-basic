import React, { useEffect } from "react";

import { useHasMounted } from "./hasMounted";

let initialized = false;

function initMatomo() {
  if (initialized) {
    return;
  }
  window._paq = window._paq || [];
  window._paq.push([
    "setTrackerUrl",
    `${process.env.GATSBY_MATOMO_URL}/piwik.php`,
  ]);
  window._paq.push(["setSiteId", process.env.GATSBY_MATOMO_SITE_ID]);
  window._paq.push(["enableHeartBeatTimer"]);
  window.start = new Date();

  (function () {
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.type = "text/javascript";
    g.async = true;
    g.defer = true;
    g.src = `${process.env.GATSBY_MATOMO_URL}/piwik.js`;
    s.parentNode.insertBefore(g, s);
    // g.onload = () => {
    //   console.log("MATOMO LOADED");
    // };
  })();

  initialized = true;
}

export function MatomoScript() {
  let hasMounted = useHasMounted();
  useEffect(() => {
    if (hasMounted) {
      initMatomo();
    }
  }, [hasMounted]);
  return (
    <noscript>
      <img
        src={`${process.env.GATSBY_MATOMO_URL}/piwik.php?idsite=${process.env.GATSBY_MATOMO_SITE_ID}&rec=1&url=${process.env.GATSBY_SITE_URL}`}
        style={{ border: "0" }}
        alt=""
        aria-hidden="true"
      />
    </noscript>
  );
}
