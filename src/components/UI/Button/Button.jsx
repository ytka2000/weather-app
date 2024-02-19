import styles from "./button.module.css";

const Button = ({ variant = "default", children, ...props }) => {
  return (
    <button {...props} className={`button ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
