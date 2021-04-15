import { useState, useCallback, useLayoutEffect } from "react";

function getWidth(el, defaultWidth) {
  if (!el) {
    return defaultWidth;
  }
  return el.clientWidth;
}

function getHeight(el, defaultHeight) {
  if (!el) {
    return defaultHeight;
  }
  return el.clientHeight;
}

export default function useComponentSize(
  ref,
  defaultSize = { width: 0, height: 0 },
) {
  const [width, setWidth] = useState(
    getWidth(ref ? ref.current : {}, defaultSize.width),
  );
  const [height, setHeight] = useState(
    getWidth(ref ? ref.current : {}, defaultSize.height),
  );

  var handleResize = useCallback(() => {
    if (ref.current) {
      setWidth(getWidth(ref.current));
      setHeight(getHeight(ref.current));
    }
  }, [ref]);

  useLayoutEffect(
    function () {
      if (!ref.current) {
        return;
      }

      handleResize();

      if (typeof ResizeObserver === "function") {
        var resizeObserver = new ResizeObserver(function () {
          handleResize();
        });
        resizeObserver.observe(ref.current);

        return () => {
          resizeObserver.disconnect(ref.current);
          resizeObserver = null;
        };
      } else {
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    },
    [ref.current],
  );

  return { width, height };
}
