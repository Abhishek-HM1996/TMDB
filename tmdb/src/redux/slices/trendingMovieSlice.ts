import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {trendingMovieDataType} from "../../types";
import { boolean } from 'yargs';

const initialState:trendingMovieDataType={
  "backdrop_path": "",
  "id": null,
  "title": "",
  "original_title": "",
  "overview": "",
  "poster_path": "",
  "media_type": "",
  "adult": false,
  "original_language": "en",
  "genre_ids": [],
  "popularity": null,
  "release_date": "",
  "video": false,
  "vote_average": null,
  "vote_count": null,
  "favourite":false
}

const trendingMovieSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    getMovies: (state) => {
    },
    setMovies:(state,action: PayloadAction<trendingMovieDataType>)=>{
     state=action.payload
     return state
    }
  },
});

export const { getMovies,setMovies} = trendingMovieSlice.actions;
export default trendingMovieSlice.reducer;