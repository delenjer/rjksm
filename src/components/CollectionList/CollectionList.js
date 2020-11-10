import React from 'react';
import PropTypes from 'prop-types';

import { CollectionItem } from '../CollectionItem/CollectionItem';

export const CollectionList = ({ artObjects }) => (
  <section className="collection">
    <div className="collection__list">
      {
        artObjects !== undefined && artObjects.map(art => (
          <CollectionItem key={art.id} art={art} />
        ))
      }
    </div>
  </section>
);

CollectionList.propTypes = {
  artObjects: PropTypes.arrayOf(PropTypes.any),
};

CollectionList.defaultProps = {
  artObjects: undefined,
};
