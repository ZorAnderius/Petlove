import { useSelector } from 'react-redux';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import styles from './NoticesList.module.css';
import { selectNotices } from '../../redux/notices/selector.js';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  
  return notices ? (
    <ul className={styles['notices-list']}>
      {notices?.map(notice => (
        <li key={notice._id} className={styles['notices-item']}>
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
