import useIcon from "../../../hooks/useIcon";

import styles from "./icon.module.css";

const Icon = ({ iconName }) => {
  const { icon, isLoading, error } = useIcon(iconName);

  return <img className={styles.icon} src={icon} alt={iconName} />;
};

export default Icon;
