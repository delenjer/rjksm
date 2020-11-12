import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../store/store';

export const Favorite = () => {
  const collections = useSelector(state => selectors.getCollection(state));
  const favorite = useSelector(state => selectors.getFavorite(state));

  return (
    <div className="wrapper">
      {
        collections.artObjects !== undefined && collections.artObjects
          .filter(item => favorite.includes(item.objectNumber))
          .map(favoriteItem => (
            <p>{favoriteItem.title}</p>
          ))
      }
    </div>
  );
};
