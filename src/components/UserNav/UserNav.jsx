import { useSelector } from 'react-redux';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import { selectIsLoggedIn } from '../../redux/auth/selector.js';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import styles from './UserNav.module.css';
import UserBar from '../UserBar/UserBar.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';

const UserNav = ({ location }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={styles['user-nav']}>
      {!location && isLoggedIn && (
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
