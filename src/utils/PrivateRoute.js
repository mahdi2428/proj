import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const {user}  = useAuth();
  // console.log(user.username)
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
};