import { useContext } from "react";
import { TripsContext } from "../../store/TripsContext";
import Icon from "../UI/Icon";
import Temp from "../UI/Temp";

import useFetch from "../../hooks/useFetch";
import getApiUrl from "../../utils/getApiUrl";
import getWeekday from "../../utils/getWeekday";
import styles from "./forecast.module.css";

const initialData = {
  days: [],
};

const Forecast = () => {
  const { selectedTrip } = useContext(TripsContext);

  const { data } = useFetch(getApiUrl(selectedTrip), undefined, initialData);

  return (
    <section>
      <h3>Week</h3>
      <ul className={styles["forecast-items"]}>
        {data.days.map(({ datetime, tempmax, tempmin, icon: iconName }) => (
          <li key={datetime}>
            <p className={styles.weekday}>{getWeekday(datetime)}</p>
            <Icon iconName={iconName} />
            <p>
              {<Temp temp={tempmax} />}/{<Temp temp={tempmin} />}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Forecast;
