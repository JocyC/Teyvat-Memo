import Logo from "../components/Logo";
import main from "../assets/main.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h4>
            Simple handy <br /> building & saving planner tool <br />
            <span> for your Teyvat friends </span>
          </h4>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            aliquam ut iste illum consequuntur qui cupiditate recusandae
            laborum, eius placeat harum in, sed impedit itaque rem praesentium
            amet! Eligendi vel enim ea obcaecati, atque repellendus cupiditate
            doloribus sunt alias sequi?{" "}
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="genshin main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height:var(--nav-height)
    display:flex;
    align-items:center;
  }
  .logo{
    margin-top:2rem;
    margin-bottom:3rem;
  }
  .page{
    min-height: calc(100vh - var(--nav-height));
    display:grid;
    align-items:center;
  }
  h4{
    font-weight:700;
    span{
      color:var(--primary-500);
    }
  }
  p{
    color:var(--grey-600);
  }
  .main-img{
    display:none;
  }
  @media (min-width:992px){
    .main-img{
      display:block;
    }
    .page{
      grid-template-columns:1fr 1fr;
      column-gap:3rem;
      margin-top:-7.5rem;
    }
  }
`;

export default Landing;
