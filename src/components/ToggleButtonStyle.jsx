import React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
const ToggleButtonStyle = () => {
  const [format, setFormat] = useState([]);
  let formatStyle = {
    fontWeight: "",
    fontStyle: "",
    textDecoration: "",
  };
  const getFormatStyle = () => {
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "bold") {
        formatStyle = { ...formatStyle, fontWeight: "bold" };
      } else if (format[i] === "italic") {
        formatStyle = { ...formatStyle, fontStyle: "italic" };
      } else if (format[i] === "underline") {
        formatStyle = { ...formatStyle, textDecoration: "underline" };
      }
    }
    return formatStyle;
  };
  const changeFormat = (event, selectValue) => {
    setFormat(selectValue);
  };
  return (
    <div align="center">
      <Typography variant="h4">ToggleButton Multiple Selection </Typography>
      <ToggleButtonGroup
        color="error"
        value={format}
        onChange={changeFormat}
        sx={{ mt: 2 }}
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline" aria-label="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="body1" sx={getFormatStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quisquam
        tempore deleniti, omnis repellat non hic nulla dolorum molestias quo
        enim neque magnam inventore? Alias cupiditate nam unde consequatur hic.
        Dolorum cum consectetur veritatis vel voluptates quia suscipit earum
        obcaecati veniam iure illum ea aperiam labore minus ratione temporibus
        atque molestias alias rem incidunt repellendus tempore odit, placeat
        corrupti. Nesciunt? Rem molestias, itaque cumque in accusamus corrupti
        sequi optio reprehenderit ipsum minima, excepturi omnis, nobis beatae
        modi provident nam nesciunt! Consequuntur in sequi officia molestias
        rerum! Iste tempora porro eaque.
      </Typography>
    </div>
  );
};

export default ToggleButtonStyle;
