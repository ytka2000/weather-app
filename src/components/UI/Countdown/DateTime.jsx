import { useMemo } from "react";
import styles from "./countdown.module.css";

const DateTime = ({ value, type }) => {
  const dateTime = useMemo(
    () =>
      type === "day" ? `P${value}D` : `PD${value}${type[0].toUpperCase()}`,
    [type, value]
  );

  return (
    <div className={styles.datetime}>
      <time dateTime={dateTime}>{value}</time>
      <p>{(value === 1 ? type : type + "s").toUpperCase()}</p>
    </div>
  );
};

export default DateTime;
