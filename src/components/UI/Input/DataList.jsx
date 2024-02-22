import Input from "./Input";

const DataList = ({ id, options, ...props }) => {
  const inputId = `${id}-input`;

  return (
    <Input id={inputId} name={inputId} list={id} {...props}>
      <datalist id={id}>
        {options.map(({ id, value }) => (
          <option key={id} value={value}></option>
        ))}
      </datalist>
    </Input>
  );
};

export default DataList;
