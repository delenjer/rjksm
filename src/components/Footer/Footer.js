import React from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setLoadItemsOnPage } from '../store/collectionsReducer/actions';

export const Footer = (
  {
    isLoading,
    pagesCount,
    handlePageClick,
  },
) => {
  const dispatch = useDispatch();

  const btn = document.querySelectorAll('.load-item__btn');

  const handleLoadItem = (e) => {
    btn.forEach((item) => {
      if (item === e.target) {
        item.classList.add('active-btn');
      } else {
        item.classList.remove('active-btn');
      }
    });

    dispatch(setLoadItemsOnPage(+e.target.innerHTML));
  };

  return (
    <footer
      className={isLoading
        ? 'hidden footer'
        : 'footer'
      }
    >
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />

      <div className="load-items">
        <button
          type="button"
          className="load-items__btn active-btn"
          onClick={handleLoadItem}
        >
          10
        </button>

        <button
          type="button"
          className="load-items__btn"
          onClick={handleLoadItem}
        >
          50
        </button>

        <button
          type="button"
          className="load-items__btn"
          onClick={handleLoadItem}
        >
          100
        </button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pagesCount: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};
