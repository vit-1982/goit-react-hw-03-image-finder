const fetchImageListWithQuery = (searchQuery, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18005761-f8db0c46c56ca66ea07f985e4&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .then((data) => data.hits);
};

export default {
  fetchImageListWithQuery,
};
