import { useCallback, useContext, useTransition } from "react";
import { TripsContext } from "../../store/TripsContext";
import useImage from "../../hooks/useImage";

import formatDate from "../../utils/formatDate";

import styles from "./trips.module.css";

const Trip = ({ trip }) => {
  const { selectedTrip, setSelectedTrip } = useContext(TripsContext);
  const [, startTransition] = useTransition();
  const { image } = useImage(trip.city);

  const handleTripSelect = useCallback(
    () => startTransition(() => setSelectedTrip(trip)),
    [setSelectedTrip, trip]
  );

  return (
    <li
      className={styles["trip-card"]}
      onClick={handleTripSelect}
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
