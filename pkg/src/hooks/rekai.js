import pickBy from "lodash/pickBy";
import React, { useEffect, useState, useContext, createContext } from "react";
import useSSR from "use-ssr";

const rekaiContext = createContext({ ready: false, defaultOverwrite: {} });

export function RekaiProvider({ scriptSrc, defaultOverwrite, ...props }) {
  const Provider = rekaiContext.Provider;
  const [state, setState] = useState({ ready: false });
  const { isBrowser } = useSSR();
  useEffect(() => {
    if (!isBrowser || !scriptSrc) {
      return;
    }
    const script = document.createElement("script");
    script.onload = function () {
      setState({ ready: true });
    };
    script.src = scriptSrc;
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);
  return (
    <Provider
      {...props}
      value={{
        ...state,
        defaultOverwrite,
        rekai: isBrowser ? window.__rekai : null,
      }}
    />
  );
}

export function RekaiTrack({ send = false }) {
  if (process.env.GATSBY_REKAI_SCRIPT_SRC === undefined) {
    return null;
  }

  const { ready, rekai } = useContext(rekaiContext);
  useEffect(() => {
    if (ready && rekai) {
      if (send) {
        window.requestAnimationFrame(() => {
          rekai.sendView();
        });
      } else {
        window.requestAnimationFrame(() => {
          rekai.eventAddToSessionPath(rekai.customer);
        });
      }
    }
  }, [ready]);
  return null;
}

export function useRekai(overwrite = {}) {
  const { ready, defaultOverwrite, rekai } = useContext(rekaiContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!ready) {
      return;
    }
    const { nrofhits } = overwrite;
    let options = {
      customer: rekai.customer,
      overwrite: {
        ...overwrite,
        ...pickBy(defaultOverwrite, (value) => value != null),
      },
    };
    rekai.predict(options, (data) => {
      if (data.predictions) {
        data.predictions = data.predictions.filter(
          (prediction) => prediction.url != window.location.pathname,
        );
        if (nrofhits != null) {
          data.predictions = data.predictions.slice(0, nrofhits);
        }
      }
      setData(data);
    });
  }, [ready]);
  return { ...data, isLoading: data == null };
}

export default useRekai;
