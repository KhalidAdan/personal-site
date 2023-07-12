import { useEffect, useState } from "react";

const useFocusTimer = (initialMinutes: number) => {
  const [seconds, setSeconds] = useState<number>(initialMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(initialMinutes * 60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          clearInterval(interval!);
          reset();
          return;
        }
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!);
    }
    return () => (interval ? clearInterval(interval) : undefined);
  }, [isActive, seconds]);

  return {
    seconds,
    isActive,
    toggle,
    reset,
  };
};

export default useFocusTimer;
