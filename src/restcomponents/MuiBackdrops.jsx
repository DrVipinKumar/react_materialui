import React from "react";
import { Backdrop, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
const MuiBackdrops = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Backdrop Example
      </Typography>
      <Button variant="contained" onClick={handleClick} color="secondary">
        Open BackDrop
      </Button>
      <Backdrop open={open}>
        <Box
          sx={{
            width: 400,
            border: 2,
            p: 3,
            bgcolor: "#fff",
            borderRadius: 3,
          }}
        >
          <TextField
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            sx={{ mx: 4, mt: 1 }}
            variant="contained"
            onClick={() => setOpen(false)}
            color="secondary"
          >
            Close
          </Button>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default MuiBackdrops;
