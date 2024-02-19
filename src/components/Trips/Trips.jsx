import { useContext, useState } from "react";

import { TripsContext } from "../../store/TripsContext";
import NewTrip from "./NewTrip";
import CreateTripModal from "../CreateTripModal";
import formatDate from "../../utils/formatDate";

import styles from "./trips.module.css";

const Trips = () => {
  const { trips } = useContext(TripsContext);
  const [showModal, setShowModal] = useState(false);

  const handleCardSelect = () => {
    console.log("card selected!");
  };

  return (
    <section>
      <ul className={styles["trips-list"]}>
        {trips.map(({ id, city, startDate, endDate, image }) => (
          <li
            key={id}
            className={styles["trip-card"]}
            onClick={handleCardSelect}
          >
            <img src={image} alt={city + " picture"} />
            <div className={styles["trip-card-description"]}>
              <p className={styles["trip-card-city"]}>{city}</p>
              <p className={styles["trip-card-period"]}>
                {`${formatDate(startDate)} - ${formatDate(endDate)}`}
              </p>
            </div>
          </li>
        ))}
        <NewTrip onClick={() => setShowModal(true)} />
        <CreateTripModal
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
        />
      </ul>
    </section>
  );
};

export default Trips;
