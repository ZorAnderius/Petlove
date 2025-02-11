import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { ROUTES } from '../../helpers/constants/ROUTES.js';
import { isNotEmpty } from '../../helpers/check/isNotEmpty.js';
import { registerSchema } from '../../helpers/validationSchema/registerSchema.js';
import Title from '../Title/Title.jsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import LinkBtn from '../LinkBtn/LinkBtn.jsx';
import InputValidation from '../InputValidation/InputValidation.jsx';
import styles from './RegistrationForm.module.css';
import { registerUser } from '../../redux/auth/operation.js';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = methods;
  const [isVisibleInput1, setIsVisibleInput1] = useState(false);
  const [isVisibleInput2, setIsVisibleInput2] = useState(false);
  const [isPasswordsMatches, setIsPasswordMatches] = useState(1);

  const isObjectNotEmpty = useMemo(() => isNotEmpty(errors), [errors]);

  const onSubmit = data => {
    if (isNotEmpty(data) && data.password !== data.confirmPassword) {
      setIsPasswordMatches(2);
      return;
    }
    setIsPasswordMatches(3);
    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    );
  };

  const handleToggleVisible = e => {
    e.currentTarget.dataset.value === 'btn1'
      ? setIsVisibleInput1(!isVisibleInput1)
      : setIsVisibleInput2(!isVisibleInput2);
  };

  const hasSubmitAndValue = label => {
    const value = watch(label);
    return !!((value === '' || value) && isSubmitted);
  };

  return (
    <div className={styles['register-container']}>
      <Title value={2} style="auth-form">
        Registration
      </Title>
      <p className={styles['auth-subtitle']}>
        Thank you for your interest in our platform.
      </p>
      <FormProvider {...methods}>
        <form
          className={clsx(
            styles['auth-form'],
            (isObjectNotEmpty ||
              isPasswordsMatches === 2 ||
              isPasswordsMatches === 3) &&
              styles['error'],
          )}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <InputValidation
            type="text"
            label="name"
            style="auth-input"
            register={register}
            showNotify={hasSubmitAndValue}
            error={errors}
          />
          <InputValidation
            type="email"
            label="email"
            style="auth-input"
            register={register}
            showNotify={hasSubmitAndValue}
            error={errors}
          />
          <InputValidation
            type={isVisibleInput1 ? 'text' : 'password'}
            style="auth-input"
            label="password"
            isPasswordsMatches={isPasswordsMatches}
            register={register}
            showNotify={hasSubmitAndValue}
            error={errors}
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
          </InputValidation>
          <InputValidation
            type={isVisibleInput2 ? 'text' : 'password'}
            label="confirmPassword"
            isPasswordsMatches={isPasswordsMatches}
            style="auth-input"
            register={register}
            showNotify={hasSubmitAndValue}
            error={errors}
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
          </InputValidation>

          <Button type="submit" style="auth-submit">
            Registration
          </Button>
        </form>
      </FormProvider>
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
