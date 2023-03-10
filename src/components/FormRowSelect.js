const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  selectOptions,
  defaultValue,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        className="form-select"
      >
        {selectOptions.map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
