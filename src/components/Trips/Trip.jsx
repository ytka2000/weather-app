import { useContext } from "react";
import { TripsContext } from "../../store/TripsContext";
import useImage from "../../hooks/useImage";

import formatDate from "../../utils/formatDate";

import styles from "./trips.module.css";

const Trip = ({ trip }) => {
  const { selectedTrip, setSelectedTrip } = useContext(TripsContext);
  const { image } = useImage(trip.city);

  return (
    <li
      className={styles["trip-card"]}
      onClick={() => setSelectedTrip(trip)}
      data-selected={trip.id === selectedTrip.id}
    >
      <img src={image} alt={trip.city + " picture"} />
      <div className={styles["trip-card-description"]}>
        <p className={styles["trip-card-city"]}>{trip.city}</p>
        <p className={styles["trip-card-period"]}>
          {`${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}`}
        </p>
      </div>
    </li>
  );
};

export default Trip;
