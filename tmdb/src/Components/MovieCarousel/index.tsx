import React, { useEffect, useState } from "react";
import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/slices/popularMovieSlice";
import { trendingMovieDataType } from "../../types";
import { IMG_BASE_URL } from "../../constants";
import { Box, CircularProgress, Rating } from "@mui/material";

const PopularMovieCarousel = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state: any) => state.popular);

  useEffect(() => {
    if (!popularMovies?.isCalled) dispatch(getMovies());
  }, []);

  return (
    <>
      {popularMovies?.loader ? (
        <Box sx={{ display: "flex",justifyContent:'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="poster">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
          >
            {popularMovies?.movies?.length > 0 &&
              popularMovies?.movies?.map((movie: trendingMovieDataType) => (
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/movies/details/${movie?.id}?favourite=${movie?.favourite}`}
                >
                  <div className="posterImage">
                    <img src={`${IMG_BASE_URL}/${movie?.backdrop_path}`} />
                  </div>
                  <div className="posterImage__overlay">
                    <div className="posterImage__title">
                      {movie ? movie?.title : ""}
                    </div>
                    <div className="posterImage__runtime">
                      <div>
                        {"Rating "}
                        <Rating
                          name="read-only"
                          value={
                            movie?.vote_average ? movie?.vote_average / 2 : 0
                          }
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default PopularMovieCarousel;
