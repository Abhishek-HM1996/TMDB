import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { get } from "../ApiService/Get";
import { TRENDING_MOVIES_ENDPOINT } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, setMovies } from "../redux/slices/trendingMovieSlice";
import { trendingMovieDataType } from "../types";
import { useNavigate } from "react-router";

const Trending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trendingMovies = useSelector((state: any) => state.trending);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  function handleFavouriteClick(id: number) {
    dispatch(setMovies(trendingMovies?.map((item:trendingMovieDataType)=>{
          if(item?.id==id){
            return {...item,favourite:!item?.favourite}
          }
          return item;
    })))
  }

  function handleCardClick(id: number) {
    navigate(`/movies/details/${id}`)
  }

  return (
    <Box ml={3}>
      <Typography
        my={2}
        ml={1}
        color={"white"}
        variant="h5"
        style={{ fontFamily: "auto" }}
      >
        Trending Movies
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {trendingMovies?.length > 0 &&
          trendingMovies?.map((item: trendingMovieDataType) => {
            return (
              <MovieCard
                id={item?.id}
                url={item?.poster_path}
                title={item?.title}
                rating={item?.vote_average}
                favourite={item?.favourite}
                handleFavouriteClick={handleFavouriteClick}
                handleCardClick={handleCardClick}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default Trending;
