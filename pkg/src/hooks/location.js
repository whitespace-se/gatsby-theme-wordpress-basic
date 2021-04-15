import { globalHistory } from "@reach/router";
import { useState, useEffect } from "react";

export default function useLocation() {
  const initialState = globalHistory.location;
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const removeListener = globalHistory.listen((params) => {
      const { location } = params;
      const newState = location;
      setState(newState);
    });
    return () => {
      removeListener();
    };
  }, []);
  return state;
}
