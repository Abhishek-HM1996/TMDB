import "./movie.css";
import { Box, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { trendingMovieDataType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetails,
  reset,
} from "../../redux/slices/movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL } from "../../constants";
import { setPopularMovies } from "../../redux/slices/popularMovieSlice";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { setMovies } from "../../redux/slices/trendingMovieSlice";
import ProtectedRoute from "../ProtectedHoc";

export const Detail = () => {
  let { id } = useParams();
  const [searchParams] = useSearchParams();
  let favourite = searchParams.get("favourite");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const details = useSelector((state: any) => state.movieDetails);
  const popularMovies = useSelector((state: any) => state.popular);
  const trendingMovies = useSelector((state: any) => state.trending);

  useEffect(() => {
    if (id) dispatch(getMovieDetails({ id }));

    return () => {
      dispatch(reset());
    };
  }, [id]);

  function handleFavouriteClick(movieId: number) {
    let favourites;
    dispatch(
      setPopularMovies(
        popularMovies?.movies?.map((item: trendingMovieDataType) => {
          if (item?.id == movieId) {
            favourites = !item?.favourite;
            return { ...item, favourite: !item?.favourite };
          }
          return item;
        })
      )
    );
    dispatch(
      setMovies(
        trendingMovies?.movies?.map((item: trendingMovieDataType) => {
          if (item?.id == movieId) {
            favourites = !item?.favourite;
            return { ...item, favourite: !item?.favourite };
          }
          return item;
        })
      )
    );
    navigate(`/movies/details/${id}?favourite=${favourites}`);
  }

  return (
    <Box className="detail_movie_page">
      <Box className="movie">
        <img
          className="movie__backdrop"
          src={`${IMG_BASE_URL}/${details?.backdrop_path}`}
        />
        <Box className="image_overlay"></Box>
      </Box>
      <Box ml={2}>
        <Box className="banner_title_favourite">
          <Box className="bannerImage__title">{details?.title}</Box>
          <Box mr={4}>
            {favourite == "true" ? (
              <FavoriteIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavouriteClick(details?.id);
                }}
                style={{ color: "red" }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavouriteClick(details?.id);
                }}
                style={{ color: "white" }}
              />
            )}
          </Box>
        </Box>

        <Box>
          <Rating
            name="read-only"
            value={details?.vote_average ? details?.vote_average / 2 : 0}
            readOnly
          />
        </Box>
        <Typography mt={2} variant="h5">
          Overview
        </Typography>
        <Box mt={1} className="bannerImage__description">
          {details?.overview}
        </Box>
      </Box>
    </Box>
  );
};
export default ProtectedRoute(Detail);
