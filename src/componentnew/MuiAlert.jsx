import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import {
  Box,
  Typography,
  Stack,
  Alert,
  Button,
  Collapse,
  IconButton,
} from "@mui/material";
const MuiAlert = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box m={2}>
      <Typography variant="h5" color="secondary" align="center">
        MUI Alert Example
      </Typography>
      <Stack spacing={2}>
        <Alert severity="info" variant="outlined" color="secondary">
          This is simple Alert Message
        </Alert>
        <Alert severity="error" variant="filled" color="secondary">
          This is simple Alert Message
        </Alert>
        <Alert severity="warning">This is simple Alert Message</Alert>
        <Alert severity="success" onClose={{}}>
          This is simple Alert Message
        </Alert>
      </Stack>
      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Show Alert
        </Button>
        <Stack spacing={2} mt={2}>
          <Collapse in={open}>
            <Alert
              severity="success"
              variant="filled"
              icon={<DoneAllIcon />}
              // onClose={handleClose}
              action={
                <IconButton onClick={handleClose} color="inherit">
                  <HighlightOffIcon />
                </IconButton>
              }
            >
              This is Material UI Alert Component
            </Alert>
          </Collapse>
        </Stack>
      </Box>
    </Box>
  );
};

export default MuiAlert;
