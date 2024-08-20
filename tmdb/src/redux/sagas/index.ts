import { all } from 'redux-saga/effects';
import trendingSaga from './trendingSaga';
import popularSaga from "./popularSaga"
import movieDetailSaga from './movieDetailSaga';

export default function* rootSaga() {
  yield all([
    trendingSaga(),
    popularSaga(),
    movieDetailSaga()
    // Add more sagas here
  ]);
}