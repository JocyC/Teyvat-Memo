import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const RarityStar = ({ rarity }) => {
  return (
    <Wrapper>
      <div className="star-container">
        {Array.from(Array(parseInt(rarity)).keys()).map((_, index) => {
          return <AiFillStar key={index} className="star" />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  transform: translate(8%, -60%);
  color: var(--yellow);
  .star {
    font-size: 1.2rem;
  }
`;

export default RarityStar;
