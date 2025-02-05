import icons from '../../assets/icons.svg';
import styles from './Icon.module.css';

const Icon = ({ name, size = 20, width = '' }) => {
  return (
    <svg className={styles[name]} width={width ? width : size} height={size}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
