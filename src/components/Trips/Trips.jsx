import { useCallback, useContext, useState } from "react";

import { TripsContext } from "../../store/TripsContext";
import NewTrip from "./NewTrip";
import CreateTripModal from "../CreateTripModal";
import formatDate from "../../utils/formatDate";

import styles from "./trips.module.css";

const Trips = () => {
  const { trips, selectedTrip, setSelectedTrip } = useContext(TripsContext);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <section>
      <ul className={styles["trips-list"]}>
        {trips.map((trip) => (
          <li
            key={trip.id}
            className={styles["trip-card"]}
            onClick={() => setSelectedTrip(trip)}
            data-selected={trip.id === selectedTrip.id}
          >
            <img src={trip.image} alt={trip.city + " picture"} />
            <div className={styles["trip-card-description"]}>
              <p className={styles["trip-card-city"]}>{trip.city}</p>
              <p className={styles["trip-card-period"]}>
                {`${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}`}
              </p>
            </div>
          </li>
        ))}
        <NewTrip onClick={handleShowModal} />
        <CreateTripModal isOpen={showModal} closeModal={handleCloseModal} />
      </ul>
    </section>
  );
};

export default Trips;
