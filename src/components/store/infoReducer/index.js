import { SET_INFO } from './actions';

export const getInfo = state => state;

const infoReducer = (info = [], action) => {
  switch (action.type) {
    case SET_INFO:
      return action.info;

    default:
      return info;
  }
};

export default infoReducer;
