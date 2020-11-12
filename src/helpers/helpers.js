export const addLike = (id, favorite, setFavorite) => {
  const hasLike = favorite.findIndex(item => item === id);

  if (hasLike === -1) {
    setFavorite([...favorite, id]);
  } else {
    setFavorite([...favorite.filter(item => item !== id)]);
  }
};
