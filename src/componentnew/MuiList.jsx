import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import mypic from "../image/mypic.png";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
const MuiList = () => {
  const primaryList = ["Primary List 1", "Primary List 2", "Primary List 3"];
  const secondaryList = [
    "Secondary List 1",
    "Secondary List 2",
    "Secondary List 3",
  ];
  const handleClick = (index) => {
    alert("You clicked on " + secondaryList[index]);
  };
  return (
    <Box m={2}>
      <Typography variant="h5" color="secondary" align="center">
        MUI List Example
      </Typography>
      <Typography variant="h5" color="secondary" mx={3}>
        List of information are:
      </Typography>
      <Box mx={30} sx={{ bgcolor: "#efefef" }}>
        <List disablePadding>
          {primaryList.map((row, index) => (
            <>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Tooltip
                    title={row}
                    placement="left"
                    arrow
                    enterDelay={400}
                    leaveDelay={500}
                  >
                    <ListItemText
                      primary={row}
                      secondary={secondaryList[index]}
                    />
                  </Tooltip>
                </ListItem>
              </ListItemButton>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default MuiList;
