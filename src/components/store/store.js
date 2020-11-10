import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import thunk from 'redux-thunk';

// eslint-disable-next-line max-len
import collectionsReducer, * as selectorsCollections from './collectionsReducer/index';
import loadReducer, * as selectorsIsLoading from './loadReducer/index';

const getCollections = state => selectorsCollections
  .getCollections(state.collections);

export const getLoading = state => selectorsIsLoading
  .getLoading(state.isLoading);

export const getCollection = createSelector(
  [getCollections],
  (collection) => {
    const { collections } = collection;

    if (collections === undefined) {
      return [];
    }

    return collections;
  },
);

const rootReducer = combineReducers({
  collections: collectionsReducer,
  isLoading: loadReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
