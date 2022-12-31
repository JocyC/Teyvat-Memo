import styled from "styled-components";
import { SearchContainer, ItemsContainer } from "../../components";

const AllItems = () => {
  return (
    <Wrapper>
      <section>
        <SearchContainer />
        <ItemsContainer />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AllItems;
