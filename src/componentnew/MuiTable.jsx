import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
const MuiTable = () => {
  return (
    <Box mx={2}>
      <Typography variant="h5" color="secondary" align="center">
        MUI Table Example
      </Typography>
      <Box sx={{ mx: "auto" }} width={800}>
        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "secondary.main",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "secondary.main",
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "secondary.main",
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "secondary.main",
                  }}
                >
                  E-Mail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ textAlign: "center" }}>{row.id}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.first_name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.last_name}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Queenie",
    last_name: "De L'Isle",
    email: "qdelisle0@imageshack.us",
    gender: "Female",
    ip_address: "101.163.44.138",
  },
  {
    id: 2,
    first_name: "Luz",
    last_name: "Cater",
    email: "lcater1@forbes.com",
    gender: "Female",
    ip_address: "74.6.180.138",
  },
  {
    id: 3,
    first_name: "Gare",
    last_name: "Reymers",
    email: "greymers2@wikipedia.org",
    gender: "Male",
    ip_address: "233.98.27.82",
  },
  {
    id: 4,
    first_name: "Polly",
    last_name: "Cheatle",
    email: "pcheatle3@tinyurl.com",
    gender: "Female",
    ip_address: "24.240.213.109",
  },
  {
    id: 5,
    first_name: "Carole",
    last_name: "Fanti",
    email: "cfanti4@mapy.cz",
    gender: "Female",
    ip_address: "171.120.226.150",
  },
  {
    id: 6,
    first_name: "Quincy",
    last_name: "Cabell",
    email: "qcabell5@vinaora.com",
    gender: "Male",
    ip_address: "56.61.55.16",
  },
  {
    id: 7,
    first_name: "Demeter",
    last_name: "Keeley",
    email: "dkeeley6@elegantthemes.com",
    gender: "Female",
    ip_address: "252.132.73.188",
  },
  {
    id: 8,
    first_name: "Biddie",
    last_name: "Chesney",
    email: "bchesney7@theglobeandmail.com",
    gender: "Female",
    ip_address: "81.86.125.232",
  },
  {
    id: 9,
    first_name: "Esther",
    last_name: "McCreath",
    email: "emccreath8@so-net.ne.jp",
    gender: "Female",
    ip_address: "150.233.190.88",
  },
  {
    id: 10,
    first_name: "Jessi",
    last_name: "Tucknutt",
    email: "jtucknutt9@bbb.org",
    gender: "Female",
    ip_address: "41.18.108.23",
  },
];
