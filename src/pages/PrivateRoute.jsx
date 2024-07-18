import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
