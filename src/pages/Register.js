import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Logo, FormRow } from "../components";
import {
  loginUser,
  registerUser,
  setTestUser,
} from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all the required fields");
      return;
    }
    if (isMember) {
      loginUser({ email, password });
      return;
    }
    registerUser({ name, email, password });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const loginAsTest = () => {
    dispatch(setTestUser());
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo className="logo" />
        {!values.isMember && (
          <FormRow
            type="name"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block" type="submit">
          {values.isMember ? "login" : "register"}
        </button>
        <button
          className="btn btn-block test"
          type="button"
          onClick={loginAsTest}
        >
          login as test user
        </button>
        <p>
          {values.isMember ? "Haven't been here yet?" : "Already a member?"}

          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2.5rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .test {
    margin-top: 0rem;
    background: transparent;
    color: var(--primary-500);
    border: solid 1px var(--primary-500);
    text-align: center;
  }
`;

export default Register;
