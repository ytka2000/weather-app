import useCountdown from "../../../hooks/useCountdown";
import DateTime from "./DateTime";

import styles from "./countdown.module.css";

const Countdown = ({ targetTime, className }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetTime);

  return (
    <div className={`${styles.countdown} ${className}`}>
      <DateTime value={days} type="day" />
      <DateTime value={hours} type="hour" />
      <DateTime value={minutes} type="minute" />
      <DateTime value={seconds} type="second" />
    </div>
  );
};

export default Countdown;
