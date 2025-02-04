import { ROUTES } from "../../helpers/constants/ROUTES.js";
import LinkBtn from "../LinkBtn/LinkBtn.jsx";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={styles['auth-nav']}>
      <li>
        <LinkBtn direction={ROUTES.REGISTER} >Log In</LinkBtn>
      </li>
      <li>
        <LinkBtn direction={ROUTES.LOGIN}>Registration</LinkBtn>
      </li>
    </ul>
  );
};

export default AuthNav;
