import styles from './Container.module.css';

const Container = ({ children, style='container32' }) => {
  return <div className={styles[style]}>{children}</div>;
};

export default Container;
