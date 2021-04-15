import produce, { enableES5 } from "immer";
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import createPersistedState from "use-persisted-state";
import { weAreServer } from "use-ssr";

import { isIE11 } from "./ie11";

enableES5();

export const STORE_NAME = process.env.GATSBY_STORE_NAME || "gatsby/store";

function createIE11Store(key, provider = window.localStorage) {
  const initialValue = provider.getItem(key);
  return (initialState) => {
    const [state, setState] = useState(
      initialValue === null ? initialState : JSON.parse(initialValue),
    );
    const stringifiedState = JSON.stringify(state);
    useEffect(() => {
      provider.setItem(key, stringifiedState);
    }, [stringifiedState]);
    return [state, setState];
  };
}

const useStoreState = weAreServer()
  ? useState
  : isIE11
  ? createIE11Store(STORE_NAME)
  : createPersistedState(STORE_NAME);

export const storeContext = createContext([null, () => {}]);

export function StoreProvider({ initialState, ...props }) {
  const Provider = storeContext.Provider;
  const [state, setState] = useStoreState(initialState);
  return (
    <Provider
      {...props}
      value={[
        state == null ? initialState : state,
        useCallback((updater) => {
          setState((state) =>
            produce(state == null ? initialState : state, updater),
          );
        }, []),
      ]}
    />
  );
}

export function useStore() {
  return useContext(storeContext);
}
