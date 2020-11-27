import { useEffect } from "react";
import useInterval from "./useInterval";

const useDebouncedInterval = (callback, delay, value) => {
  const [intervalRef, callbackRef] = useInterval(callback, delay);
  
  useEffect(() => {
    console.log('clear interval');
    window.clearInterval(intervalRef.current);
    console.log('restart interval');
    intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
  }, [value]);
}

export default useDebouncedInterval;