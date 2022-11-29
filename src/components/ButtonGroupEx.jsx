import React from "react";
import { ButtonGroup, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
const ButtonGroupEx = () => {
  return (
    <div>
      <Typography variant="h3">ButtonGroup Example</Typography>
      <Stack
        sx={{ width: "100px", height: "40px", mx: "auto" }}
        direction="row"
      >
        <Button variant="contained">RED</Button>
        <Button variant="contained">GREEN</Button>
        <Button variant="contained">BLUE</Button>
      </Stack>
      <br />
      <ButtonGroup
        variant="text"
        color="error"
        size="small"
        orientation="vertical"
        sx={{ mt: "100px" }}
      >
        <Button onClick={() => alert("click by RED")}>RED</Button>
        <Button color="success">GREEN</Button>
        <Button color="primary">BLUE</Button>
        <Button>All Color</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupEx;
