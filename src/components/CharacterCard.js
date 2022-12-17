import React from "react";
import { useGetSingleCharaQuery } from "../features/api/apiSlice";
import Loading from "./Loading";
import Error from "./Error";
import VisionIcon from "./VisionIcon";
import RarityStar from "./RarityStar";
import styled from "styled-components";

const CharacterCard = ({ charaName }) => {
  const { data, isLoading, isError, error } = useGetSingleCharaQuery(charaName);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error.toString()} />;
  }
  const {
    name,
    rarity,
    element,
    images: { icon },
  } = data;
  return (
    <Wrapper>
      <div
        className={
          rarity == 5 ? "img-container five-star" : "img-container four-star"
        }
      >
        <VisionIcon vision={element} className="vision" />
        <img src={icon} alt={name} />
        <RarityStar rarity={rarity} className="rarity" />
      </div>
      <div className="info">{name}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  border-radius: var(--borderRadius);
  font-weight: 700;

  // background color for different rarity
  // .img-container .five-star {
  //   background: var(--five-star);
  // }
  // .img-container .four-star {
  //   background: var(--four-star);
  // }
  .five-star {
    background: var(--five-star);
  }
  .four-star {
    background: var(--four-star);
  }
  .info {
    background: var(--clr-grey-10);
  }

  // display: grid;
  // grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  img {
    display: block;
    position: relative;
    width: 150px;
  }
  .vision {
    position: absolute;
    transform: translate(0);
  }
`;

export default CharacterCard;
