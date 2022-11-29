import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
const MuiProgress = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const handleClick = () => {
    setProgress(0);
    setOpen(true);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? setOpen(false) : prevProgress + 10
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    <Box m={3}>
      <Typography variant="h5" color="secondary" align="center">
        Mui Progress Component Example
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Show Progress
        </Button>
        <Stack mx={30} spacing={2} mt={10}>
          <Collapse in={open} sx={{ position: "relative" }}>
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={progress}
            />
            <Typography
              variant="b"
              color="secondary"
              sx={{ position: "absolute", top: 8, left: 8, fontSize: 12 }}
            >
              {progress > 0 ? `${progress}%` : null}
            </Typography>
          </Collapse>
        </Stack>
      </Box>
      {/* <Stack mt={2} spacing={3}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="warning" variant="determinate" value={60} />
        <LinearProgress
          color="warning"
          variant="buffer"
          valueBuffer={40}
          value={60}
        />
      </Stack>
      <Stack mt={2} spacing={3}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="warning" variant="determinate" value={60} />
      </Stack> */}
    </Box>
  );
};

export default MuiProgress;
