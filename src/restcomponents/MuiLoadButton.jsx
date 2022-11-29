import { Box, Typography } from "@mui/material";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";
const MuiLoadButton = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setLoad(false);
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Loading Button Example
      </Typography>
      <LoadingButton
        variant="contained"
        color="secondary"
        //loadingIndicator="Loading..."
        loadingPosition="end"
        loading={load}
        endIcon={<SaveIcon />}
        onClick={() => setLoad(true)}
      >
        Submit
      </LoadingButton>
    </Box>
  );
};

export default MuiLoadButton;
