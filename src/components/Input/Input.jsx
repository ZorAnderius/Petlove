import { useId } from 'react';
import styles from './Input.module.css';
import Icon from '../Icon/Icon.jsx';

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
      <div className={styles['icons-container']}>
        <Icon name="check" size={22} />
        <Icon name="cross-small" size={22} />
        {children}
      </div>
    </label>
  );
};

export default Input;
