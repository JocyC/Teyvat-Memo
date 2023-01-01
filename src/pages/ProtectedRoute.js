import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../features/user/userSlice";
import { useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromLocalStorage());
  }, []);
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
