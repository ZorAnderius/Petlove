import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectNoticesTotalPages,
} from '../../redux/notices/selector.js';
import { setPage } from '../../redux/notices/slice.js';
import Container from '../../components/Container/Container.jsx';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Section from '../../components/Section/Section.jsx';
import Title from '../../components/Title/Title.jsx';
import styles from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectNoticesTotalPages);

  const handleChangePage = value => {
    dispatch(setPage(value));
  };

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
              <Pagination
                page={page}
                totalPages={totalPages}
                handlePage={handleChangePage}
              />
            </div>
          </Container>
        </Section>
      </Section>
    </main>
  );
};

export default NoticesPage;
