import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
const MuiAccordion = () => {
  const [expand, setExpand] = useState();
  const handleExpand = (isExpand, value) => {
    setExpand(isExpand ? value : false);
  };
  return (
    <Box>
      <Typography variant="h4" align="center">
        MUI Accordion Example
      </Typography>
      <Box m={2}>
        <Accordion
          id="accord_one"
          aria-label="accord_one"
          expanded={expand === "one"}
          onChange={(event, IsExpand) => handleExpand(IsExpand, "one")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
            <Typography variant="h5" color="secondary">
              Accordion One
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              iure repellat libero corporis ullam reiciendis quis molestias
              dolore inventore ipsa delectus placeat laudantium cupiditate
              tenetur ratione impedit mollitia eos neque.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expand === "two"}
          onChange={(event, IsExpand) => handleExpand(IsExpand, "two")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
            <Typography variant="h5" color="secondary">
              Accordion Two
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              iure repellat libero corporis ullam reiciendis quis molestias
              dolore inventore ipsa delectus placeat laudantium cupiditate
              tenetur ratione impedit mollitia eos neque.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expand === "three"}
          onChange={(event, IsExpand) => handleExpand(IsExpand, "three")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
            <Typography variant="h5" color="secondary">
              Accordion Three
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              iure repellat libero corporis ullam reiciendis quis molestias
              dolore inventore ipsa delectus placeat laudantium cupiditate
              tenetur ratione impedit mollitia eos neque.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default MuiAccordion;
