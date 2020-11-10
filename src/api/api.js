// eslint-disable-next-line max-len
export const getImg = (currentPage, pageSize) => fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=a7LmWCcH&ps=${pageSize}&p=${currentPage}`)
  .then(response => response.json())
  .then(data => data);

// &ps=50&p=1
