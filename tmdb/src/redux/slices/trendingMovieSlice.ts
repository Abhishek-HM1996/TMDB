import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {trendingMovieDataType} from "../../types";

const initialState:{movies:trendingMovieDataType[],isCalled:boolean}={
  movies:[],
  isCalled:false
}

const trendingMovieSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    getMovies: (state) => {
    },
    setMovies:(state,action: PayloadAction<any>)=>{
     state.movies=action.payload
     console.log("trending",action.payload)
     state.isCalled=true;
     return state
    }
  },
});

export const { getMovies,setMovies} = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;