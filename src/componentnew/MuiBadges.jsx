import { useState } from "react";
import { Box, Typography, Stack, Badge, TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
const MuiBadges = () => {
  const [value, setValue] = useState(0);
  const handleBadgeValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box m={4}>
      <Typography variant="h5" color="secondary" align="center">
        MUI Badges Example
      </Typography>
      <Stack spacing={2} direction="row">
        <TextField
          id="value"
          size="small"
          label="Enter badge value"
          variant="outlined"
          value={value}
          onChange={handleBadgeValue}
        />
        <Badge badgeContent={value} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={value} color="secondary" showZero>
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="secondary" invisible={!value}>
          <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={value}>
          Dr. Vipin Classes
        </Badge>
      </Stack>
    </Box>
  );
};

export default MuiBadges;
