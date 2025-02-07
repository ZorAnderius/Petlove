import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({
  register,
  label,
  required,
  style = '',
  type = 'text',
  children,
}) => {
  const labelId = useId();
  return (
    <label className={styles['input-container']} htmlFor={labelId}>
      <input
        type={type}
        className={styles[style]}
        id={labelId}
        {...register(label, { required })}
        placeholder={label}
      />
      {children}
    </label>
  );
};

export default Input;
