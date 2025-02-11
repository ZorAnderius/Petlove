import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import { selectIsLoggedIn } from '../../redux/auth/selector.js';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import styles from './UserNav.module.css';
import UserBar from '../UserBar/UserBar.jsx';

const UserNav = ({ location }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <ul className={styles['user-nav']}>
      {!location && isLoggedIn && (
        <li>
          <Button style="logout" handleClick={handleClick}>
            Log Out
          </Button>
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
