import { ROUTES } from '../../helpers/constants/ROUTES.js';
import Icon from '../Icon/Icon.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Title from '../Title/Title.jsx';
import styles from './AddPet.module.css';

const AddPet = () => {
  return (
    <div className={styles['add-pets-container']}>
      <Title value={2} style="profile">
        My pets
      </Title>
      <LinkBtn direction={ROUTES.ADD_PET} type="add-pet">
        <p className={styles['add-pet-txt']}>Add pet</p>
        <Icon name="plus" size={18} />
      </LinkBtn>
    </div>
  );
};

export default AddPet;
