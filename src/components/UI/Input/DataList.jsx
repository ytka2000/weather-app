import { forwardRef, useImperativeHandle, useRef } from "react";
import Input from "./Input";

const DataList = forwardRef(
  ({ id, name, options, onOptionSelect, icon, ...props }, ref) => {
    const inputRef = useRef();
    const inputId = `${id}-input`;

    const handleInputReset = () => {
      inputRef.current.value = "";
    };

    const handleBlur = () => {
      const currentValue = inputRef.current.value;

      const valueExists = options.some(
        (option) => option.value === currentValue
      );

      if (!valueExists) {
        handleInputReset();
      }
    };

    useImperativeHandle(ref, () => {
      return {
        reset: handleInputReset,
        searchBarValue: inputRef.current.value,
      };
    });

    return (
      <Input
        ref={inputRef}
        id={inputId}
        name={name}
        list={id}
        onChange={onOptionSelect}
        onFocus={handleInputReset}
        onBlur={handleBlur}
        icon={icon}
        {...props}
      >
        <datalist id={id}>
          {options.map(({ id, value }) => (
            <option key={id} value={value}></option>
          ))}
        </datalist>
      </Input>
    );
  }
);

export default DataList;
