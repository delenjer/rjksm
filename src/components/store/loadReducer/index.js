import { SET_LOADING } from './actions';

const initialState = {
  isLoading: false,
};

export const getLoading = state => state;

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export default loadReducer;
