import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import { useSelector, useDispatch } from 'react-redux';

import { Home } from '../Home/Home';
import * as selectors from '../store/store';
import { loadInfo } from '../store/thunk/thunk';

export const PopupInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const [isClick, setClick] = useState(true);
  const info = useSelector(state => selectors.getInfo(state));
  const isLoading = useSelector(state => selectors.getLoading(state));
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { artObject } = info;

  useEffect(() => {
    dispatch(loadInfo(id));
  }, []);

  return (
    <>
      <Home />

      <ModalRoute
        onBackdropClick={() => setClick(true)}
        path="/:id"
        parentPath="/"
      >
        {
          artObject !== undefined && (
            <section className="popup">
              {
                isLoading.isLoading ? (
                  <div className="load-spinner">
                    <p className="load-spinner__spinner">Loading...</p>
                  </div>
                ) : (
                  <>
                    <article className="popup__info">
                      <img
                        src={artObject.webImage.url}
                        alt="img"
                        className="popup__img"
                      />

                      <h1 className="popup__title">{artObject.title}</h1>

                      <p className="popup__description">
                        {artObject.description}
                      </p>
                    </article>

                    <div className="popup__btn-box">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="popup__btn popup__btn--favorite"
                      >
                        Add to fav list
                      </button>

                      <div className="popup__btn-box--wrapper">
                        <Link
                          to={`/${artObject.objectNumber}`}
                          onClick={() => {}}
                          className="popup__btn popup__btn"
                        >
                          View more
                          <br />
                          details
                        </Link>

                        <button
                          type="button"
                          onClick={() => history.goBack()}
                          className="popup__btn"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )
              }
            </section>
          )
        }
      </ModalRoute>
    </>
  );
};
