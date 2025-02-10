import clsx from 'clsx';
import { useId } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { isNotEmpty } from '../../helpers/check/isNotEmpty.js';
import FormNotification from '../FormNotification/FormNotification.jsx';
import styles from './Input.module.css';

const Input = ({
  register,
  label,
  error,
  showNotify,
  style = '',
  type = 'text',
  children,
}) => {
  const labelId = useId();
  const isError = error && !!isNotEmpty(error[label]);
  const showNotifyKey = showNotify && showNotify(label);
  return (
    <label className={styles['input-container']} htmlFor={labelId}>
      <input
        type={type}
        className={clsx(
          styles[style],
          showNotifyKey ? (!isError ? styles['success'] : styles['error']) : '',
        )}
        id={labelId}
        {...register(label)}
        placeholder={label}
      />
      {children}
      <ErrorMessage
        errors={error}
        name={label}
        render={({ message }) => (
          <FormNotification message={message} style="error-input" />
        )}
      />
    </label>
  );
};

export default Input;
