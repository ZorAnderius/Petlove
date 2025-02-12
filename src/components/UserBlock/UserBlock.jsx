import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon/Icon.jsx';
import Title from '../Title/Title.jsx';
import styles from './UserBlock.module.css';
import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';

const UserBlock = ({ children }) => {
  const userInfo = ['name', 'email', '+380'];
  return (
    <div className={styles['user-card-container']}>
      <div className={styles['avatar-edit-container']}>
        <p className={styles['user-icon']}>
          User
          <span>
            <Icon name="user" size={18} />
          </span>
        </p>
        <EditUserBtn style="avatar-container">
          <div className={styles['avatar-thumb']}>
            <Icon name="user" size={50} />
          </div>
          <p>Upload photo</p>
        </EditUserBtn>
        {children}
      </div>
      <Title style="profile">My information</Title>
      <ul className={styles['info-list']}>
        {userInfo?.map(info => (
          <li key={uuidv4} className={styles['info-item']}>
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBlock;
