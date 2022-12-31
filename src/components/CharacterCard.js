import React from "react";
import { useGetSingleCharaQuery } from "../features/api/apiSlice";
import Loading from "./Loading";
import Error from "./Error";
import VisionIcon from "./VisionIcon";
import RarityStar from "./RarityStar";
import styled from "styled-components";

const CharacterCard = ({ charaName, childToParent }) => {
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
        onClick={() => {
          if (childToParent) {
            childToParent(name);
          }
          return;
        }}
      >
        <VisionIcon vision={element} className="vision" />
        <img src={icon} alt={name} />
        <RarityStar rarity={rarity} className="rarity" />
        <div className="info">{name}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: var(--borderRadius);
  // width: 110px;
  font-weight: 700;
  box-shadow: var(--shadow-2);
  padding: 0;

  .img-container {
    border-radius: var(--borderRadius);
    padding-top: 0.5rem;
    position: relative;
    cursor: pointer;
  }

  .five-star {
    background: var(--five-star);
  }
  .four-star {
    background: var(--four-star);
  }
  .info {
    background: var(--clr-grey-10);
    font-size: 80%;
    bottom: 1rem;
  }

  img {
    display: block;
    width: 110px;
  }
  .vision {
    transform: translate(0);
  }
`;

export default CharacterCard;
