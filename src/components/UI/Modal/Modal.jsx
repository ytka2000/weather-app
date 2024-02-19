import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";

const Modal = ({ open, onClose, children, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (open) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog {...props} ref={ref} className={styles.modal} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
