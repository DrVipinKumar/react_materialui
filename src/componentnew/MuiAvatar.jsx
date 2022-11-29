import React, { useState } from "react";
import { Box, Typography, Stack, Avatar, AvatarGroup } from "@mui/material";
import Face2Icon from "@mui/icons-material/Face2";
import mypic from "../image/mypic.png";
const MuiAvatar = () => {
  const [max, setMax] = useState(3);
  const handleClick = () => {
    setMax(10);
  };
  const getName = (value) => {
    return `${value.split(" ")[0][0]}${value.split(" ")[1][0]}${
      value.split(" ")[2][0]
    }`;
  };
  return (
    <Box m={4}>
      <Typography variant="h5" color="secondary" align="center">
        MUI Avatar Example
      </Typography>
      <Stack spacing={2} direction="row">
        <Avatar children="VC" />
        <Avatar sx={{ bgcolor: "secondary.main" }}>DC</Avatar>
        <Avatar sx={{ bgcolor: "secondary.main", width: 100, height: 100 }}>
          DVC
        </Avatar>
      </Stack>
      <Stack spacing={2} direction="row">
        <Avatar variant="rounded">
          <Face2Icon />
        </Avatar>
        <Avatar sx={{ bgcolor: "secondary.main" }} variant="rounded">
          <Face2Icon />
        </Avatar>
        <Avatar sx={{ bgcolor: "secondary.main", width: 100, height: 100 }}>
          <Face2Icon sx={{ width: 80, height: 80 }} />
        </Avatar>
      </Stack>
      <Stack spacing={2} direction="row">
        <AvatarGroup total={max} onClick={handleClick}>
          <Avatar src={mypic} alt="Pic not found" />
          <Avatar
            sx={{ bgcolor: "secondary.main" }}
            src={mypic}
            alt="Pic not found"
          />
          <Avatar
            src={mypic}
            alt="Pic not found"
            sx={{ bgcolor: "secondary.main", width: 50, height: 50 }}
          />
          <Avatar
            sx={{ bgcolor: "secondary.main", width: 80, height: 80 }}
            src={mypic}
            alt="Pic not found"
          />
          <Avatar
            sx={{ bgcolor: "secondary.main", width: 100, height: 100 }}
            src={mypic}
            alt="Pic not found"
          />
        </AvatarGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <Avatar
          sx={{ bgcolor: "error.main", width: 60, height: 60 }}
          children={getName("Dr Vipin Classes")}
        />
      </Stack>
    </Box>
  );
};

export default MuiAvatar;
