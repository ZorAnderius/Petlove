import clsx from 'clsx';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import styles from './AuthNav.module.css';

const AuthNav = ({ location }) => {
  const prefix = location ? '-home' : '';
  return (
    <ul className={clsx(styles['auth-nav'], location && styles['home'])}>
      <li>
        <LinkBtn type={`login${prefix}`} direction={ROUTES.LOGIN}>
          Log In
        </LinkBtn>
      </li>
      <li>
        <LinkBtn type="register" direction={ROUTES.REGISTER}>
          Registration
        </LinkBtn>
      </li>
    </ul>
  );
};

export default AuthNav;
