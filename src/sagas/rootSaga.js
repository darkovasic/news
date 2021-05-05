import { put, take, takeLatest, call, all, select, fork } from 'redux-saga/effects';

const apiBaseUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = 'edceed5839434a48900a6ca55786d793';

export const getCountry = (state) => state.country

function* fetchNews() {
  let country = yield select(getCountry);
  const json = yield fetch(
    `${apiBaseUrl}?country=${country}&apiKey=${apiKey}`
  ).then((response) => response.json());
  yield put({ type: "GET_NEWS_SUCCESS", json: json.articles });
}


function* fetchNewsByQuery(query) {
  let country = yield select(getCountry);
  const json = yield fetch(
    `${apiBaseUrl}?country=${country}&q=${query}&apiKey=${apiKey}`
  ).then((response) => response.json());
  yield put({ type: "GET_NEWS_BY_QUERY_SUCCESS", json: json.articles });
}

function* fetchNewsByQueryFlow() {
  while (true) {
    const payload  = yield take(["GET_NEWS_BY_QUERY"]);   
    yield call(fetchNewsByQuery, payload.query);
  }
}


function* fetchNewsByCategory(categories) {

  let country = yield select(getCountry);

  const json = yield all(categories.map(category => {
    return fetch(
      `${apiBaseUrl}?country=${country}&category=${category.name}&apiKey=${apiKey}`
    ).then((response) => response.json());
  }));
  yield put({ type: "GET_NEWS_BY_CATEGORY_SUCCESS", json: json });

}

function* fetchNewsByCategoryFlow() {
  while (true) {
    const payload  = yield take(["GET_NEWS_BY_CATEGORY"]);   
    yield call(fetchNewsByCategory, payload.categories);
  }
}


function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
  yield fork(fetchNewsByQueryFlow);
  yield fork(fetchNewsByCategoryFlow);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}