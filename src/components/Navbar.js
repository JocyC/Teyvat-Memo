import styled from "styled-components";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  toggleSidebar,
} from "../features/user/userSlice";

const Navbar = () => {
  useEffect(() => {
    dispatch(getUserFromLocalStorage());
  }, []);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo className="logo" />
          <div className="logo-text">dashboard</div>
        </div>
        <div className="btn-container">
          <button
            className="btn user-btn"
            type="button"
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showDropdown ? "dropdown show-dropdown" : "dropdown"}>
            <Link
              to="/register"
              className="dropdown-btn"
              onClick={() => {
                dispatch(removeUserFromLocalStorage());
              }}
            >
              logout
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  z-index: 99;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--white);
  .logo {
    display: flex;
    width: 150px;
    align-items: center;
  }
  .logo-text {
    display: none;
    margin: 0;
    font-family: var(--headingFont);
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    font-size: 80%;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 481px) {
    .dropdown {
      padding: 0.5rem;
    }
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border: transparent;
    padding: 0;
    margin: 1rem;
    color: var(--primary-600);
    font-size: 0.1px;
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Navbar;
