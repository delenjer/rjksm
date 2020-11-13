import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as selectors from '../store/store';

export const Favorite = () => {
  const collections = useSelector(state => selectors.getCollection(state));
  const favorite = useSelector(state => selectors.getFavorite(state));

  return (
    <section className="details">
      <div className="wrapper">
        <Link
          to="/"
          className="back"
        >
          <span className="icon-point-left icon" />
          Back
        </Link>

        {
          collections.artObjects !== undefined && collections.artObjects
            .filter(item => favorite.includes(item.objectNumber))
            .map(favoriteItem => (
              <article
                key={favoriteItem.objectNumber}
                className="favorite"
              >
                <h1 className="details__title favorite__title">
                  {favoriteItem.title}
                </h1>

                <img
                  src={favoriteItem.webImage.url}
                  alt="img"
                  className="favorite__img"
                />
              </article>
            ))
        }
      </div>
    </section>
  );
};
