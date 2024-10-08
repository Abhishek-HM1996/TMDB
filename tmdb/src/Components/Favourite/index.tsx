import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/slices/trendingMovieSlice";
import { trendingMovieDataType } from "../../types";
import { setPopularMovies } from "../../redux/slices/popularMovieSlice";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedHoc";
import { NO_DATA_TEXT } from "../../constants";

const Favourite = () => {
  const trendingMovies = useSelector((state: any) => state.trending);
  const popularMovies = useSelector((state: any) => state.popular);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFavouriteClick(id: number) {
    dispatch(
      setMovies(
        trendingMovies?.movies?.map((item: trendingMovieDataType) => {
          if (item?.id == id) {
            return { ...item, favourite: false };
          }
          return item;
        })
      )
    );
    dispatch(
      setPopularMovies(
        popularMovies?.movies?.map((item: trendingMovieDataType) => {
          if (item?.id == id) {
            return { ...item, favourite: false };
          }
          return item;
        })
      )
    );
  }

  const favouriteItems=[...trendingMovies?.movies, ...popularMovies?.movies]
  ?.filter(
    (item, index, self) =>
      item?.favourite &&
      index == self.findIndex((t) => t.id === item.id)
  )

  return favouriteItems?.length > 0 ? (
    <Box ml={3}>
      <Typography my={2} ml={1} variant="h4" style={{ fontFamily: "auto" }}>
        My Favourites
      </Typography>
      <Grid container rowGap={3}>
        {favouriteItems
          ?.map((item) => (
            <Grid item xs={12} sm={4} md={3}>
              <MovieCard
                id={item?.id}
                url={item?.backdrop_path}
                title={item?.title}
                rating={item?.vote_average}
                favourite={item?.favourite}
                handleFavouriteClick={() => {
                  handleFavouriteClick(item?.id);
                }}
                handleCardClick={() => {
                  navigate(
                    `/movies/details/${item?.id}?favourite=${item?.favourite}`
                  );
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  ) : (
    <Box mt={10} sx={{ textAlign: "center" }}>
      {NO_DATA_TEXT}
    </Box>
  );
};

export default ProtectedRoute(Favourite);
