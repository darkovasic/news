const initialState = {
  // countries: [
  //   { code: `GB`, label: `Great Britain` },
  //   { code: `US`, label: `United States` }
  // ],
  selectedCountry: 'GB'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      return { selectedCountry: action.payload };
    default:
      return state;
  }
};

export default rootReducer;