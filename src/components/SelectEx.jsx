import React from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
const SelectEx = () => {
  const [lang, setLang] = useState([]);
  const langInfo = ["C Lang", "Java Lang", "JavaScript Lang", "React JS"];
  return (
    <Box>
      <Typography variant="h4" align="center">
        Select Options in MUI
      </Typography>
      <Box mx={3}>
        <TextField
          label="Select your favorite computer language"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          select
          SelectProps={{ multiple: true }}
          sx={{ width: "300px" }}
        >
          {langInfo.map((lang) => (
            <MenuItem value={lang} key={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>
        <br />
        Selected Language: {lang.join(",")}
      </Box>
    </Box>
  );
};

export default SelectEx;
