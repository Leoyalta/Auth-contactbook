import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return isLoggedin ? component : <Navigate to={redirectTo} />;
}
