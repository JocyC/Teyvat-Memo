import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BarChart } from "../../components";
import { getAllItems } from "../../features/allItems/allItemsSlice";

const Stats = () => {
  const { ongoingNumber, nextNumber, doneNumber } = useSelector(
    (store) => store.allItems
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  const statsData = [
    { status: "ongoing", count: ongoingNumber },
    { status: "next", count: nextNumber },
    { status: "done", count: doneNumber },
  ];

  return (
    <Wrapper>
      <div className="info-container">
        You currently have <span>{ongoingNumber}</span> plans going on,
        <span> {ongoingNumber}</span> next, and <span>{doneNumber}</span>{" "}
        finished
      </div>
      <div className="chart-container">
        <BarChart data={statsData} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
  align-items: center;
  justify-content: center;
  margin: 1rem;
  span {
    font-family: var(--headingFont);
    color: var(--primary-100);
  }
`;
export default Stats;
