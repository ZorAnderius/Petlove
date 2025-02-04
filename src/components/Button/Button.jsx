import styles from './Button.module.css';

const Button = ({ children, name, type = 'button', handleClick }) => {
  return (
    <button
      type={type}
      className={styles[name]}
      onClick={handleClick ? handleClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
