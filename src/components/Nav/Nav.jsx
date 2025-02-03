import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { ROUTES } from "../../helpers/constants/ROUTES.js";

const Nav = () => {
  return (
    <ul className={styles}>
      <li>
        <NavLink to={ROUTES.NEWS}>News</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.NOTICES}>Find pet</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.FRIENDS}>Our friends</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
