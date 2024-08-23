import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/slices/genreSlice";
import { Box, Chip, Typography } from "@mui/material";
import { genresType } from "../../types";

const Genres = () => {
  const genreMovies = useSelector((state: any) => state.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <Box ml={3} mt={2}>
      <Typography
        my={2}
        ml={1}
        color={"white"}
        variant="h5"
        style={{ fontFamily: "auto" }}
      >
        Genre
      </Typography>
      {genreMovies?.genres.length > 0 &&
        genreMovies?.genres?.map((item: genresType) => {
          return (
            <Chip
              sx={{
                marginRight: "1rem",
                marginBottom: "0.8rem",
                background: "linear-gradient(to right, #616161, #9e9e9e)",
                cursor:'pointer'
              }}
              color="primary"
              label={item?.name}
            />
          );
        })}
    </Box>
  );
};

export default Genres;
