import styles from './Button.module.css';

const Button = ({
  children,
  type = 'button',
  style = '',
  value,
  handleClick,
}) => {
  return value ? (
    <button
      type={type}
      className={styles[style]}
      onClick={handleClick}
      data-value={value}
    >
      {children}
    </button>
  ) : (
    <button type={type} className={styles[style]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
