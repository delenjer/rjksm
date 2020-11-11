import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CollectionItem = ({ art }) => (
  <Link
    to={`/${art.objectNumber}/modal`}
    className="collection__item"
    style={{ backgroundImage: `url(${art.headerImage.url})` }}
  >
    <p className="collection__text">{art.longTitle}</p>
  </Link>
);

CollectionItem.propTypes = {
  art: PropTypes.objectOf(PropTypes.any).isRequired,
};
