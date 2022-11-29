import React, { useState } from "react";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState();
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
  };
  const getColor = () => {
    if (checked) {
      setColor("#ff0000");
    } else {
      setColor("#ffffff");
    }
    return color;
  };
  return (
    <Box m={3} bgcolor={getColor}>
      <Typography variant="h4" align="center">
        MUI Switch Example
      </Typography>
      <FormControlLabel
        label="Change to Red Background Color"
        control={<Switch checked={checked} onChange={handleSwitch} />}
      />
      <br />
      Switch Value: {"" + checked}
    </Box>
  );
};

export default MuiSwitch;
