import useIcon from "../../../hooks/useIcon";

import styles from "./icon.module.css";

const Icon = ({ iconName, className }) => {
  const { icon, isLoading, error } = useIcon(iconName);

  return (
    <img className={`${styles.icon} ${className}`} src={icon} alt={iconName} />
  );
};

export default Icon;
