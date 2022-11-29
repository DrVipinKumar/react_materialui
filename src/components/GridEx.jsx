import React from "react";
import { Grid, Typography } from "@mui/material";
const GridEx = () => {
  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="h4">Material UI Grid System</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        Col1
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        Col2
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        Col3
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        Col4
        <Grid container>
          <Grid item xs={12}>
            Nested Container
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridEx;
