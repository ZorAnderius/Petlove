import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import PetsBlock from '../PetsBlock/PetsBlock.jsx';
import UserBlock from '../UserBlock/UserBlock.jsx';
import styles from './UserCard.module.css';

const UserCard = () => {
  return (
    <aside className={styles['user-container']}>
      <UserBlock>
        <EditUserBtn />
      </UserBlock>
      <PetsBlock />
      <LogOutBtn style='profile'/>
    </aside>
  );
};

export default UserCard;
