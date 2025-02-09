import styles from './NotFound.module.css';

const NotFound = () => {
  return <div className={styles['not-found-container']}>
    <p className={styles['txt']}>Unfortunately, we didn&apos;t find what you were looking for.</p>
  </div>;
};

export default NotFound;
