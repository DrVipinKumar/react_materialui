import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink, useNavigate, Route, Routes } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiRating from "./MuiRating";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
const MuiAppbar = () => {
  const [ratingButton, setRatingButton] = useState(null);
  const [star, setStar] = useState(0);
  const rating = ["5", "4", "3", "2", "1"];
  const navigate = useNavigate();
  const handleClose = (star) => {
    setRatingButton(null);
    setStar(star);
    navigate("/rating");
  };
  const handleClick = (event) => {
    setRatingButton(event.currentTarget);
  };
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            variant="contained"
            sx={{ color: "#ffffff" }}
            onClick={() => navigate("/")}
          >
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dr. Vipin Classes
          </Typography>
          <Button
            sx={{ m: 3 }}
            variant="contained"
            color="warning"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Rating
          </Button>
          <NavLink
            to="/accordion"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Accordion
          </NavLink>
        </Toolbar>
      </AppBar>
      <Menu
        id="ratingMenu"
        anchorEl={ratingButton}
        keepMounted
        open={Boolean(ratingButton)}
        onClose={handleClose}
      >
        {rating.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      <Routes>
        <Route path="/rating" element={<MuiRating star={parseInt(star)} />} />
      </Routes>
    </Box>
  );
};

export default MuiAppbar;
