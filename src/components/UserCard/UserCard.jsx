import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import PetsBlock from '../PetsBlock/PetsBlock.jsx';
import UserBlock from '../UserBlock/UserBlock.jsx';
import styles from './UserCard.module.css';

const UserCard = () => {
  return (
    <div className={styles['user-container']}>
      <UserBlock>
        <EditUserBtn />
      </UserBlock>
      <PetsBlock />
      <LogOutBtn style='profile'/>
    </div>
  );
};

export default UserCard;
