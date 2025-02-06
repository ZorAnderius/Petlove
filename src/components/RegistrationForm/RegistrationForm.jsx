import { useForm } from 'react-hook-form';
import Title from '../Title/Title.jsx';
import styles from './RegistrationForm.module.css';
import { useState } from 'react';
import Input from '../Input/Input.jsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import { ROUTES } from '../../helpers/constants/ROUTES.js';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const [isVisibleInput1, setIsVisibleInput1] = useState(false);
  const [isVisibleInput2, setIsVisibleInput2] = useState(false);

  const onSubmit = data => {
    console.log(data);
  };

  const handleToggleVisible = e => {
    e.currentTarget.dataset.value === 'btn1'
      ? setIsVisibleInput1(!isVisibleInput1)
      : setIsVisibleInput2(!isVisibleInput2);
  };

  return (
    <div className={styles['register-container']}>
      <Title value={2} style="auth-form">
        Registration
      </Title>
      <p className={styles['auth-subtitle']}>
        Thank you for your interest in our platform.
      </p>
      <form className={styles['auth-form']} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="name"
          style="auth-input"
          register={register}
          required
        />
        <Input
          type="email"
          label="email"
          style="auth-input"
          register={register}
          required
        />
        <Input
          type={isVisibleInput1 ? 'text' : 'password'}
          style="auth-input"
          label="password"
          register={register}
          required
        >
          <Button
            type="button"
            style="icon-btn"
            value="btn1"
            handleClick={handleToggleVisible}
          >
            {isVisibleInput1 ? (
              <Icon name="eye" size={22} />
            ) : (
              <Icon name="eye-off" size={22} />
            )}
          </Button>
        </Input>
        <Input
          type={isVisibleInput2 ? 'text' : 'password'}
          label="Confirm password"
          style="auth-input"
          register={register}
          required
        >
          <Button
            type="button"
            value="btn2"
            style="icon-btn"
            handleClick={handleToggleVisible}
          >
            {isVisibleInput2 ? (
              <Icon name="eye" size={22} />
            ) : (
              <Icon name="eye-off" size={22} />
            )}
          </Button>
        </Input>

        <Button type="submit" style="auth-submit">
          Registration
        </Button>
      </form>
      <div className={styles['auth-nav-container']}>
        <p>Already have an account? </p>
        <LinkBtn direction={ROUTES.LOGIN} type="auth-link">
          Login
        </LinkBtn>
      </div>
    </div>
  );
};

export default RegistrationForm;
