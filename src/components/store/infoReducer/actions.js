export const SET_INFO = 'SET_INFO';
export const SET_BUTTON = 'SET_BUTTON';

export const setInfo = info => ({
  type: SET_INFO,
  info,
});

export const setButton = text => ({
  type: SET_BUTTON,
  text,
});
