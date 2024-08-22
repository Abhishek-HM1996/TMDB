import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router";
import Popover from "./Popover";
import { APP_LOGO_TEXT, FAVOURITE, HOME, MY_FAVOURITE } from "../../constants";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  function handleNavigation() {
    navigate(HOME);
  }
  return (
    <div data-testid="nav-header">
      {!isLoginPage ? (
        <Box
          sx={{
            background: "black",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={handleNavigation}
            ml={3}
            sx={{
              color: "#ffaa00",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            variant="h4"
            data-testid={"app-logo"}
          >
            {APP_LOGO_TEXT}
          </Typography>
          <Box mr={3} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              onClick={() => navigate(FAVOURITE)}
              pr={3}
              sx={{
                color: "#c3b9b9",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              data-testid={"favourite"}
            >
              {MY_FAVOURITE}
            </Typography>
            <Popover />
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
