import { takeLatest, put, call } from 'redux-saga/effects';
import { setMovies } from '../slices/trendingMovieSlice';
import { getTrendingMovies } from '../request';

function* handleGetMovies():any {
  try{
    const response:any = yield call(getTrendingMovies);
    if(response)
    yield put(setMovies(response?.results))
  }
  catch(err){
    console.log(err)
  }
    
}


export default function* trendingSaga() {
  yield takeLatest('trending/getMovies', handleGetMovies);
}