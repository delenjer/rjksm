import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as selectors from '../store/store';
import { loadCollections } from '../store/thunk/thunk';
import { setCurrentPage } from '../store/collectionsReducer/actions';

import { CollectionList } from '../CollectionList/CollectionList';
import { Footer } from '../Footer/Footer';

export const Collections = () => {
  const collections = useSelector(state => selectors.getCollection(state));
  const pageSize = useSelector(state => state.collections.pageSize);
  const totalPicturesCount = useSelector(state => state
    .collections.totalPicturesCount);
  const currentPage = useSelector(state => state.collections.currentPage);
  const isLoading = useSelector(state => selectors.getLoading(state));
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(totalPicturesCount / pageSize);

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page.selected + 1));
  };

  useEffect(() => {
    dispatch(loadCollections(currentPage, pageSize));
  }, [currentPage, pageSize]);

  return (
    <>
      {
        !isLoading.isLoading ? (
          <>
            <main className="wrapper">
              <CollectionList {...collections} />
            </main>
          </>
        ) : (
          <div className="loader">Loading...</div>
        )
      }

      <Footer
        {...isLoading}
        handlePageClick={handlePageClick}
        pagesCount={pagesCount}
        pageSize={pageSize}
      />
    </>
  );
};
