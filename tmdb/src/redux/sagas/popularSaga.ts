import { takeLatest, put, call } from 'redux-saga/effects';
import { setPopularMovies } from '../slices/popularMovieSlice';
import { getPopularMovies } from '../request';


function* handleGetPopularMovies():any {
  try{
    const response:any = yield call(getPopularMovies);
    if(response)
    yield put(setPopularMovies(response?.results))
  }
  catch(err){
    console.log(err)
  }
    
}


export default function* popularSaga() {
  yield takeLatest('popular/getMovies', handleGetPopularMovies);
}