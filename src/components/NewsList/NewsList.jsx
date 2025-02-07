import NewsItem from '../NewsItem/NewsItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { useSelector } from 'react-redux';
import { selectNews } from '../../redux/news/selector.js';

const NewsList = () => {
  const news = useSelector(selectNews);
  return (
    <>
      <ul>
        {!!news &&
          news.map(newItem => (
            <li key={newItem._id}>
              <NewsItem newItem={newItem} />
            </li>
          ))}
      </ul>
      <Pagination />
    </>
  );
};

export default NewsList;
