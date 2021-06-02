import { useEffect } from "react";
import useInterval from "./useInterval";

const useDebouncedInterval = (callback, delay, value) => {
  const [intervalRef, callbackRef] = useInterval(callback, delay);
  
  useEffect(() => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
  }, [intervalRef, callbackRef, value, delay]);
}

export default useDebouncedInterval;