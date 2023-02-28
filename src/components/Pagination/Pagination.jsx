import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const Paginate = ({ total, handlePageClick, page }) => {
  return (
    <div>
      <div>
        <ReactPaginate
          pageCount={total}
          onPageChange={handlePageClick}
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          //   pageClassName={styles.page}
          //   pageLinkClassName={styles.link}
          //   previousClassName={styles.page}
          //   previousLinkClassName={styles.link}
          //   nextClassName={styles.page}
          //   nextLinkClassName={styles.link}
          breakLabel="..."
          //   breakClassName={styles.page}
          //   breakLinkClassName={styles.link}
          //   containerClassName={styles.paginate}
          //   activeClassName={styles.active}
          renderOnZeroPageCount={null}
          //   disabledClassName={styles.disable}
          initialPage={page - 1}
        />
      </div>
    </div>
  );
};

Paginate.propTypes = {
  total: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Paginate;
