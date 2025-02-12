import AddPet from '../AddPet/AddPet.jsx';
import PetsList from '../PetsList/PetsList.jsx';
import styles from './PetsBlock.module.css';

const PetsBlock = () => {
  return (
    <div className={styles['pets-block-container']}>
      <AddPet />
      <PetsList />
    </div>
  );
};

export default PetsBlock;
