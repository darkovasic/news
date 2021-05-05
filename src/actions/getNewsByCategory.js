const getNewsByCategory = (categories) => ({
  type: 'GET_NEWS_BY_CATEGORY',
  categories
});

export default getNewsByCategory;