import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../store/store';
import { loadInfo } from '../store/thunk/thunk';

export const Details = () => {
  const info = useSelector(state => selectors.getInfo(state));
  const isLoading = useSelector(state => selectors.getLoading(state));
  const dispatch = useDispatch();
  const { id } = useParams();
  const { artObject } = info;

  useEffect(() => {
    dispatch(loadInfo(id));
  }, []);

  return (
    <>
      {
        !isLoading.isLoading ? (
          <>
            {
              artObject !== undefined && (
                <section className="details">
                  <div className="wrapper">
                    <h1 className="details__title">{artObject.title}</h1>

                    <ul className="details__list">
                      {
                        artObject.principalMakers.map(detail => (
                          <>
                            <li className="details__item">
                              {detail.name}
                            </li>

                            <li className="details__item">
                              <span>Period of life:</span>

                              {detail.dateOfBirth}
                              {' - '}
                              {detail.dateOfDeath}
                            </li>
                          </>
                        ))
                      }

                      <li className="details__item">
                        <span>Dating:</span>
                        {artObject.dating.presentingDate}
                      </li>
                    </ul>

                    <article className="details__content">
                      <img
                        src={artObject.webImage.url}
                        alt="img"
                        className="details__img"
                      />

                      <p className="details__description">
                        {artObject.label.description}
                      </p>
                    </article>
                  </div>
                </section>
              )
            }
          </>
        ) : (
          <div className="loader">Loading...</div>
        )
      }
    </>
  );
};
