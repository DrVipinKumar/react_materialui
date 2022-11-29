import { useState } from "react";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
const MuiAutocompleteMulAttribute = () => {
  const nameList = [
    { firstName: "Mr. Ashok", lastName: "Kumar" },
    { firstName: "Dr. Rajiv", lastName: "Teotia" },
    { firstName: "Dr. Vipin", lastName: "Classes" },
    { firstName: "Mr. Sachin", lastName: "Kumar" },
    { firstName: "Mr. Ravi", lastName: "Verma" },
  ];
  const [value, setValue] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const optionParam = {
    options: nameList,
    getOptionLabel: (options) => `${options.firstName} ${options.lastName}`,
  };
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Autocomplete with Multiple Attribute Example
      </Typography>
      <Box width={400}>
        <Autocomplete
          {...optionParam}
          //   options={nameList}
          //   getOptionLabel={(options) =>
          //     `${options.firstName} ${options.lastName}`
          //   }
          isOptionEqualToValue={(option, value) => option.value === value.value}
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} label="Select name" />
          )}
        />
      </Box>
      <Typography variant="h5">
        Selected Value: {value ? `${value.firstName} ${value.lastName}` : null}
      </Typography>
    </Box>
  );
};

export default MuiAutocompleteMulAttribute;
