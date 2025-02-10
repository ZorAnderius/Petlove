import { FormProvider, useForm } from 'react-hook-form';
import {  useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import { loginSchema } from '../../helpers/validationSchema/loginSchema.js';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import Title from '../Title/Title.jsx';
import Icon from '../Icon/Icon.jsx';
import InputValidation from '../InputValidation/InputValidation.jsx';
import styles from './LoginForm.module.css';
import clsx from 'clsx';
import { isNotEmpty } from '../../helpers/check/isNotEmpty.js';

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = methods;


  const [isVisible, setIsVisible] = useState(false);

  const isObjectNotEmpty = useMemo(() => isNotEmpty(errors), [errors]);

  const handleToggleBtn = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = data => {
    console.log(data);
  };

  const hasSubmitAndValue = key => {
    return !!((watch(key) === '' || watch(key)) && isSubmitted);
  };

  return (
    <div className={styles['login-container']}>
      <Title style="auth-form">Log in</Title>
      <p className={styles['auth-subtext']}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <FormProvider {...methods}>
        <form
          className={clsx(
            styles['auth-form'],
            isObjectNotEmpty && styles['error'],
          )}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <InputValidation
            type="email"
            label="email"
            style="auth-input"
            register={register}
            showNotify={hasSubmitAndValue}
            error={errors}
          />
          <InputValidation
            type={isVisible ? 'text' : 'password'}
            register={register}
            label="password"
            showNotify={hasSubmitAndValue}
            style="auth-input"
            error={errors}
          >
            <Button
              type="button"
              style="icon-btn"
              handleClick={handleToggleBtn}
            >
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
      </FormProvider>
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
