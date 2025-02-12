import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import styles from './NoticesList.module.css';

const NoticesList = ({ notices }) => {
  return notices ? (
    <ul>
      {notices?.map(notice => (
        <li key={notice._id}>
          <NoticesItem notice={notice} />
        </li>
      ))}
    </ul>
  ) : (
    <div className={styles['no-notice-container']}>
      <p className={styles['no-notices-txt']}>
        Oops, <span>looks like there aren&apos;t any furries</span> on our
        adorable page yet. Do not worry! View your pets on the &quot;find your
        favorite pet&quot; page and add them to your favorites.
      </p>
    </div>
  );
};

export default NoticesList;
