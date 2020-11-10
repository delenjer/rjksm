import { SET_COLLECTIONS, SET_CURRENT_PAGE, SET_LOAD_ITEM } from './actions';

const initialState = {
  collections: [],
  pageSize: 10,
  totalPicturesCount: 10000,
  currentPage: 1,
};

export const getCollections = state => state;

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.collections,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.num,
      };

    case SET_LOAD_ITEM:
      return {
        ...state,
        pageSize: action.num,
      };

    default:
      return state;
  }
};

export default collectionsReducer;
