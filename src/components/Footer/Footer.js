import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setLoadItemsOnPage } from '../store/collectionsReducer/actions';
import { setButtonList, setButtonText } from '../store/btnListReducer/actions';
import * as selectors from '../store/store';

export const Footer = (
  {
    isLoading,
    pagesCount,
    handlePageClick,
  },
) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const getBtnList = useSelector(state => selectors.getBtnList(state));

  useEffect(() => {
    dispatch(setButtonList(document.querySelectorAll('.load-items__btn')));
  }, []);

  const handleLoadItem = (e) => {
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
          onClick={(e) => {
            handleLoadItem(e);
            dispatch(setButtonText(e.target.innerHTML));
          }}
        >
          10
        </button>

        <button
          type="button"
          className="load-items__btn"
          onClick={(e) => {
            handleLoadItem(e);
            dispatch(setButtonText(e.target.innerHTML));
          }}
        >
          50
        </button>

        <button
          type="button"
          className="load-items__btn"
          onClick={(e) => {
            handleLoadItem(e);
            dispatch(setButtonText(e.target.innerHTML));
          }}
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
