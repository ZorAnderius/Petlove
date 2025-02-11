import FormNotification from '../FormNotification/FormNotification.jsx';
import Icon from '../Icon/Icon.jsx';
import Input from '../Input/Input.jsx';
import styles from './InputValidation.module.css';

const InputValidation = ({
  register,
  label,
  error,
  showNotify,
  isPasswordsMatches,
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
      isPasswordsMatches={isPasswordsMatches}
      error={error}
      register={register}
    >
      <div className={styles['icons-container']}>
        {isError || isPasswordsMatches === 2 ? (
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
      {!isError &&
        showNotify(label) &&
        isPasswordsMatches === 2 &&
        label === 'confirmPassword' && (
          <FormNotification
            message={'Passwords do not matches'}
            style="password-error-notify"
          />
        )}
    </Input>
  );
};

export default InputValidation;
