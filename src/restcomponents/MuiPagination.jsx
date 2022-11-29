import React from "react";
import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import MuiPortal from "./MuiPortal";
import MuiTab from "./MuiTabs";
import MuiSkeleton from "./MuiSkeleton";
import MuiModal from "./MuiModal";
const OpenPage = (props) => {
  const { children, page, index } = props;
  return (
    <div hidden={page !== index}>
      {page === index && <Box mt={2}>{children}</Box>}
    </div>
  );
};
const MuiPagination = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Pagination Example
      </Typography>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={10}
          page={activePage}
          onChange={(event, newPage) => setActivePage(newPage)}
          size="large"
          //defaultPage={5}
          // siblingCount={1}
          //boundaryCount={1}
          color="secondary"
          variant="outlined"
          showFirstButton
          showLastButton
          // hideNextButton
          // hidePrevButton
          sx={{
            "Button.MuiPaginationItem-circular.Mui-selected": {
              bgcolor: "secondary.main",
              color: "#ffffff",
            },
          }}
          //shape="rounded"
        />
      </Box>
      <OpenPage page={activePage} index={1}>
        <MuiTab />
      </OpenPage>
      <OpenPage page={activePage} index={2}>
        <MuiSkeleton />
      </OpenPage>
      <OpenPage page={activePage} index={3}>
        <MuiPortal />
      </OpenPage>
      <OpenPage page={activePage} index={4}>
        <MuiModal />
      </OpenPage>
    </Box>
  );
};
export default MuiPagination;
