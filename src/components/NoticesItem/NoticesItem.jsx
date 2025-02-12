import styles from './NoticesItem.module.css';

const NoticesItem = ({ notice }) => {
  return <p className={styles}>{notice.title}</p>;
};

export default NoticesItem;
