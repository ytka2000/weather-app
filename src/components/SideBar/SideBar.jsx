import { useContext } from "react";
import { TripsContext } from "../../store/TripsContext";
import WeatherToday from "./WeatherToday";
import Countdown from "../UI/Countdown/Countdown";

import styles from "./sidebar.module.css";

const SideBar = () => {
  const { selectedTrip } = useContext(TripsContext);

  return (
    <aside className={styles["sidebar"]}>
      <WeatherToday city={selectedTrip.city} />
      <Countdown
        targetTime={selectedTrip.startDate}
        className={styles.countdown}
      />
    </aside>
  );
};

export default SideBar;
