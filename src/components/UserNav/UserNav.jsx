import { ROUTES } from "../../helpers/constants/ROUTES.js";
import LinkBtn from "../LinkBtn/LinkBtn.jsx";
import styles from "./UserNav.module.css";

const UserNav = () => {
  return (
    <ul className={styles}>
      <li>
        <LinkBtn direction={ROUTES.HOME}>Log Out</LinkBtn>
      </li>
      <li>
        <LinkBtn direction={ROUTES.PROFILE}>Profile</LinkBtn>
      </li>
    </ul>
  );
};

export default UserNav;
