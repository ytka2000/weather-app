import { useCallback, useContext, useState } from "react";

import { TripsContext } from "../../store/TripsContext";
import Trip from "./Trip";
import NewTrip from "./NewTrip";
import CreateTripModal from "../CreateTripModal";

import styles from "./trips.module.css";

const Trips = () => {
  const { trips } = useContext(TripsContext);
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
        <NewTrip onClick={handleShowModal} />
        <CreateTripModal isOpen={showModal} closeModal={handleCloseModal} />
        {trips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </ul>
    </section>
  );
};

export default Trips;
