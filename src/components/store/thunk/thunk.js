import { getImg } from '../../../api/api';
import { setCollections } from '../collectionsReducer/actions';
import { setLoading } from '../loadReducer/actions';

export const loadCollections = (currentPage, pageSize) => (dispatch) => {
  dispatch(setLoading(true));
  getImg(currentPage, pageSize).then((data) => {
    dispatch(setCollections(data));
    dispatch(setLoading(false));
  });
};
