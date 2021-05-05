const initialState = {
  loading: false,
  news: [],
  country: 'GB'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      return {
        ...state,
        country: action.payload ? action.payload.toUpperCase() : 'GB',
      };
    case "GET_NEWS":
      return { ...state, news: [], loading: true };
    case 'GET_NEWS_SUCCESS':
      return { ...state, news: action.json, loading: false }
    case "GET_NEWS_BY_CATEGORY":
      return { ...state, news: [], loading: true };      
    case 'GET_NEWS_BY_CATEGORY_SUCCESS':
      return { ...state, news: action.json, loading: false }     
    case "GET_NEWS_BY_QUERY":
      return { ...state, news: [], loading: true };      
    case 'GET_NEWS_BY_QUERY_SUCCESS':     
      return { ...state, news: action.json, loading: false }               
    default:
      return state;
  }
};

export default rootReducer;