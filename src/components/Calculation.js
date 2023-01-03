import styled from "styled-components";
import { useGetSingleCharaQuery } from "../features/api/apiSlice";
import { getUniqueValues } from "../utils/constants";
import Error from "./Error";
import Loading from "./Loading";

const Calculation = ({ name, totalCost }) => {
  const { data, isLoading, isError, error } = useGetSingleCharaQuery(name);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error.toString()} />;
  }
  const {
    costs: { ascend1, ascend2, ascend3, ascend4, ascend5, ascend6 },
    images: { cover1 },
  } = data;
  const costList = [
    ascend1.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
    ascend2.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
    ascend3.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
    ascend4.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
    ascend5.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
    ascend6.reduce((acc, item) => {
      const { name, count } = item;
      return { ...acc, [name]: count };
    }, {}),
  ];
  const { ascendLow, ascendHigh, constellation } = totalCost;
  // cost of constellation if there is saving plan
  const consCost =
    constellation == 0 || !constellation
      ? (constellation + 1) * 80 * 160
      : constellation;
  // cost of ascension if there is farming plan
  const ascendCost = costList.slice(ascendLow, ascendHigh);
  const asCostList = getUniqueValues(ascendCost);
  const asCostIniTotal = asCostList.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  const asCostTotal = ascendCost.reduce((acc, curr) => {
    asCostList.forEach((item) => {
      if (curr[item]) {
        acc[item] = acc[item] + curr[item];
      }
      acc[item] = acc[item];
    });
    return acc;
  }, asCostIniTotal);

  return (
    <Wrapper className="calculation">
      <div className="form container">
        {consCost && (
          <div className="info">
            <div className="info-title">
              Estimated <span>primos</span> needed
            </div>
            <div className="info-content">{consCost}</div>
          </div>
        )}
        {ascendCost && (
          <div className="info">
            <div className="info-title">Ascension materials :</div>
            {asCostList.map((item, index) => {
              const value = asCostTotal[item];
              return (
                <div className="info-content" key={index}>
                  {item} : {value}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <img src={cover1} alt={name} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  span {
    color: var(--primary-500);
  }
  .container {
    opacity: 80%;
    max-width: 80vw;
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    .container {
      max-width: 60%;
      justify-self: start;
    }
  }
  .info-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .info-content {
    color: var(--primary-700);
    line-height: 2rem;
  }
  img {
    max-width: var(--fluid-width);
    position: absolute;
    transform: translate(-10%, -100%);
    z-index: -99;
  }
`;
export default Calculation;
