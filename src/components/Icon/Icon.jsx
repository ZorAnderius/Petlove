import icons from '../../assets/icons.svg';
import styles from './Icon.module.css';

const Icon = ({ name, size = 20 }) => {
  return (
    <svg className={styles[name]} width={size} height={size}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
