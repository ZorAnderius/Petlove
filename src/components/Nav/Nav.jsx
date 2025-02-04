import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import styles from './Nav.module.css';

const buildStyle = ({ isActive }) => {
  return clsx(styles['link-btn'], isActive && styles['active-btn']);
};

const Nav = ({ location }) => {
  return (
    <ul className={clsx(styles['routes-nav'], location && styles['home'])}>
      <li>
        <NavLink className={buildStyle} to={ROUTES.NEWS}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink className={buildStyle} to={ROUTES.NOTICES}>
          Find pet
        </NavLink>
      </li>
      <li>
        <NavLink className={buildStyle} to={ROUTES.FRIENDS}>
          Our friends
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
