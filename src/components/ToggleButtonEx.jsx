import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";

const ToggleButtonEx = () => {
  const [format, setFormat] = useState(["bold"]);
  const changeFormat = (event, selectValue) => {
    setFormat(selectValue);
  };
  const changeStyle = () => {
    let fontValue = {
      fontWeight: "",
      fontStyle: "",
      textDecoration: "",
    };
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "bold") {
        fontValue = { ...fontValue, fontWeight: "bold" };
      }
      if (format[i] === "italic") {
        fontValue = { ...fontValue, fontStyle: "italic" };
      }
      if (format[i] === "underlined") {
        fontValue = { ...fontValue, textDecoration: "underline" };
      }
    }
    return fontValue;
  };
  return (
    <div align="center">
      <Typography variant="h4">ToggleButton Example </Typography>
      <ToggleButtonGroup
        aria-label="format"
        color="success"
        value={format}
        onChange={changeFormat}
      >
        <ToggleButton aria-label="bold" value="bold">
          <FormatBoldOutlinedIcon />
        </ToggleButton>
        <ToggleButton aria-label="italic" value="italic">
          <FormatItalicOutlinedIcon />
        </ToggleButton>
        <ToggleButton aria-label="underline" value="underlined">
          <FormatUnderlinedOutlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="body1" sx={changeStyle()}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
        laudantium. Id, excepturi unde illo commodi amet similique adipisci
        incidunt nisi nesciunt error cum dolorem alias voluptatibus
        exercitationem ducimus odio officiis! Animi officiis excepturi vero
        exercitationem blanditiis. Aliquam beatae quisquam, adipisci alias
        laudantium nihil, et labore, error optio obcaecati accusantium neque
        cupiditate molestiae expedita! Harum officiis voluptate amet minima
        impedit beatae! Ipsum non eius quisquam excepturi molestias magni,
        mollitia dolorum quibusdam, magnam numquam inventore delectus, obcaecati
        aperiam tenetur vitae? Expedita libero possimus voluptatibus, et autem
        sequi quos id nulla porro quis.
      </Typography>
      {JSON.stringify(changeStyle())}
    </div>
  );
};

export default ToggleButtonEx;
