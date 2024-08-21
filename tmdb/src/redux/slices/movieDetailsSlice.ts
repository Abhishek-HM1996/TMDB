import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { trendingMovieDetailType} from "../../types";

const initialState:trendingMovieDetailType={
    "backdrop_path": "",
    "id": null,
    "title": "",
    "original_title": "",
    "overview": "",
    "poster_path": "",
    "vote_average": null,
    "vote_count": null,
    "favourite":false
  }

const movieDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getMovieDetails: (state,action:PayloadAction<any>) => {
    },
    setMovieDetails:(state,action: PayloadAction<trendingMovieDetailType>)=>{
     state=action.payload
     state.favourite=false
     
     return state
    },
    reset:(state)=>{
     state=initialState;
     return state
    }
  },
});

export const { getMovieDetails,setMovieDetails,reset} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;