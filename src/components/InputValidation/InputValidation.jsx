import Icon from '../Icon/Icon.jsx';
import Input from '../Input/Input.jsx';
import styles from './InputValidation.module.css';

const InputValidation = ({
  register,
  label,
  required,
  style = '',
  type = 'text',
  children,
}) => {
  return (
    <Input
      type={type}
      label={label}
      style={style}
      register={register}
      required={required}
    >
      <div className={styles['icons-container']}>
        <Icon name="check" size={22} />
        <Icon name="cross-small" size={22} />
        {children}
      </div>
    </Input>
  );
};

export default InputValidation;
