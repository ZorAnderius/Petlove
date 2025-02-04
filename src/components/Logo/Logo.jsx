import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon.jsx';
import styles from './Logo.module.css';
import { ROUTES } from '../../helpers/constants/ROUTES.js';

const Logo = ({location}) => {
  return (
    <Link to={ROUTES.HOME}
      className={clsx(
        styles['logo-container'],
        location ? styles['logo-home'] : styles['logo'],
      )}
    >
      <p className={location ? styles['logo-home-txt'] : styles['logo-txt']}>
        petl
      </p>
      <Icon name="heart-circle" size={23} />
      <p className={location ? styles['logo-home-txt'] : styles['logo-txt']}>
        ve
      </p>
    </Link>
  );
};

export default Logo;
