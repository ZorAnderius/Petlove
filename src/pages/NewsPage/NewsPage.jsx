import { useEffect } from 'react';
import styles from './NewsPage.module.css';
import { useDispatch } from 'react-redux';
import { getNews } from '../../redux/news/operation.js';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  });

  return (
    <main>
      <h1 className={styles}>News Page</h1>
    </main>
  );
};

export default NewsPage;
