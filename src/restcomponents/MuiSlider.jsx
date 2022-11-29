import React from "react";
import { Box, Typography, Slider } from "@mui/material";
import { useState } from "react";
const MuiSlider = () => {
  const [value, setValue] = useState([10, 30, 40]);
  const marks = [
    { value: 10, label: "10KM" },
    { value: 30, label: "30KM" },
    { value: 50, label: "50KM" },
    { value: 70, label: "70KM" },
    { value: 100, label: "100KM" },
  ];
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Slider Example
      </Typography>
      <Box width={600} mx="auto" mt={3}>
        <Slider
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          valueLabelDisplay="auto"
          step={10}
          color="secondary"
          marks={marks}
          size="large"
        />
        <Slider
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          valueLabelDisplay="auto"
          step={10}
          color="secondary"
          marks
          size="large"
        />
      </Box>
      Value1: {value[0]}, Value2:{value[1]}
    </Box>
  );
};

export default MuiSlider;
