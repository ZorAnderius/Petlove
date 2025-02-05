import styles from './Section.module.css';

const Section = ({ children, name = 'basic' }) => {
  return <section className={styles[name]}>{children}</section>;
};

export default Section;
