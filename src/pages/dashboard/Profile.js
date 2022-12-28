import { useState } from "react";
import { FormRow } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = userData;
    if (!name || !email) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(updateUser({ name, email }));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
        </div>
        <button className="btn btn-block" type="submit" disabled={isLoading}>
          {isLoading ? "Please wait..." : "save changes"}
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    max-width: 100%;
    width: 100%;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .btn-block {
    width: auto;
    font-size: 0.8rem;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Profile;
