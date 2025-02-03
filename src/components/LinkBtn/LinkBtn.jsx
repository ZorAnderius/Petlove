import { Link } from "react-router-dom";
import styles from "./LinkBtn.module.css";
import { ROUTES } from "../../helpers/constants/ROUTES.js";

const LinkBtn = ({ children, direction = ROUTES.HOME, style = "" }) => {
  return (
    <Link to={direction} className={styles[style]}>
      {children}
    </Link>
  );
};

export default LinkBtn;
