import { Link } from "react-router-dom";
import styles from "./LinkBtn.module.css";
import { ROUTES } from "../../helpers/constants/ROUTES.js";
import clsx from "clsx";

const LinkBtn = ({ children, type='', direction = ROUTES.HOME }) => {
  return (
    <Link
      to={direction}
      className={clsx(styles['link-btn'], type && styles[type])}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
