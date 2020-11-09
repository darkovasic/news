import { put, takeLatest, all, select } from 'redux-saga/effects';

const apiKey = 'edceed5839434a48900a6ca55786d793';

export const getCountry = (state) => state.country

function* fetchNews() {
  let country = yield select(getCountry);
  const json = yield fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
  ).then((response) => response.json());
  yield put({ type: "GET_NEWS_SUCCESS", json: json.articles });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}


export default function* rootSaga() {
  yield all([actionWatcher()]);
}