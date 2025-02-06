import styles from './Title.module.css';

const Title = ({ value = 1, style = '', children }) => {
  switch (value) {
    case 1:
      return <h1 className={styles[style]}>{children}</h1>;
    case 2:
      return <h2 className={styles[style]}>{children}</h2>;
    case 3:
      return <h3 className={styles[style]}>{children}</h3>;
    case 4:
      return <h4 className={styles[style]}>{children}</h4>;
    case 5:
      return <h5 className={styles[style]}>{children}</h5>;
    case 6:
      return <h6 className={styles[style]}>{children}</h6>;

    default:
      return null;
  }
};

export default Title;
