import React, { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
const MuiAutocomplete = () => {
  const [selectLang, setSelectLang] = useState(null);
  const [selectLangObj, setSelectLangObj] = useState({ id: "", lang: "" });
  const handleLangObj = (event, selectedValue) => {
    setSelectLangObj(selectedValue);
  };
  const handleLang = (event, selectedValue) => {
    setSelectLang(selectedValue);
  };
  const lang = [
    "C Lang",
    "Java Lang",
    "React Lang",
    "JavaScript Lang",
    "Kotlin Lang",
  ];
  const langObj = lang.map((value, index) => ({ id: index + 1, lang: value }));
  const objectLang = {
    options: lang,
  };
  const objectLangObj = {
    options: langObj,
    getOptionLabel: (option) => option.lang,
  };
  return (
    <Box>
      <Typography variant="h4" align="center">
        MUI Autocomplete Example
      </Typography>
      <Box width={300} m={3}>
        <Autocomplete
          // options={lang}
          {...objectLang}
          value={selectLang}
          onChange={handleLang}
          freeSolo
          renderInput={(parms) => (
            <TextField
              {...parms}
              label="Select your language"
              color="secondary"
            />
          )}
        />
        <br />
        Selected Value: {selectLang}
      </Box>
      <Box width={300} m={3}>
        <Autocomplete
          {...objectLangObj}
          //options={langObj}
          //getOptionLabel={(option) => option.lang}
          value={selectLangObj}
          onChange={handleLangObj}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(parms) => (
            <TextField
              {...parms}
              label="Select your language"
              color="secondary"
            />
          )}
        />
        <br />
        Selected Value: {JSON.stringify(selectLangObj)}
      </Box>
    </Box>
  );
};

export default MuiAutocomplete;
