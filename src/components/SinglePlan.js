import { Link } from "react-router-dom";
import styled from "styled-components";
import { deletePlan } from "../features/item/itemSlice";
import CharacterCard from "./CharacterCard";

const SinglePlan = ({ item }) => {
  const {
    selectedName,
    planType,
    status,
    ascendHigh,
    ascendLow,
    constellation,
  } = item;

  return (
    <Wrapper className="single-plan">
      <article className="plan">
        <div className="card-container">
          <CharacterCard charaName={selectedName} />
        </div>
        <div className="info-container">
          <div className="plan-info">
            <span>name : </span> {selectedName}
          </div>
          <div className="plan-info">
            <span>status : </span>
            {status}
          </div>
          <div className="plan-info">
            <span>goal : </span>
            {planType === "save"
              ? ` C${constellation}`
              : ` ${ascendLow} - ${ascendHigh}`}
          </div>
          <div className="btn-container">
            <Link to={`/single-plan/:${selectedName}`} className="detail-btn">
              details
            </Link>
            <button
              className="delete-btn"
              type="button"
              onClick={() => {
                deletePlan(item);
              }}
            >
              delete
            </button>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  text-transform: capitalize;
  .plan {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    max-width: 350px;
    align-items: center;
    background: var(--grey-100);
    padding: 0.5rem;
    border-radius: var(--borderRadius);
  }
  .card-container {
    max-width: 110px;
  }

  .info-container {
    display: grid;
    justify-content: start;
    align-items: center;
  }
  .plan-info {
    span {
      color: var(--primary-100);
    }
    color: var(--primary-600);
  }
  .btn-container {
    margin-top: 0.5rem;
  }
  .detail-btn {
    cursor: pointer;
    font-size: 80%;
    color: var(--primary-500);
    background: transparent;
    border: transparent;
    border-radius: 0.3rem;
    border-bottom: solid 2px var(--primary-300);
    margin-right: 0.2rem;
  }
  .delete-btn {
    cursor: pointer;
    font-size: 80%;
    color: var(--primary-100);
    background: transparent;
    border: transparent;
    border-radius: 0.3rem;
    border-bottom: solid 2px var(--red);
    text-transform: capitalize;
    margin-left: 0.2rem;
  }
  @media (min-width: 481px) {
    .detail-btn {
      font-size: 100%;
      margin-right: 0.5rem;
    }
    .delete-btn {
      font-size: 100%;
      margin-left: 0.5rem;
    }
  }
`;

export default SinglePlan;
