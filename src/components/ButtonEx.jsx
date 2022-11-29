import React from "react";
// import { Button } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const ButtonEx = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button variant="text" color="secondary" size="small">
        Text
      </Button>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
        <Button variant="outlined" color="error" size="small">
          Outlined
        </Button>
        <Button variant="outlined" color="success" size="large">
          Outlined
        </Button>
      </Stack>
      <br />
      <Stack direction="row" spacing={2} display="block">
        <Button variant="contained">contained</Button>
        <Button variant="contained" color="warning">
          Outlined
        </Button>
        <Button variant="contained" color="error" size="small">
          Outlined
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => alert("this is button click")}
        >
          Outlined
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} display="block">
        <Button variant="contained" startIcon={<DeleteIcon />}>
          Delete Button
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send Button
        </Button>
      </Stack>
    </div>
  );
};

export default ButtonEx;
