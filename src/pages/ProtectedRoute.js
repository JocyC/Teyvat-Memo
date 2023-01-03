import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../features/user/userSlice";
import { useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromLocalStorage());
  }, []);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/landing");
    }
    if (user) {
      navigate("/");
    }
  }, [user]);
  return children;
};

export default ProtectedRoute;
