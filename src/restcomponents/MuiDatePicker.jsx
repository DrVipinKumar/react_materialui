import { Box, TextField, Typography, Stack } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
const MuiDatePicker = () => {
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  const [dateTimeValue, setDateTimeValue] = useState(null);
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Date Picker Example
      </Typography>
      <Stack direction="row" spacing={2} mt={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select date"
            minDate={dayjs("2022-02-22")}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <MobileDatePicker
            label="Mobile date picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <DesktopDatePicker
            label="Desktop date picker"
            openTo="year"
            views={["month", "year"]}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack direction="row" spacing={2} mt={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select time"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <MobileTimePicker
            label="Mobile time picker"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <DesktopTimePicker
            minTime={dayjs("2022-02-22T08:10")}
            maxTime={dayjs("2022-02-22T10:10")}
            label="Desktip time picker"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack direction="row" spacing={2} mt={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Select date & time"
            value={dateTimeValue}
            onChange={(newValue) => setDateTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <MobileDateTimePicker
            label="Mobile date & time picker"
            value={dateTimeValue}
            onChange={(newValue) => setDateTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
          <DesktopDateTimePicker
            label="Desktop date & time picker"
            value={dateTimeValue}
            onChange={(newValue) => setDateTimeValue(newValue)}
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>
      </Stack>
    </Box>
  );
};

export default MuiDatePicker;
