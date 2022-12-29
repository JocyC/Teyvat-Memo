import styled from "styled-components";
import { SearchContainer, ItemsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const AllItems = () => {
  const { isLoading, itemList, totalItems, ongoingList, nextList, doneList } =
    useSelector((store) => store.allItems);
  const dispatch = useDispatch();

  const deleteItem = () => {};
  const changeStatus = () => {};
  const sortType = () => {};

  return (
    <Wrapper>
      <section>
        <SearchContainer />
        {/* <div className="sort-container">
          <div
            className="sort"
            onClick={() => {
              console.log("show farming plan");
            }}
          >
            farm
          </div>
          <div
            className="sort"
            onClick={() => {
              console.log("show farming plan");
            }}
          >
            save
          </div>
          <form className="form"></form>
        </div> */}

        <ItemsContainer />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AllItems;
