import { useEffect } from "react";
import useInterval from "./useInterval";

const useDebouncedInterval = (callback, delay, value) => {
  const [intervalRef, callbackRef] = useInterval(callback, delay);
  
  useEffect(() => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
  }, [value]);
}

export default useDebouncedInterval;