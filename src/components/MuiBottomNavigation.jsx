import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddHomeIcon from "@mui/icons-material/AddHome";
import StarsIcon from "@mui/icons-material/Stars";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});
const MuiBottomNavigation = () => {
  const [bnValue, setBNValue] = useState(0);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        showLabels={true}
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={bnValue}
        onChange={(event, value) => setBNValue(value)}
      >
        <BottomNavigationAction
          label="Home"
          value={bnValue}
          onClick={() => navigate("/home")}
          icon={<AddHomeIcon />}
        />
        <BottomNavigationAction
          label="Rating"
          value={bnValue}
          onClick={() => navigate("/rating")}
          icon={<StarsIcon />}
        />
        <BottomNavigationAction
          label="Accordion"
          value={bnValue}
          onClick={() => navigate("/accordion")}
          icon={<ArrowDropDownCircleIcon />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default MuiBottomNavigation;
