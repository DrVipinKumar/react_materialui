import React from "react";
import { Box, Typography, Button, Portal } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
const MuiPortal = () => {
  const [show, setShow] = useState(false);
  const refs = useRef(null);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Portal Example
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        sx={{ mx: 30 }}
      >
        Show Portal
      </Button>
      {show ? (
        <Portal container={refs.current}>This is portal info!</Portal>
      ) : null}
      <Box
        ref={refs}
        sx={{
          border: "2px solid #ff0000",
          width: 200,
          height: 20,
          mx: 25,
          mt: 2,
          textAlign: "center",
        }}
      ></Box>
    </Box>
  );
};

export default MuiPortal;
