import { useMemo } from "react";
import Icon from "../UI/Icon/Icon";
import Temp from "../UI/Temp";
import useFetch from "../../hooks/useFetch";
import getApiUrl from "../../utils/getApiUrl";
import getWeekday from "../../utils/getWeekday";

import styles from "./sidebar.module.css";

const initialData = {
  days: [],
};

const WeatherToday = ({ city }) => {
  const apiUrl = useMemo(() => getApiUrl({ city }, true), [city]);

  const {
    data: { days },
    isLoading,
  } = useFetch(apiUrl, undefined, initialData);

  const weekDay = useMemo(() => getWeekday(days[0]?.datetime), [days]);

  if (!days.length || isLoading) {
    return null;
  }

  return (
    <div className={styles["weather-today"]}>
      <h2>{weekDay}</h2>
      <p className={styles["weather-today-row"]}>
        <Icon
          iconName={days[0].icon}
          className={styles["weather-today-icon"]}
        />
        <Temp
          temp={days[0].temp}
          short={false}
          className={styles["weather-today-temp"]}
        />
      </p>
      <h4 className={styles["weather-today-city"]}>{city}</h4>
    </div>
  );
};

export default WeatherToday;
