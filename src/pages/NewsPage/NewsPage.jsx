import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/news/operation.js';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SeachField.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import { getFilterValue } from '../../redux/news/slice.js';
import styles from './NewsPage.module.css';
import {
  selectCurrentPage,
  selectFilterValue,
  selectIsEmpty,
} from '../../redux/news/selector.js';
import NotFound from '../../components/NotFound/NotFound.jsx';

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);
  const filterValue = useSelector(selectFilterValue);
  const isEmpty = useSelector(selectIsEmpty);

  useEffect(() => {
    dispatch(getNews({ page, filterValue }));
  }, [page, filterValue, dispatch]);

  return (
    <main>
      <Section style="main-section">
        <Container style="container64">
          <div className={styles['news-container']}>
            <Title style="news-title">News</Title>
            <SearchField style="news_search" action={getFilterValue} />
            {isEmpty ? <NewsList style="news-container" /> : <NotFound />}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;
