import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      <NavLink className={style.link} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
