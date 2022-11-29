import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  TextField,
  Typography,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
const TextFieldEx = () => {
  const [info, setInfo] = useState();
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };
  return (
    <Box mx={3}>
      <Typography variant="h4" align="center">
        Text Field Example in MUI
      </Typography>
      <Stack spacing={2} direction="row" m={2}>
        <TextField
          label="Enter name"
          variant="outlined"
          placeholder="Enter your name"
          InputProps={{ readOnly: true }}
        />
        <TextField label="Enter name" variant="filled" />
        <TextField label="Enter name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row" m={2}>
        <TextField label="Enter name" variant="outlined" size="small" />
        <TextField label="Enter name" variant="filled" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row" m={2}>
        <TextField
          type="password"
          label="Enter password"
          variant="outlined"
          color="secondary"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          required
          helperText={
            !info
              ? "Password is required"
              : "Do not share your password to anyone"
          }
          error={!info}
        />
        <TextField
          type="date"
          label="Select date"
          variant="outlined"
          color="secondary"
        />
        <TextField
          type="time"
          label="Select time"
          variant="outlined"
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row" m={2}>
        <TextField
          type="number"
          label="Enter your salary"
          variant="outlined"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Enter your age"
          variant="outlined"
          color="secondary"
          InputProps={{
            endAdornment: <InputAdornment position="end">Year</InputAdornment>,
          }}
        />
      </Stack>
      <Stack spacing={2} direction="row" m={2}>
        <TextField
          type={eye ? "text" : "password"}
          label="Enter password"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleEye}>
                  {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
};

export default TextFieldEx;
