import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import styles from './UserNav.module.css';
import UserBar from '../UserBar/UserBar.jsx';

const UserNav = ({ location }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <ul className={styles['user-nav']}>
      {!location && (
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
