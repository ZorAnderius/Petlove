import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/news/operation.js';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SeachField.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import { getFilterValue, setPage } from '../../redux/news/slice.js';
import styles from './NewsPage.module.css';
import {
  selectCurrentPage,
  selectFilterValue,
  selectIsEmpty,
  selectTotalPage,
} from '../../redux/news/selector.js';
import NotFound from '../../components/NotFound/NotFound.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

const NewsPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPage);
  const filterValue = useSelector(selectFilterValue);
  const isEmpty = useSelector(selectIsEmpty);

  const handlePage = value => {
    dispatch(setPage(value));
  };

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
            {isEmpty ? (
              <div className={styles['list-wrap']}>
                <NewsList />
                <Pagination
                  totalPages={totalPages}
                  page={page}
                  handlePage={handlePage}
                />
              </div>
            ) : (
              <NotFound />
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;
