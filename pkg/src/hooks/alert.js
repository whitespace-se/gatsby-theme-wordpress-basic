import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import useDataApi from "./data-api";
import useTicker from "./ticker";

const ALERT_POLL_INTERVAL = 60 * 1000;

const alertContext = createContext();

export function useAlert() {
  return useContext(alertContext);
}

export function AlertProvider({ ...restProps }) {
  const { Provider } = alertContext;
  let tick = useTicker(ALERT_POLL_INTERVAL);
  let [dismissed, setDismissed] = useState(false);
  let [{ data }, setRequest] = useDataApi();

  useEffect(() => {
    setRequest({ url: "/alert" });
  }, [tick]);

  useEffect(() => {
    setDismissed(false);
  }, [data && JSON.stringify(data)]);

  let dismiss = useCallback(() => {
    setDismissed(true);
  });

  return <Provider value={{ data, dismissed, dismiss }} {...restProps} />;
}
