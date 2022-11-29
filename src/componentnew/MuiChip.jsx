import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import Face2Icon from "@mui/icons-material/Face2";
import mypic from "../image/mypic.png";
const MuiChip = () => {
  const [item, setItem] = useState();
  const [showClick, setShowClick] = useState();
  const [chipValue, setChipValue] = useState(["Chip 1"]);
  const addItem = () => {
    setChipValue([...chipValue, item]);
  };
  const handleItem = (event) => {
    setItem(event.target.value);
  };
  const handleClick = (item) => {
    setShowClick("You clicked on " + item);
  };
  const handleDelete = (item) => {
    setChipValue(chipValue.filter((list) => list !== item));
  };
  return (
    <Box m={4}>
      <Typography variant="h5" color="secondary" align="center">
        MUI Chip Example
      </Typography>
      <Stack spacing={2} direction="row">
        <Chip label="Dr. Vipin Classes" />
        <Chip label="Dr. Vipin Classes" color="secondary" />
        <Chip label="Dr. Vipin Classes" color="secondary" size="small" />
        <Chip label="Dr. Vipin Classes" color="secondary" variant="outlined" />
        <Chip
          label="Dr. Vipin Classes"
          color="secondary"
          icon={<Face2Icon />}
        />
        <Chip
          label="Dr. Vipin Classes"
          color="secondary"
          avatar={<Avatar src={mypic} />}
        />
      </Stack>
      <Stack spacing={2} direction="row" mt={2}>
        <TextField
          id="chipValue"
          label="Enter chip item"
          value={item}
          size="small"
          onChange={handleItem}
        />
        <Button color="secondary" variant="contained" onClick={addItem}>
          Add Chip Item
        </Button>
      </Stack>
      <Box mx={40} mt={2}>
        {chipValue.map((item, index) => (
          <>
            <Chip
              key={index}
              label={item}
              color="error"
              onClick={() => handleClick(item)}
              onDelete={() => handleDelete(item)}
            />
            <br />
            <br />
          </>
        ))}
      </Box>
      {showClick}
    </Box>
  );
};

export default MuiChip;
