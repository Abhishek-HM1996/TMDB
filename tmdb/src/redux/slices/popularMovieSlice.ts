import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {trendingMovieDataType} from "../../types";
import { boolean } from 'yargs';

const initialState:{movies:trendingMovieDataType[],isCalled:boolean,loader:boolean}={
    movies:[],
    isCalled:false,
    loader:false,
  }

const popularMovieSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    getMovies: (state) => {
      state.loader=true
    },
    setPopularMovies:(state,action: PayloadAction<any>)=>{
     state.movies=action.payload;
     state.isCalled=true;
     state.loader=false
     return state
    },
    resetPopularMovies:(state)=>{
      state.isCalled=false;
    }
  },
  
});

export const { getMovies,setPopularMovies,resetPopularMovies} = popularMovieSlice.actions;
export default popularMovieSlice.reducer;