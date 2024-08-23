import { takeLatest, put, call } from 'redux-saga/effects';
import { getGenreMovies } from '../request';
import { setGenres } from '../slices/genreSlice';


function* handleGetGenreMovies():any {
  try{
    const response:any = yield call(getGenreMovies);
    if(response)
    yield put(setGenres(response?.genres))
  }
  catch(err){
    console.log(err)
  }
    
}


export default function* genreSaga() {
  yield takeLatest('genres/getGenres', handleGetGenreMovies);
}