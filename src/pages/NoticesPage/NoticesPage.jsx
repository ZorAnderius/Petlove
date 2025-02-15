import Container from '../../components/Container/Container.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Section from '../../components/Section/Section.jsx';
import Title from '../../components/Title/Title.jsx';
import styles from './NoticesPage.module.css';

const NoticesPage = () => {
  return (
    <main className={styles['notices-main']}>
      <Section style="main-section">
        <Container style="container64">
          <Title style="find-pet">Find your favorite pet</Title>
        </Container>

        <Section style="find-pet">
          <Container style="container32">
            <NoticesFilters />
          </Container>
        </Section>

        <Section style="find-pet">
          <Container style="container64">
            <div className={styles['notices-container']}>
              <NoticesList />
              <Pagination />
            </div>
          </Container>
        </Section>
      </Section>
    </main>
  );
};

export default NoticesPage;
