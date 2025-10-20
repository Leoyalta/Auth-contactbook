import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations.js";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";
import css from "./Navigation.module.css";

export default function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <>
          <div className={css.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Contacts
            </NavLink>
          </div>

          <div className={css.navLinks}>
            <span className={css.greeting}>Hello, {user.name}</span>
            <button
              className={css.logoutBtn}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className={css.navLinks}>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? css.active : undefined)}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? css.active : undefined)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}
