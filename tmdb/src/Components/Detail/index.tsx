import "./movie.css";
import { Box, Rating, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { trendingMovieDataType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails, reset } from "../../redux/slices/movieDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL } from "../../constants";

export const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state: any) => state.movieDetails);

  useEffect(() => {
    dispatch(getMovieDetails({id}));

    return ()=>{
      dispatch(reset())
    }
  }, []);
  console.log(details)

  function handleFavouriteClick(id: number) {
    
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
      <Box  ml={2}>
        <Box className="banner_title_favourite" >
        <Box className="bannerImage__title">{details?.title}</Box>
        <Box mr={4}>
        {true ? (
            <FavoriteIcon onClick={(e)=>{
              e.stopPropagation();
              handleFavouriteClick(23)

            }} style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon onClick={(e)=>{
              e.stopPropagation();
              handleFavouriteClick(0)

            }} style={{ color: "white" }} />
          )}
          </Box>
        </Box>
        
        <Box>
          <Rating name="read-only" value={details?.vote_average ? (details?.vote_average)/2 :0} readOnly />
        </Box>
        <Typography mt={2} variant="h5">Overview</Typography>
        <Box  mt={1} className="bannerImage__description">
         {details?.overview}
        </Box>
      </Box>
    </Box>
  );
};
export default Detail;
