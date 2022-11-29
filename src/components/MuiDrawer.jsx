import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const MuiDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <Box>
      <IconButton size="large" variant="contained" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Drawer
        aria-label="muiDrawer"
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Stack width={200} spacing={2} mx={2}>
          <Typography variant="h5" color="secondary" align="center">
            Drawer Items
          </Typography>
          <Link href="/home" underline="hover">
            Home
          </Link>
          <Link href="/rating" underline="hover">
            Rating
          </Link>
          <Link href="/accordion" underline="hover">
            Accordion
          </Link>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MuiDrawer;
