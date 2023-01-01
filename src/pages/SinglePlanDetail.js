import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Calculation, CharacterCard } from "../components";
import { deletePlan, setEditItem } from "../features/item/itemSlice";

const SinglePlanDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedName = id.substring(1);
  const itemList = JSON.parse(localStorage.getItem("plan"));
  const detailList = itemList.filter(
    (item) => item.selectedName === selectedName
  );
  const totalCost = Object.assign(
    {},
    ...detailList.map((item) => {
      const { planType, ascendLow, ascendHigh, constellation } = item;
      if (planType === "farm") {
        return { ascendLow, ascendHigh };
      }
      return { constellation };
    })
  );

  return (
    <Wrapper>
      <div className="page-title">
        <h5>
          <Link to="/all-items">All plans</Link>/ memo for {selectedName}
        </h5>
      </div>
      <div className="page-info">
        <div className="card-container">
          <CharacterCard charaName={selectedName} />
        </div>
        <div className="plan-container">
          {detailList.map((item, index) => {
            const { status, planType, constellation, ascendLow, ascendHigh } =
              item;
            return (
              <div className="single-plan" key={index}>
                <div className="plan-info info-title">
                  {planType === "save" ? "saving" : "farming"} plan
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
                  <Link
                    to="/add-item"
                    className="btn edit-btn"
                    onClick={() => {
                      dispatch(
                        setEditItem({
                          editItemName: selectedName,
                          editItemType: planType,
                        })
                      );
                    }}
                  >
                    edit
                  </Link>
                  <button
                    className="btn delete-btn"
                    onClick={() => {
                      deletePlan(item);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Calculation name={selectedName} totalCost={totalCost} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .calculation {
    display: block;
  }
  .page-title {
    a {
      color: var(--primary-100);
    }
    margin: 1rem;
  }
  .page-info {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
  }
  .card-container {
    max-width: 110px;
  }
  .plan-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  .single-plan {
    display: grid;
    justify-content: center;
    align-items: center;
    color: var(--primary-400);
    text-transform: capitalize;
    background: var(--white);
    opacity: 80%;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 1rem;
    margin: 0;
    transition: var(--transition);
    max-width: 30rem;
  }
  .plan-info {
    line-height: 2rem;
    text-align: start;
    span {
      color: var(--primary-700);
    }
  }
  .info-title {
    color: var(--primary-700);
    font-family: var(--headingFont);
    border-bottom: solid 1px var(--primary-100);
    text-align: center;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  .btn {
    font-size: 10px;
    text-align: center;
    border: solid 1px;
    background: transparent;
  }
  .edit-btn {
    border-color: var(--primary-500);
    color: var(--primary-500);
  }
  .delete-btn {
    border-color: var(--red);
    color: var(--red);
  }
`;

export default SinglePlanDetail;
