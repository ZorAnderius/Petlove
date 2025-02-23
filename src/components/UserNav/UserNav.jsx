import { ROUTES } from '../../helpers/constants/ROUTES.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import styles from './UserNav.module.css';
import UserBar from '../UserBar/UserBar.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';

const UserNav = ({ location }) => {
  return (
    <ul className={styles['user-nav']}>
      {!location && (
        <li>
          <LogOutBtn />
        </li>
      )}
      <li>
        <LinkBtn direction={ROUTES.PROFILE} type="user-bar-wrap">
          <UserBar />
        </LinkBtn>
      </li>
    </ul>
  );
};

export default UserNav;
