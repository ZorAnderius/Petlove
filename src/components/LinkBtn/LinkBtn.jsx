import { Link } from 'react-router-dom';
import styles from './LinkBtn.module.css';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import clsx from 'clsx';

const LinkBtn = ({
  children,
  type = '',
  direction = ROUTES.HOME,
  newTab,
  handleClick,
}) => {
  return newTab ? (
    <Link
      to={direction}
      className={clsx(styles['link-btn'], type && styles[type])}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  ) : (
    <Link
      to={direction}
      onClick={handleClick}
      className={clsx(styles['link-btn'], type && styles[type])}
    >
      {children}
    </Link>
  );
};

export default LinkBtn;
