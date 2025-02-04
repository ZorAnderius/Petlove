import { useLocation } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import styles from './Header.module.css';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();
  return (
    <header className={styles['header']}>
      <Container>
        <nav
          className={clsx(
            styles['nav-list'],
            location.pathname === ROUTES.HOME
              ? styles['nav-list-home']
              : styles['nav-list-other'],
          )}
        >
          <Logo location={location} />
          <Nav location={location} />
          <AuthNav location={location} />
          <UserNav location={location} />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
