import { useMemo } from "react";
import DataList from "./DataList";

import styles from "./input.module.css";

const Input = ({
  id,
  name,
  label,
  type = "text",
  wrapper = "p",
  list,
  className = "",
  ...props
}) => {
  const Wrapper = wrapper;

  const isDataList = useMemo(() => type === "datalist" && list, [list, type]);

  return (
    <Wrapper className={`${styles["input-wrapper"]} ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        list={isDataList ? `${id}-list` : undefined}
        {...props}
      />
      {isDataList && <DataList id={`${id}-list`} options={list} />}
    </Wrapper>
  );
};

export default Input;
