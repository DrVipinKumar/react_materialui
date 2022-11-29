import React from "react";
import { Box, Rating, Typography } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import { useEffect } from "react";
const MuiRating = (props) => {
  // const params = useParams();
  const [value, setValue] = useState(props.star);
  const handleRating = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setValue(props.star);
  }, [props.star]);
  return (
    <Box m={3}>
      <Typography variant="h4" align="center">
        MUI Rating Example
      </Typography>
      <Rating
        value={value}
        size="large"
        precision="0.5"
        defaultValue={value}
        onChange={handleRating}
        icon={<EmojiEmotionsIcon color="error" />}
        emptyIcon={<InsertEmoticonIcon color="error" />}
        max={5}
        highlightSelectedOnly
      />
      <br />
      Rating Value: {"" + value}
    </Box>
  );
};

export default MuiRating;
