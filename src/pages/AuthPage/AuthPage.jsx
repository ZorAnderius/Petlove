import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import PetBlock from '../../components/PetBlock/PetBlock.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const location = useLocation();
  return (
    <main>
      <Section>
        <Container>
          <div className={styles['auth-container']}>
            <PetBlock location={location.pathname === ROUTES.LOGIN} />
            {location.pathname === ROUTES.LOGIN && <LoginForm />}
            {location.pathname === ROUTES.REGISTER && <RegistrationForm />}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default AuthPage;
