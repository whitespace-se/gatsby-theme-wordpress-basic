import React, { useState, useContext, createContext } from "react";

export const pageContext = createContext([{}, () => {}]);

export function PageContextProvider({ ...restProps }) {
  const { Provider } = pageContext;
  const [context, setContext] = useState({});
  return <Provider {...restProps} value={[context, setContext]} />;
}

export function usePageContext() {
  return useContext(pageContext);
}
