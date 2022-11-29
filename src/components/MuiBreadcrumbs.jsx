import { Box, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const MuiBreadcrumbs = () => {
  return (
    <Box mx={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={2}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Product
        </Link>
        <Link href="#" underline="hover">
          Services
        </Link>
        <Link href="#" underline="hover">
          Contact Us
        </Link>
        <Button>Click Me</Button>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
