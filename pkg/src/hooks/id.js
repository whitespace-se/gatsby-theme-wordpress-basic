import { useID as useIDInBrowser } from "@jfrk/react-id";
import useSSR from "use-ssr";

export default function useID() {
  const { isBrowser } = useSSR();
  if (isBrowser) {
    return useIDInBrowser();
  } else {
    return (id) => id;
  }
}
