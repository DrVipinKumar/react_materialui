import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
const MuiDataGrid = () => {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
    maxColumns: 6,
  });
  const fields = [
    { field: "sid", headerName: "Student ID", width: 150 },
    { field: "fname", headerName: "First Name", width: 150 },
    { field: "lname", headerName: "Last Name", width: 150 },
  ];
  const rows = [
    { id: 1, sid: 1, fname: "Dr. Vipin", lname: "Classes" },
    { id: 2, sid: 2, fname: "Dr. Sachin", lname: "Kumar" },
    { id: 3, sid: 3, fname: "Dr. Vipin", lname: "Teotia" },
    { id: 4, sid: 3, fname: "Dr. Ankit", lname: "Verma" },
  ];
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Data Grid Example
      </Typography>
      <Box m={2} sx={{ height: 400, width: 600, mx: "auto" }}>
        <DataGrid rows={rows} columns={fields} />
      </Box>
      <Box m={2} sx={{ height: 400, width: "90%", mx: "auto" }}>
        <DataGrid {...data} />
      </Box>
    </Box>
  );
};

export default MuiDataGrid;
