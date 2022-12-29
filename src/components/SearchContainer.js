import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  handleFilterChange,
  clearFilters,
} from "../features/allItems/allItemsSlice";
import SearchInput from "./SearchInput";

const SearchContainer = () => {
  const { planTypeOptions, statusOptions } = useSelector((store) => store.item);
  const { isLoading, searchStatus, searchType } = useSelector(
    (store) => store.allItems
  );
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(
      handleFilterChange({ name: e.target.name, value: e.target.value })
    );
  };

  const clearAllFilters = () => {
    if (isLoading) return;
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <p>plan type</p>
        {["all", ...planTypeOptions].map((option, index) => {
          return (
            <button
              className={
                searchType === option ? "search-btn active" : "search-btn"
              }
              onClick={handleSearch}
              type="button"
              key={index}
              name="searchType"
              value={option}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="btn-container">
        <p>status</p>
        {["all", ...statusOptions].map((option, index) => {
          return (
            <button
              className={
                searchStatus === option
                  ? `search-btn ${option} active`
                  : `search-btn ${option}`
              }
              onClick={handleSearch}
              type="button"
              key={index}
              name="searchStatus"
              value={option}
            >
              {option}
            </button>
          );
        })}
      </div>
      <SearchInput />
      <button className="search-btn clear-btn" onClick={clearAllFilters}>
        reset
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  line-height: 10px;
  padding: 1rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  color: var(--primary-600);
  .btn-container {
    padding: 0.5rem;
    font-size: 0.8rem;
    justify-self: start;
  }
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  .search-btn {
    border-radius: var(--borderRadius);
    background: transparent;
    padding: 0.3rem 0.8rem 0.3rem 0.8rem;
    border: solid 0.5px var(--primary-100);
    color: var(--primary-100);
    cursor: pointer;
    text-transform: capitalize;
    font-size: 15px;
    margin: 0.3rem;
  }
  .active {
    background: var(--primary-500);
    border-color: var(--primary-500);
    color: var(--white);
  }
  .ongoing {
    border-color: var(--ongoing);
    color: var(--ongoing);
  }
  .ongoing.active {
    background: var(--ongoing);
    color: var(--white);
  }
  .next {
    border-color: var(--next);
    color: var(--next);
  }
  .next.active {
    background: var(--next);
    color: var(--white);
  }
  .done {
    border-color: var(--done);
    color: var(--done);
  }
  .done.active {
    background: var(--done);
    color: var(--white);
  }
  .clear-btn {
    max-width: 30%;
    background: transparent;
    border-color: var(--primary-100);
    color: var(--primary-100);
  }
`;

export default SearchContainer;
