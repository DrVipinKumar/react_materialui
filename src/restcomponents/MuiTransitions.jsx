import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import {
  Box,
  Collapse,
  Stack,
  FormControlLabel,
  Switch,
  Typography,
  Fade,
  Grow,
  Slide,
  Zoom,
} from "@mui/material";
import { useState } from "react";
const MuiTransitions = () => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Transitions Example
      </Typography>
      <Box mx={3}>
        <FormControlLabel
          label="Show Transitions"
          control={<Switch checked={show} onChange={handleChange} />}
        />
      </Box>
      <Stack spacing={2} direction="row" mx={3}>
        <Typography variant="h5">Collapse:</Typography>
        <Collapse in={show} collapsedSize={50} timeout={1000}>
          <AcUnitIcon sx={{ width: 150, height: 150 }} />
        </Collapse>
        <Typography variant="h5">Fade:</Typography>
        <Fade in={show} timeout={3000}>
          <AcUnitIcon sx={{ width: 150, height: 150 }} />
        </Fade>
        <Typography variant="h5">Grow:</Typography>
        <Grow in={show} timeout={2000}>
          <AcUnitIcon sx={{ width: 150, height: 150 }} />
        </Grow>
      </Stack>
      <Stack spacing={2} direction="row" mx={3}>
        <Typography variant="h5">Slide:</Typography>
        <Slide in={show} direction="left" timeout={2000}>
          <AcUnitIcon sx={{ width: 150, height: 150 }} />
        </Slide>
        <Typography variant="h5">Zoom:</Typography>
        <Zoom in={show} timeout={2000}>
          <AcUnitIcon sx={{ width: 150, height: 150 }} />
        </Zoom>
      </Stack>
    </Box>
  );
};

export default MuiTransitions;
