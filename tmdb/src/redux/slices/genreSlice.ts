import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import {genresType} from "../../types";

const initialState:{genres:genresType[]}={
  genres:[],
}

const genreMovieSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    getGenres: (state) => {
    },
    setGenres:(state,action: PayloadAction<any>)=>{
     state.genres=action.payload
     return state
    },
  },
});

export const { getGenres,setGenres} = genreMovieSlice.actions;
export default genreMovieSlice.reducer;