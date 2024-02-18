import styles from "./trips.module.css";

const NewTrip = () => {
  return (
    <li className={styles["new-card"]}>
      <p>
        <strong>+</strong>
      </p>
      <p>Add trip</p>
    </li>
  );
};

export default NewTrip;
