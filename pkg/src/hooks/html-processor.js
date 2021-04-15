import { useContext } from "react";

import { pageWrapperContext } from "../PageWrapper";

export function useHTMLProcessor() {
  return useContext(pageWrapperContext).htmlProcessor;
}
