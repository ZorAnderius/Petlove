import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import styles from './Logo.module.css';

const Logo = ({location}) => {
  const isHome = location.pathname === ROUTES.HOME;
  return (
    <div
      className={clsx(
        styles['logo-container'],
        isHome ? styles['logo-home'] : styles['logo'],
      )}
    >
      <p className={isHome ? styles['logo-home-txt'] : styles['logo-txt']}>
        petl
      </p>
      <Icon name="heart-circle" size={23} />
      <p className={isHome ? styles['logo-home-txt'] : styles['logo-txt']}>
        ve
      </p>
    </div>
  );
};

export default Logo;
