import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../store/store';

export const Header = () => {
  const favorite = useSelector(state => selectors.getFavorite(state));

  return (
    <header className="header">
      <div className="header__wrap">
        <Link
          to="/"
          className="header__logo"
        >
          <img
            src="./img/logo.svg"
            alt="Logo"
            className="header__logo-img"
          />
        </Link>

        <Link
          to="/favorite"
          className="header__link"
        >
          Favorite

          <span className="header__link--count">{favorite.length}</span>
        </Link>
      </div>
    </header>
  );
};
