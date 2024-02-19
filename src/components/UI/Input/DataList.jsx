const DataList = ({ id, options }) => {
  return (
    <datalist id={id}>
      {options.map(({ id, value }) => (
        <option key={id} value={value}></option>
      ))}
    </datalist>
  );
};

export default DataList;
