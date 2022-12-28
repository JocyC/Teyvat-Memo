import { Link } from "react-router-dom";
import styled from "styled-components";
import error from "../assets/error.jpeg";
import { Logo } from "../components";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={error} alt="not found paimon" />
        <h3>404 not found</h3>
        <p>How about we explore the area ahead of us later?</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;
