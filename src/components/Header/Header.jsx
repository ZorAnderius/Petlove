import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import AuthNav from '../AuthNav/AuthNav.jsx';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selector.js';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const isHome = location.pathname === ROUTES.HOME;
  return (
    <header className={clsx(styles['header'], isHome && styles['home'])}>
      <Container>
        <nav
          className={clsx(
            styles['nav-list'],
            isHome ? styles['nav-list-home'] : styles['nav-list-other'],
          )}
        >
          <Logo location={isHome} />
          <Nav location={isHome} />
          {!isLoggedIn ? (
            <AuthNav location={isHome} />
          ) : (
            <UserNav location={isHome} />
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
