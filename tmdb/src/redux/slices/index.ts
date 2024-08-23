import { combineReducers } from '@reduxjs/toolkit';
import trendingReducer from "./trendingMovieSlice";
import popularReducer from "./popularMovieSlice";
import movieDetailsReducer from "./movieDetailsSlice";
import genreReducer from "./genreSlice";

const rootReducer = combineReducers({
  trending: trendingReducer,
  popular:popularReducer,
  movieDetails:movieDetailsReducer,
  genre:genreReducer
  // Add more reducers here
});

export default rootReducer;