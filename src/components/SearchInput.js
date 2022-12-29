import { handleFilterChange } from "../features/allItems/allItemsSlice";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState("");

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(
          handleFilterChange({ name: e.target.name, value: e.target.value })
        );
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      {/* <form className="form"> */}
      <p className="label">search name</p>
      <input
        type="text"
        name="searchContent"
        value={localSearch}
        className="form-input"
        onChange={optimizedDebounce}
      />
      {/* </form> */}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  color: var(--primary-500);
  max-height: 150px;
  line-height: 5px;
  font-size: 0.8rem;
  .form-input {
    border-color: var(--primary-100);
    color: var(--primary-500);
  }
  padding: 1rem;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
`;

export default SearchInput;
