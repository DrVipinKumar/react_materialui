import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
const style = {
  position: "absolute",
  width: 400,
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  bgcolor: "background.paper",
  border: "2px solid #ff0000",
  borderRadious: "2px",
  p: 2,
  boxShading: 24,
};
const NestedModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Show Nested Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <Typography variant="h5" gutterBottom>
            Nested Modal Heading
          </Typography>
          <Typography variant="body2" align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis sapiente sed sunt aspernatur ipsa ullam! Quam ipsum,
            dolor, eligendi dignissimos sapiente harum, a atque aspernatur modi
            fugit aperiam voluptatibus.
          </Typography>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
const MuiModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Modal with Nested Modal Example
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Show Modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5" gutterBottom>
            Modal Heading
          </Typography>
          <Typography variant="body2" align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis sapiente sed sunt aspernatur ipsa ullam! Quam ipsum,
            dolor, eligendi dignissimos sapiente harum, a atque aspernatur modi
            fugit aperiam voluptatibus.
          </Typography>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <NestedModal />
        </Box>
      </Modal>
    </Box>
  );
};

export default MuiModal;
