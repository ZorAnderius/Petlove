import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Title from '../Title/Title.jsx';
import Icon from '../Icon/Icon.jsx';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import InputValidation from '../InputValidation/InputValidation.jsx';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleBtn = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className={styles['login-container']}>
      <Title value={2} style="auth-form">
        Log in
      </Title>
      <p className={styles['auth-subtext']}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <form className={styles['auth-form']} onSubmit={handleSubmit(onSubmit)}>
        <InputValidation
          type="email"
          label="email"
          style="auth-input"
          register={register}
          required
        />
        <InputValidation
          type={isVisible ? 'text' : 'password'}
          register={register}
          label="password"
          style="auth-input"
          required
        >
          <Button type="button" style="icon-btn" handleClick={handleToggleBtn}>
            {isVisible ? (
              <Icon name="eye" size={22} />
            ) : (
              <Icon name="eye-off" size={22} />
            )}
          </Button>
        </InputValidation>

        <Button type="submit" style="auth-submit">
          Log In
        </Button>
      </form>
      <div className={styles['auth-nav-container']}>
        <p>Don’t have an account? </p>
        <LinkBtn direction={ROUTES.REGISTER} type="auth-link">
          Register
        </LinkBtn>
      </div>
    </div>
  );
};

export default LoginForm;
