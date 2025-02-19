import ReactPaginate from 'react-paginate';
import Button from '../Button/Button.jsx';
import styles from './Pagination.module.css';
import clsx from 'clsx';

const Pagination = ({ totalPages, page, handlePage }) => {
  if (totalPages <= 1) return null;

  const handleChangePage = value => {
    if (value) handlePage(value);
  };
  const showBreak = page > 2 && page <= totalPages;

  return (
    <div className={styles['pagination-container']}>
      <Button
        type="button"
        style="pagination-btn"
        disable={page === 1}
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
        forcePage={page - 1}
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
        disable={page === totalPages}
        handleClick={() => handleChangePage(totalPages)}
      >
        <p className={styles['pagination-btn-txt']}>{'>>'}</p>
      </Button>
    </div>
  );
};

export default Pagination;
