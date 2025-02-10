import FormNotification from '../FormNotification/FormNotification.jsx';
import Icon from '../Icon/Icon.jsx';
import Input from '../Input/Input.jsx';
import styles from './InputValidation.module.css';

const InputValidation = ({
  register,
  label,
  error,
  showNotify,
  style = '',
  type = 'text',
  children,
}) => {
  const isError = error[label];
  return (
    <Input
      type={type}
      label={label}
      style={style}
      showNotify={showNotify}
      error={error}
      register={register}
    >
      <div className={styles['icons-container']}>
        {isError ? (
          <Icon name="cross-small" size={22} />
        ) : (
          showNotify(label) && <Icon name="check" size={22} />
        )}
        {children}
      </div>
      {!isError && showNotify(label) && label === 'password' && (
        <FormNotification
          message={'Password is secure'}
          style="password-notify"
        />
      )}
    </Input>
  );
};

export default InputValidation;
