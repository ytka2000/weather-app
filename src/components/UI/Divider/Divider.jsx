import styles from "./divider.module.css";

const Divider = ({ variant = "solid" }) => {
  return <hr className={styles[variant]} />;
};

export default Divider;
