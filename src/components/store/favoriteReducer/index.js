import { SET_FAVORITE } from './actions';

export const getFavorite = state => state;

const favoriteReducer = (favorite = [], action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return [
        ...favorite,
        action.id,
      ];

    default:
      return favorite;
  }
};

export default favoriteReducer;
