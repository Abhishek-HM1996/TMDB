import * as React from "react";
import MuiPopover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_USER_ID } from "../../constants";
import { useDispatch } from "react-redux";
import { resetTrendingrMovies } from "../../redux/slices/trendingMovieSlice";
import { resetPopularMovies } from "../../redux/slices/popularMovieSlice";

export default function Popover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(resetTrendingrMovies())
    dispatch(resetPopularMovies())
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Button aria-describedby={id} onClick={handleClick}>
        <AccountCircleOutlinedIcon
          style={{ color: "#d7caca", fontSize: "35px" }}
          data-testid={"user-icon"}
        />
      </Button>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          onClick={() => {
            localStorage.removeItem(LOCAL_STORAGE_USER_ID);
            handleClose()
            navigate('/')
          }}
          sx={{ p: 2, background: "#252424", color: "white" }}
        >
          Log out
        </Typography>
      </MuiPopover>
    </Box>
  );
}
