export const SET_COLLECTIONS = 'SET_COLLECTIONS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOAD_ITEM = 'SET_LOAD_ITEM';

export const setCollections = collections => ({
  type: SET_COLLECTIONS,
  collections,
});

export const setCurrentPage = num => ({
  type: SET_CURRENT_PAGE,
  num,
});

export const setLoadItem = num => ({
  type: SET_LOAD_ITEM,
  num,
});
