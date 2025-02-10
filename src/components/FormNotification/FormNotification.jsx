import styles from './FormNotification.module.css';

const FormNotification = ({ message, style }) => {
  return <div className={styles[style]}>{message}</div>;
};

export default FormNotification;
