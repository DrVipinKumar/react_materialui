import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import MuiPortal from "./MuiPortal";
import MuiSkeleton from "./MuiSkeleton";
import MuiStepper from "./MuiStepper";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box mt={2} mx={2}>
          {children}
        </Box>
      )}
    </div>
  );
};
const MuiTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Tabs Example
      </Typography>
      <AppBar position="static" color="warning" sx={{ borderRadius: 2 }}>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          //variant="scrollable"
          //variant="fullWidth"
          centered
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#ffffff" },
            "& .MuiTab-root": { color: "#ffffff" },
            "& .MuiTab-root:hover": { color: "#ffff00" },
            "Button.Mui-selected": { color: "#ffff00" },
          }}
        >
          <Tab label="Tab 1 have long text to display" wrapped />
          <Tab label="Portal" />
          <Tab label="Skeleton" />
          <Tab label="Stepper" />
          {/* <Tab label="Tab 5" />
          <Tab label="Tab 6" />
          <Tab label="Tab 7" />
          <Tab label="Tab 8" />
          <Tab label="Tab 9" />
          <Tab label="Tab 10" />
          <Tab label="Tab 11" />
          <Tab label="Tab 12" /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <Typography variant="body2" color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit
          illo rerum quo vel nostrum expedita sunt ex? Similique unde quas
          soluta quo id rem earum delectus incidunt. Deleniti, eaque?
        </Typography>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <MuiPortal />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <MuiSkeleton />
      </TabPanel>
      <TabPanel value={activeTab} index={3}>
        <MuiStepper />
      </TabPanel>
    </Box>
  );
};

export default MuiTabs;
