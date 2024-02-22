import { useEffect, useState } from "react";

import getTimePeriod from "../utils/getTimePeriod";

const useCountdown = (targetTime) => {
  const countdownDate =
    new Date(targetTime).getTime() +
    new Date(targetTime).getTimezoneOffset() * 60 * 1000;

  const diff = countdownDate - new Date().getTime();

  const [countdown, setCountdown] = useState(diff > 0 ? diff : 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = countdownDate - new Date().getTime();
      if (newCountdown <= 0) {
        clearInterval(intervalId);
        setCountdown(0);
      } else {
        setCountdown(countdownDate - new Date().getTime());
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  return getTimePeriod(countdown);
};

export default useCountdown;
