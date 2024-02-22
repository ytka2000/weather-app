import { useContext, useRef } from "react";
import { TripsContext } from "../../store/TripsContext";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Divider from "../UI/Divider";
import CreateTripInputs from "./CreateTripInputs";

import closeIcon from "../../assets/close.png";
import styles from "./create-trip-modal.module.css";

const CreateTripModal = ({ isOpen, closeModal }) => {
  const formRef = useRef();
  const { addTrip } = useContext(TripsContext);

  const handleClose = (e) => {
    e.preventDefault();

    formRef.current.reset();
    closeModal();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const tripToAdd = Object.fromEntries(formData.entries());

    addTrip(tripToAdd);
    form.reset();
    closeModal();
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <form
        ref={formRef}
        className={styles["create-trip-modal"]}
        onSubmit={handleFormSubmit}
      >
        <header>
          <div className={styles["create-trip-header"]}>
            <legend>Create trip</legend>
            <Button variant="icon" onClick={handleClose}>
              <img src={closeIcon} alt="Close icon" />
            </Button>
          </div>
          <Divider />
        </header>
        <CreateTripInputs />
        <footer>
          <Divider />
          <div className={styles["button-group"]}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </footer>
      </form>
    </Modal>
  );
};

export default CreateTripModal;
