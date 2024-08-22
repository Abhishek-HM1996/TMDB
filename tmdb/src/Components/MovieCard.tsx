import { Box, Card, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IMG_BASE_URL } from "../constants";

interface movieDetails {
  url: string;
  rating: number | null;
  title: string;
  favourite: boolean;
  handleFavouriteClick:(id:number)=>void;
  handleCardClick:(id:number,fav:boolean)=>void;
  id:number|null;
}

const MovieCard = ({id, url, rating, title, favourite ,handleFavouriteClick,handleCardClick}: movieDetails) => {
  return (
    <Card
      raised={true}
      sx={{
        margin: "0 8px",
        flexShrink: 0, 
        padding: 0,
        height: "300px",
        width: "260px",
        background: "#343434",
        border: "1px solid grey",
      }}
      onClick={(e)=>{
        handleCardClick(id?id:0,favourite)
      }}
      data-testid={"movie-card"}
    >
      <img
        height={"80%"}
        width={"100%"}
        src={`${IMG_BASE_URL}/${url}`}
        alt={`Card`}
      />
      <Box px={2}>
        <Typography  color={"white"}>{title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ fontSize: "12px", color: "lightgray" }}
          >{`Rating - ${rating?.toFixed(1)}`}</Typography>
          {favourite ? (
            <FavoriteIcon data-testid='favourite-icon' onClick={(e)=>{
              e.stopPropagation();
              handleFavouriteClick(id?id:0)

            }} style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon data-testid={"favourite-icon"} onClick={(e)=>{
              e.stopPropagation();
              handleFavouriteClick(id?id:0)

            }} style={{ color: "white" }} />
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;
