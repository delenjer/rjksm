import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CollectionItem = ({ art }) => {
  const [isLoading, setLoading] = useState(false);
  const highSrc = art.headerImage.url;

  useEffect(() => {
    loadHighRes(highSrc);
  }, [highSrc]);

  const loadHighRes = (imageSrc) => {
    const image = new Image();

    image.onload = () => {
      setLoading(true);
    };

    image.src = imageSrc;
  };

  return (
    <Link
      to={`/${art.objectNumber}/modal`}
      className="collection__item"
      style={isLoading
        ? { backgroundImage: `url(${highSrc})` }
        : { backgroundImage: `url(./img/unnamed.png)` }
      }
    >
      <p className="collection__text">{art.longTitle}</p>
    </Link>
  );
};

CollectionItem.propTypes = {
  art: PropTypes.objectOf(PropTypes.any).isRequired,
};
