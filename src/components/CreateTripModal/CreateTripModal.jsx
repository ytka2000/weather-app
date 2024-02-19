import { useContext, useRef } from "react";
import { TripsContext } from "../../store/TripsContext";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Divider from "../UI/Divider";

import closeIcon from "../../assets/close.png";
import { citiesWithId } from "../../mock/cities";
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
        <ul className={styles["create-trip-inputs"]}>
          <Input
            id="city"
            name="city"
            label="* City"
            type="datalist"
            list={citiesWithId}
            wrapper="li"
            placeholder="Please select a city"
            required
          />
          <Input
            id="end-date"
            name="startDate"
            label="* Start date"
            type="date"
            wrapper="li"
            placeholder="Select date"
            required
          />
          <Input
            id="end-date"
            name="endDate"
            label="* End date"
            type="date"
            wrapper="li"
            placeholder="Select date"
            required
          />
        </ul>
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
