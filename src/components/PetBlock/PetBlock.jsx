import PetAuthCard from '../PetAuthCard/PetAuthCard.jsx';
import { pets } from '../../helpers/data/pets.js';
import styles from './PetBlock.module.css';
import Icon from '../Icon/Icon.jsx';

const PetBlock = ({ location }) => {
  const pet = location ? pets[0] : pets[1];
  return (
    <div className={styles['pet-block-container']}>
      <div className={styles['img-wrap']}>
              <div className={styles[pet.type]}></div>
              <Icon name='figure' size={600} width={536} />
      </div>
      <PetAuthCard pet={pet} />
    </div>
  );
};

export default PetBlock;
