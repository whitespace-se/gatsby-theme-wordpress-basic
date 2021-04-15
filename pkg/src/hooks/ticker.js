import { useState, useRef, useEffect } from "react";

export default function useTicker(duration) {
  const [tick, setTick] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTick((tick) => tick + 1);
    }, duration);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return tick;
}
