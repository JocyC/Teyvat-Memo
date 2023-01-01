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
      {/* info */}
      <div className="page">
        <img src={main} alt="genshin main" className="img main-img" />
        <div className="info">
          <h5>
            Simple handy <br /> building & saving planner tool <br />
            <span> for your Teyvat friends </span>
          </h5>
          <hr />
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display:grid;
  grid-template-rows:auto 1fr;

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height:var(--nav-height)
    align-items:center;
  }
  .logo{
    margin-top:2rem;
    margin-bottom:3rem;
  }

  .page{
    margin:1rem;
    min-height: calc(100vh - var(--nav-height));
    display:grid;
    grid-template-rows:auto 1fr;
    margin: 2rem;
  }
  .info{
    position:relative;
  }
  .main-img{
    display:flex;
    position:absolute;
    opacity:80%;
    width:80vw;
    max-width:500px;
    z-index:-99;
    transform:translate(0%,20%);
  }
  @media (min-width:769px){
    .page{
      grid-template-columns:1fr 1fr;
      margin-left:2rem;
    }
    .info{
      margin-top:5rem;
    }
    .main-img{
      transform:translate(70%,0);
    }
  }
  @media (min-width:996px){
    .page{
      margin-left:10rem;
    }
    .main-img{
      transform:translate(100%,0);
    }
  }
  h5{
    font-weight:700;
    font-family:var(--bodyFont);
    span{
      color:var(--primary-500);
    }
  }
  p{
    color:var(--grey-600);
  }
  .btn-hero{
    margin-top:1rem;
  }

  // @media (min-width:992px){
  //   .main-img{
  //     display:block;
  //   }
  //   .page{
  //     grid-template-columns:1fr 1fr;
  //     column-gap:3rem;
  //     margin-top:-7.5rem;
  //   }
  // }
`;

export default Landing;
