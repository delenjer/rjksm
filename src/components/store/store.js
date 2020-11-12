import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import thunk from 'redux-thunk';

/*eslint-disable */
import collectionsReducer, * as selectorsCollections from './collectionsReducer/index';
import loadReducer, * as selectorsIsLoading from './loadReducer/index';
import infoReducer, * as selectorsInfo from './infoReducer/index';
import btnListReducer, * as selectorsBtnList from './btnListReducer/index';
/* eslint-enable */

const getCollections = state => selectorsCollections
  .getCollections(state.collections);

export const getLoading = state => selectorsIsLoading
  .getLoading(state.isLoading);

export const getInfo = state => selectorsInfo
  .getInfo(state.info);

export const getBtnList = (state) => {
  const x = selectorsBtnList.getBtnList(state.btnList);

  x.btnList.forEach((item) => {
    // console.log(+item.innerHTML === x.btnText);

    if (+item.innerHTML === x.btnText) {
      item.classList.add('active-btn');
    } else {
      item.classList.remove('active-btn');
    }
  });
};

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
  info: infoReducer,
  btnList: btnListReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
