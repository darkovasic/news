const changeCountryAction = country => {
  return {
    type: 'CHANGE_COUNTRY',
    payload: country
  }
}

export default changeCountryAction;