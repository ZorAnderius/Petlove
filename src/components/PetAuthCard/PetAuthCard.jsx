import styles from './PetAuthCard.module.css';

const PetAuthCard = ({ pet }) => {
  const { type, name, dob, desc } = pet;
  return (
    <div className={styles['pet-card-container']}>
      <div className={styles['img-wrap']}>
        <div className={styles[type]}></div>
      </div>
      <div className={styles['pet-desc-container']}>
        <div className={styles['pet-card-header']}>
          <p className={styles['pet-card-name']}>{name}</p>
          <p className={styles['pet-dob']}>
            <span>Birthday:</span>
            {dob}
          </p>
        </div>
        <p className={styles['pet-desc']}>{desc}</p>
      </div>
    </div>
  );
};

export default PetAuthCard;
