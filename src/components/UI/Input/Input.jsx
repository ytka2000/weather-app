import styles from "./input.module.css";

const Input = ({
  id,
  name,
  label,
  type = "text",
  wrapper = "p",
  className = "",
  icon,
  children,
  required,
  ...props
}) => {
  const Wrapper = wrapper;

  return (
    <Wrapper className={`${styles["input-wrapper"]} ${className}`}>
      {label && (
        <label htmlFor={id} className={styles.label} data-required={required}>
          {label}
        </label>
      )}
      {icon ? (
        <span className={styles["input-with-icon"]}>
          {icon}
          <input
            id={id}
            name={name}
            type={type}
            className={styles.input}
            required
            {...props}
          />
        </span>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={styles.input}
          required
          {...props}
        />
      )}

      {children}
    </Wrapper>
  );
};

export default Input;
