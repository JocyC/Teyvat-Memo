import { Link } from "react-router-dom";
import styled from "styled-components";
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
    <Wrapper>
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
            <Link to="/single-plan" className="detail-btn">
              details
            </Link>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 500px;
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
    font-size: 100%;
    color: var(--primary-500);
    background: transparent;
    border: transparent;
    border-radius: 0.3rem;
    border-bottom: solid 2px var(--primary-300);
  }
`;

export default SinglePlan;
