import Icon from '../Icon/Icon.jsx';
import styles from './UserBar.module.css';

const UserBar = () => {
  return (
    <>
      <div className={styles['avatar-thumb']}>
        <Icon name="user" size={24} />
      </div>
      <p className={styles['username']}>Anna</p>
    </>
  );
};

export default UserBar;
