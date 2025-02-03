import AuthNav from "../AuthNav/AuthNav.jsx";
import Nav from "../Nav/Nav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles}>
      <nav>
        <Nav />
        <AuthNav />
        <UserNav />
      </nav>
    </header>
  );
};

export default Header;
