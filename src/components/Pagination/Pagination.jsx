import ReactPaginate from 'react-paginate';
import Button from '../Button/Button.jsx';
import styles from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage} from '../../redux/news/selector.js';
import { setPage } from '../../redux/news/slice.js';
import clsx from 'clsx';

const Pagination = ({ totalPages }) => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  if (totalPages <= 1) return null;

  const handleChangePage = value => {
    if (value) dispatch(setPage(value));
  };
  const showBreak = currentPage > 2 && currentPage <= totalPages;

  return (
      <div className={styles['pagination-container']}>
        <Button
          type="button"
          style="pagination-btn"
          disable={currentPage === 1}
          handleClick={() => handleChangePage(1)}
        >
          <p className={styles['pagination-btn-txt']}>{'<<'}</p>
        </Button>
        {showBreak && <div className={styles['left-break']}>...</div>}
        <ReactPaginate
          breakLabel="..."
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          nextLabel=">"
          previousLabel="<"
          renderOnZeroPageCount={null}
          forcePage={currentPage - 1}
          onPageChange={e => handleChangePage(e.selected + 1)}
          containerClassName={styles['navig-container']}
          pageClassName={styles['other-page']}
          nextClassName={styles['arrow-btn']}
          previousClassName={clsx(
            styles['arrow-btn'],
            showBreak && styles['move-left'],
          )}
          disabledClassName={styles['disabled-btn']}
          activeClassName={styles['active-page']}
          breakClassName={styles['break-dots']}
        />
        <Button
          type="button"
          style="pagination-btn"
          disable={currentPage === totalPages}
          handleClick={() => handleChangePage(totalPages)}
        >
          <p className={styles['pagination-btn-txt']}>{'>>'}</p>
        </Button>
      </div>
  );
};

export default Pagination;
