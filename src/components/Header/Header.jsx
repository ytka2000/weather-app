import styles from "./header.module.css";

const Header = () => {
  return (
    <header id={styles["main-header"]}>
      <h1>
        Weather <strong>Forecast</strong>
      </h1>
    </header>
  );
};

export default Header;
