import React, { useState } from "react";
import { Box, Typography, Button, Popover, Popper } from "@mui/material";
const MuiPopOver = () => {
  const [anchorEL, setAnchorEL] = useState(null);
  const [anchorPopperEL, setAnchorPopperEL] = useState(null);
  const handlePopperClick = (event) => {
    setAnchorPopperEL(anchorPopperEL ? null : event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorEL(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEL(null);
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI PopOver Example
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        sx={{ m: 10 }}
      >
        Show PopOver Info
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handlePopperClick}
        sx={{ mx: 20 }}
      >
        Show Popper Info
      </Button>
      <Popover
        open={Boolean(anchorEL)}
        onClose={handleClose}
        anchorEl={anchorEL}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "top",
        }}
      >
        <Typography variant="body2" p={2}>
          This is PopOver Component Info
        </Typography>
      </Popover>

      <Popper
        open={Boolean(anchorPopperEL)}
        anchorEl={anchorPopperEL}
        placement="bottom-start"
      >
        <Typography
          variant="body2"
          p={2}
          sx={{ bgcolor: "background.paper", border: "1px solid" }}
        >
          This is Popper Component Info
        </Typography>
      </Popper>
    </Box>
  );
};

export default MuiPopOver;
