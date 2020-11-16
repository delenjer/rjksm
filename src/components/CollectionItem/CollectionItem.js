import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CollectionItem = ({ art }) => {
  const [isLoadingImg, setLoadingImg] = useState(false);
  const highSrc = art.headerImage.url;

  useEffect(() => {
    loadHighRes(highSrc);
  }, [highSrc]);

  const loadHighRes = (imageSrc) => {
    const image = new Image();

    image.onload = () => {
      setLoadingImg(true);
    };

    image.src = imageSrc;
  };

  return (
    <>
      {
        isLoadingImg ? (
          <Link
            to={`/${art.objectNumber}/modal`}
            className="collection__item"
            style={{ backgroundImage: `url(${highSrc})` }}
          >
            <p className="collection__text">{art.longTitle}</p>
          </Link>
        ) : (
          <Link
            to={`/${art.objectNumber}/modal`}
            className="collection__item"
            style={{ backgroundImage: `url(./img/unnamed.png)` }}
          />
        )
      }
    </>
  );
};

CollectionItem.propTypes = {
  art: PropTypes.objectOf(PropTypes.any).isRequired,
};
