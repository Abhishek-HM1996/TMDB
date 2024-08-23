import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import popularSaga from "./popularSaga"
import movieDetailSaga from './movieDetailSaga';
import genreSaga from './genreSaga';

export default function* rootSaga() {
  yield all([
    trendingSaga(),
    popularSaga(),
    movieDetailSaga(),
    genreSaga()
    // Add more sagas here
  ]);
}