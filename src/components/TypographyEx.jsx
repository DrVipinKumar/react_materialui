import React from "react";
import { Typography } from "@mui/material";
const TypographyEx = () => {
  return (
    <div>
      <Typography variant="h1" color="primary">
        This is Heading 1
      </Typography>
      <Typography variant="h2" color="secondary">
        This is Heading 2
      </Typography>
      <Typography variant="h3" color="info">
        This is Heading 3
      </Typography>
      <Typography variant="h4" color="error">
        This is Heading 4
      </Typography>
      <Typography variant="h5" color="success">
        This is Heading 5
      </Typography>
      <Typography variant="h6" color="#ec407a">
        This is Heading 6
      </Typography>
      <Typography variant="subtitle1" color="blue">
        This is Subtitle 1
      </Typography>
      <Typography variant="subtitle2">This is Subtitle 2</Typography>
      <Typography variant="body1">This is Body 1</Typography>
      <Typography variant="body2">This is Body 2</Typography>
      <Typography variant="overline">This is Overline</Typography>
      <Typography variant="caption" display="block">
        This is Caption
      </Typography>
    </div>
  );
};

export default TypographyEx;
