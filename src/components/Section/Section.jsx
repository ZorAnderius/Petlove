import styles from './Section.module.css';

const Section = ({ children, style = 'basic' }) => {
  return <section className={styles[style]}>{children}</section>;
};

export default Section;
