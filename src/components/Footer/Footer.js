import React from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import { setLoadItem } from '../store/collectionsReducer/actions';

export const Footer = ({ isLoading, pagesCount, handlePageClick }) => {
  const dispatch = useDispatch();

  const handleLoadItem = (e) => {
    dispatch(setLoadItem(+e.target.innerHTML));
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

      <div className="load-item">
        <button
          type="button"
          className="load-item__btn"
          onClick={handleLoadItem}
        >
          10
        </button>

        <button
          type="button"
          className="load-item__btn"
          onClick={handleLoadItem}
        >
          50
        </button>

        <button
          type="button"
          className="load-item__btn"
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
