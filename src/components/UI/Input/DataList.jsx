import Input from "./Input";

const DataList = ({ id, name, options, onOptionSelect, icon, ...props }) => {
  const inputId = `${id}-input`;

  return (
    <Input
      id={inputId}
      name={name}
      list={id}
      onChange={onOptionSelect}
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
};

export default DataList;
