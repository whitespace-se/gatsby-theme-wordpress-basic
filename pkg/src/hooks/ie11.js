import React from "react";

import { useHasMounted } from "./hasMounted";

export const isIE11 =
  typeof window !== "undefined" &&
  !!window.MSInputMethodContext &&
  !!document.documentMode;

export function useIsIE11() {
  return useHasMounted() && isIE11;
}

export function useIsNotIE11() {
  return useHasMounted() && !isIE11;
}

export function IE11({ children }) {
  if (useHasMounted() && isIE11) {
    return <>{children}</>;
  }
  return null;
}

export function NotIE11({ children }) {
  if (useHasMounted() && !isIE11) {
    return <>{children}</>;
  }
  return null;
}
