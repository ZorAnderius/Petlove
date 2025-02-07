import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../../redux/news/operation.js';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SeachField.jsx';
import styles from './NewsPage.module.css';
import NewsList from '../../components/NewsList/NewsList.jsx';
import { getFilterValue } from '../../redux/news/slice.js';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  });

  return (
    <main>
      <Section>
        <Container>
          <div className={styles}>
            <Title>News</Title>
            <SearchField action={getFilterValue} />
            <NewsList />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default NewsPage;
