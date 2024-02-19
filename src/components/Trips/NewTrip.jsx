import styles from "./trips.module.css";

const NewTrip = ({ onClick }) => {
  return (
    <li className={styles["new-card"]} onClick={onClick}>
      <p>
        <strong>+</strong>
      </p>
      <p>Add trip</p>
    </li>
  );
};

export default NewTrip;
