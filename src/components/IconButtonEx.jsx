import React from "react";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import { IconButton, Tooltip, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const IconButtonEx = () => {
  return (
    <div>
      <Typography variant="h2">Icon Button Example </Typography>
      <IconButton
        sx={{ mt: "40px" }}
        size="large"
        color="secondary"
        onClick={() => alert("Click on Alarm")}
      >
        Alarm
        <CircleNotificationsRoundedIcon />
      </IconButton>
      <Tooltip title="this is send icon" arrow placement="right">
        <IconButton
          sx={{ mt: "40px" }}
          size="medium"
          color="secondary"
          onClick={() => alert("Click on Send Button")}
        >
          <SendIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default IconButtonEx;
