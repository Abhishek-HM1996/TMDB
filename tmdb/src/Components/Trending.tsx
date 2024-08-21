import { Box,Typography } from "@mui/material";
import  { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, setMovies } from "../redux/slices/trendingMovieSlice";
import { trendingMovieDataType } from "../types";
import { useNavigate } from "react-router";
import { setPopularMovies } from "../redux/slices/popularMovieSlice";

const Trending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trendingMovies = useSelector((state: any) => state.trending);
  const popularMovies = useSelector((state:any) => state.popular);

  useEffect(() => {
    if(!trendingMovies?.isCalled)
    dispatch(getMovies());
  }, []);

  function handleFavouriteClick(id: number) {

    dispatch(setMovies(trendingMovies?.movies?.map((item:trendingMovieDataType)=>{
          if(item?.id==id){
            return {...item,favourite:!item?.favourite}
          }
          return item;
    })))
    dispatch(setPopularMovies(popularMovies?.movies?.map((item:trendingMovieDataType)=>{
      if(item?.id==id){
        return {...item,favourite:!item?.favourite}
      }
      return item;
})))
  }

  function handleCardClick(id: number,favourite:boolean) {
    navigate(`/movies/details/${id}?favourite=${favourite}`)
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
        {trendingMovies?.movies?.length > 0 &&
          trendingMovies?.movies?.map((item: trendingMovieDataType) => {
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
