import { NavLink } from "react-router-dom";

import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
