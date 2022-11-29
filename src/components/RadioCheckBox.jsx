import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Checkbox,
  RadioGroup,
  Typography,
  FormGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
const RadioCheckBox = () => {
  const [choice, setChoice] = useState();
  const [country, setCountry] = useState([]);
  const handleCountry = (event) => {
    const index = country.indexOf(event.target.value);
    if (index === -1) {
      setCountry([...country, event.target.value]);
    } else {
      setCountry(country.filter((value) => value !== event.target.value));
    }
  };
  return (
    <Box m={2}>
      <Box>
        <Typography variant="h4" align="center">
          Checkbox Button & CheckBox Example
        </Typography>
        <FormControl name="country" error={!choice}>
          <FormLabel>Select your country in which you live</FormLabel>
          <RadioGroup
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
          >
            <FormControlLabel
              label="India"
              value="India"
              control={<Radio color="secondary" />}
            />
            <FormControlLabel
              label="America"
              value="USA"
              control={<Radio color="error" />}
            />
            <FormControlLabel
              label="Russia"
              value="USSR"
              control={<Radio color="success" size="small" />}
            />
          </RadioGroup>
          {!choice ? (
            <FormHelperText>Must to select your country</FormHelperText>
          ) : null}
        </FormControl>
      </Box>
      You selected: {choice}
      <Box>
        <FormControl name="countryGo" error={country.length === 0}>
          <FormLabel>Select your country in which you want to go</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="India"
              value="India"
              control={<Checkbox color="secondary" onChange={handleCountry} />}
            />
            <FormControlLabel
              label="America"
              value="USA"
              control={<Checkbox color="error" onChange={handleCountry} />}
            />
            <FormControlLabel
              label="Russia"
              value="USSR"
              control={<Checkbox color="success" onChange={handleCountry} />}
            />
          </FormGroup>
          {country.length === 0 ? (
            <FormHelperText>Must to select your country</FormHelperText>
          ) : null}
        </FormControl>
      </Box>
      You selected: {country.join(",")}
    </Box>
  );
};

export default RadioCheckBox;
