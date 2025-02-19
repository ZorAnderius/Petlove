import NewsItem from '../NewsItem/NewsItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/news/slice.js';
import {
  selectCurrentPage,
  selectNews,
  selectTotalPage,
} from '../../redux/news/selector.js';
import styles from './NewsList.module.css';

const NewsList = ({ style }) => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPage);

  const handlePage = value => {
    dispatch(setPage(value));
  };

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
      <Pagination
        totalPages={totalPages}
        page={page}
        handlePage={handlePage}
      />
    </div>
  );
};

export default NewsList;
