import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SinglePlan from "./SinglePlan";

const ItemsContainer = () => {
  const { isLoading, itemList, totalItems, ongoingList, nextList, doneList } =
    useSelector((store) => store.allItems);
  const dispatch = useDispatch();
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
        <h2>No plans created yet...</h2>
      </Wrapper>
    );
  }

  return (
    <section className="plans-container">
      <div className="ongoing">
        {ongoingList.map((item, index) => {
          return <SinglePlan item={item} key={index} />;
        })}
      </div>
      <div className="next">
        {nextList.map((item, index) => {
          return <SinglePlan item={item} key={index} />;
        })}
      </div>
      <div className="done">
        {doneList.map((item, index) => {
          return <SinglePlan item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

const Wrapper = styled.section``;

export default ItemsContainer;
