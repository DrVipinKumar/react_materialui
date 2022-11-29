import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Box m={2}>
      <Typography variant="h5" color="secondary" align="center">
        Mui Snackbar Example
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Show Snackbar
        </Button>
        <Snackbar
          open={open}
          TransitionComponent={(props) => <Slide {...props} direction="left" />}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            severity="success"
            variant="filled"
            icon={false}
            color="secondary"
            onClose={handleClose}
          >
            <AlertTitle>Snackbar Message</AlertTitle>
            This is customized snackbar with alert!
          </Alert>
        </Snackbar>
        {/* <Snackbar
          open={open}
          message="This is snackbar of material ui"
          TransitionComponent={(props) => <Slide {...props} direction="left" />}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default MuiSnackbar;
