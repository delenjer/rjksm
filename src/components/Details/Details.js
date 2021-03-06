import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
                    <Link
                      to="/"
                      className="back"
                    >
                      <span className="icon-point-left icon" />
                      Back
                    </Link>

                    <h1 className="details__title">{artObject.title}</h1>

                    <ul className="details__list">
                      {
                        artObject.principalMakers.map(detail => (
                          <div key={detail.dateOfBirth}>
                            <li className="details__item">
                              <span className="details__item--title">
                                Author:
                              </span>

                              {detail.name}
                            </li>

                            <li className="details__item">
                              <span className="details__item--title">
                                Period of life:
                              </span>

                              {detail.dateOfBirth}
                              {' - '}
                              {detail.dateOfDeath}
                            </li>
                          </div>
                        ))
                      }

                      <li className="details__item">
                        <span className="details__item--title">
                          Dating:
                        </span>

                        {artObject.dating.presentingDate}
                      </li>

                      <li className="details__item">
                        <span className="details__item--title">
                          Way of drawing:
                        </span>

                        {artObject.physicalMedium}
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
