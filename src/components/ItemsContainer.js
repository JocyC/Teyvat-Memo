import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SinglePlan from "./SinglePlan";
import { useEffect } from "react";
import { clearAllItems, getAllItems } from "../features/allItems/allItemsSlice";

const ItemsContainer = () => {
  const {
    isLoading,
    totalItems,
    ongoingList,
    nextList,
    doneList,
    searchContent,
    searchStatus,
    searchType,
  } = useSelector((store) => store.allItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [searchContent, searchStatus, searchType]);
  // consider using connect and map, mapStateToProps later if it's useful elsewhere too

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  }
  if (totalItems === 0) {
    return (
      <Wrapper>
        <h3>No plans created yet...</h3>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="plans-container">
        {ongoingList.length !== 0 && (
          <div className="plans-center">
            <div className="status-bar ongoing">in progress</div>
            <div className="ongoing plan-section">
              {ongoingList.map((item, index) => {
                return <SinglePlan item={item} key={index} />;
              })}
            </div>
          </div>
        )}
        {nextList.length !== 0 && (
          <div className="plans-center">
            <div className="status-bar next">next in line</div>
            <div className="next plan-section">
              {nextList.map((item, index) => {
                return <SinglePlan item={item} key={index} />;
              })}
            </div>
          </div>
        )}
        {doneList.length !== 0 && (
          <div className="plans-center">
            <div className="status-bar done">already done</div>
            <div className="done plan-section">
              {doneList.map((item, index) => {
                return <SinglePlan item={item} key={index} />;
              })}
            </div>
          </div>
        )}

        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearAllItems());
          }}
        >
          delete all plans
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .plans-container {
    display: grid;
    grid-template-rows: auto auto auto auto;
    align-items: center;
    justify-content: center;
  }
  .plans-center {
    align-self: center;
    margin-top: 2rem;
  }
  .status-bar {
    display: inline-block;
    padding: 0.3rem;
    border-top: solid 2px;
    border-right: solid 3px;
    font-family: var(--bodyFont);
    text-transform: capitalize;
    color: var(--grey-600);
    border-radius: var(--borderRadius);
  }

  .plan-section {
    padding: 0.5rem;
    border-radius: var(--borderRadius);
    border-left: solid 2px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    .plan-section {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .plan-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .ongoing {
    border-color: var(--ongoing);
  }
  .next {
    border-color: var(--next);
  }
  .done {
    border-color: var(--done);
  }
  .clear-btn {
    border-radius: var(--borderRadius);
    padding: 0.5rem;
    border-color: var(--red);
    color: var(--red);
    background: transparent;
    align-self: center;
    margin-top: 2rem;
  }
`;

export default ItemsContainer;
