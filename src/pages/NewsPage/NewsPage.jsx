import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../../redux/news/operation.js';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SeachField.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import { getFilterValue } from '../../redux/news/slice.js';
import styles from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  });

  return (
    <main>
      <Section style='news-section'>
        <Container style="container64">
          <div className={styles['news-container']}>
            <Title style="news-title">News</Title>
            <SearchField style="news_search" action={getFilterValue} />
            <NewsList style="news-container" />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;
