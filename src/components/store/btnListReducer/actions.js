export const SET_BUTTON_LIST = 'SET_BUTTON_LIST';
export const SET_BUTTON_TEXT = 'SET_BUTTON_TEXT';

export const setButtonList = btnList => ({
  type: SET_BUTTON_LIST,
  btnList,
});

export const setButtonText = text => ({
  type: SET_BUTTON_TEXT,
  text,
});
