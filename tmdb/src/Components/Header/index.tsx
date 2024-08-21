import { Box, Typography } from "@mui/material";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate,useLocation } from "react-router";
import Popover from "../Popover";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname,"location.pathname")
  const isLoginPage = location.pathname === '/';
  return (
    !isLoginPage ?<Box
      sx={{
        background: "black",
        height: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        onClick={() => navigate("/home")}
        ml={3}
        sx={{
          color: "#ffaa00",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        variant="h4"
      >
        {"TMDB"}
      </Typography>
      <Box mr={3} sx={{ display: "flex", alignItems: "center" }}>
        <Typography onClick={()=>navigate('/movies/favourite')} pr={3} sx={{color:"#c3b9b9","&:hover": {
            cursor: "pointer",
          }}}>
          {"My Favourites"}
        </Typography>
        <Popover />
      </Box>
    </Box>:<></>
  );
};

export default Header;
