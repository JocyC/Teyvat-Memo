import styled from "styled-components";

const FormPairSelect = ({
  labelName,
  labelText,
  nameLow,
  nameHigh,
  valueLow,
  valueHigh,
  handleChange,
  selectOptions,
}) => {
  return (
    <Wrapper>
      <div className="form-row pair-select">
        <label htmlFor={labelName} className="form-label pair-label">
          {labelText || labelName}
        </label>
        <select
          name={nameLow}
          value={valueLow}
          onChange={handleChange}
          className="form-select pair-low"
        >
          {selectOptions.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <div className="pair-middle">—</div>
        <select
          name={nameHigh}
          value={valueHigh}
          onChange={handleChange}
          className="form-select pair-high"
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pair-select {
    display: grid;
    grid-template-areas:
      "a a a"
      "b c d";
  }
  .pair-label {
    grid-area: a;
  }
  .pair-low {
    grid-area: b;
  }
  .pair-middle {
    grid-area: c;
    text-align: center;
    align-self: center;
  }
  .pair-high {
    grid-area: d;
  }
  select {
    appearance: none;
  }
`;
export default FormPairSelect;
