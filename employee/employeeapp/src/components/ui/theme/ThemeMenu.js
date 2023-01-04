import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

export default function ThemeMenu() {
  const {theme, setTheme} = useContext(AppContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (selectedTheme) => {
    setAnchorElUser(null);
    setTheme(selectedTheme);
  };


  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Theme" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key="theme1" onClick={() => handleCloseUserMenu('theme1')}>
          <Typography textAlign="center">Theme 1</Typography>
        </MenuItem>
        <MenuItem key="theme2" onClick={() => handleCloseUserMenu('theme2')}>
          <Typography textAlign="center">Theme 2</Typography>
        </MenuItem>
        <MenuItem key="theme3" onClick={() => handleCloseUserMenu('theme3')}>
          <Typography textAlign="center">Theme 3</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
