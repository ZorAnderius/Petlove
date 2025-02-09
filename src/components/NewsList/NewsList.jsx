import NewsItem from '../NewsItem/NewsItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { useSelector } from 'react-redux';
import { selectNews, selectTotalPage } from '../../redux/news/selector.js';
import styles from './NewsList.module.css';

const NewsList = ({ style }) => {
  const news = useSelector(selectNews);
  const totalPages = useSelector(selectTotalPage);

  return (
    <div className={styles[style]}>
      <ul className={styles['news-list']}>
        {!!news &&
          news.map(newItem => (
            <li key={newItem._id} className={styles['news-item']}>
              <NewsItem newItem={newItem} />
            </li>
          ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={1} />
    </div>
  );
};

export default NewsList;
