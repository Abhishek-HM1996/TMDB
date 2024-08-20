import { combineReducers } from '@reduxjs/toolkit';
import trendingReducer from "./trendingMovieSlice";
import popularReducer from "./popularMovieSlice";
import movieDetailsReducer from "./movieDetailsSlice"

const rootReducer = combineReducers({
  trending: trendingReducer,
  popular:popularReducer,
  movieDetails:movieDetailsReducer
  // Add more reducers here
});

export default rootReducer;