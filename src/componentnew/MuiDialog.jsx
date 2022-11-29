import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
function DraggableDialog(props) {
  return (
    <Draggable handle="#dialogbox">
      <Paper {...props} />
    </Draggable>
  );
}
const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box m={3}>
      <Typography variant="h5" color="secondary" align="center">
        Mui Dialog with Draggable/Floating Effect Example
      </Typography>
      <Box>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Show Dialog
        </Button>
        <Dialog
          open={open}
          aria-labelledby="dialogbox"
          PaperComponent={DraggableDialog}
          style={{ cursor: "move" }}
        >
          <DialogTitle id="dialogbox">Material Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Alert icon={false} color="secondary" variant="filled">
                Do you want to close it?
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary">
              No
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default MuiDialog;
