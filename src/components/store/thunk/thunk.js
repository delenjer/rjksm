import { getCollectionsPictures, getInfo } from '../../../api/api';
import { setCollections } from '../collectionsReducer/actions';
import { setInfo } from '../infoPopupReducer/actions';
import { setLoading } from '../loadReducer/actions';

export const loadCollections = (currentPage, pageSize) => (dispatch) => {
  dispatch(setLoading(true));
  getCollectionsPictures(currentPage, pageSize).then((data) => {
    dispatch(setCollections(data));
    dispatch(setLoading(false));
  });
};

export const loadInfo = id => (dispatch) => {
  dispatch(setLoading(true));
  getInfo(id).then((data) => {
    dispatch(setInfo(data));
    dispatch(setLoading(false));
  });
};
