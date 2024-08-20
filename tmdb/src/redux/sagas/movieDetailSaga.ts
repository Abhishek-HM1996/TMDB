import { takeLatest, put, call } from 'redux-saga/effects';
import { getMovieDetails } from '../request';
import { PayloadAction } from '@reduxjs/toolkit';
import { setMovieDetails } from '../slices/movieDetailsSlice';


function* handleGetMovieDeatails(action: PayloadAction<any>):any {
  try{
    const { id } = action.payload;
    const response:any = yield call(getMovieDetails,{id});
    if(response)
    yield put(setMovieDetails(response))
  }
  catch(err){
    console.log(err)
  }
    
}


export default function* movieDetailSaga() {
  yield takeLatest('details/getMovieDetails', handleGetMovieDeatails);
}