import React from "react";
import {
  Box,
  Step,
  Stack,
  Button,
  StepLabel,
  Stepper,
  Typography,
  StepContent,
} from "@mui/material";
import { useState } from "react";
import MuiPortal from "./MuiPortal";
const MuiStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipActivity, setSkipActivity] = useState(new Set());
  const handleSkip = () => {
    if (activeStep < 6) setActiveStep((prevStep) => prevStep + 1);
    setSkipActivity((prevSkip) => {
      const newSkipSet = new Set(prevSkip.values());
      newSkipSet.add(activeStep);
      return newSkipSet;
    });
  };
  const handleNext = () => {
    if (activeStep < 6) setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    if (activeStep > 1) setActiveStep((prevStep) => prevStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setSkipActivity(new Set());
  };
  const activities = [
    "Start",
    "Do some work",
    "Do more work",
    "Take some rest",
    "Now work again",
    "Finish",
  ];
  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center">
        MUI Stepper Example
      </Typography>
      <Box mx={3} mt={2} display="flex" justifyContent="center">
        <Stepper
          activeStep={activeStep}
          alternativeLabel={false}
          orientation="horizontal"
        >
          {activities.map((step, index) => {
            const stepProps = {};
            const labelProps = {};
            if (skipActivity.has(index)) {
              stepProps.completed = false;
              labelProps.optional = (
                <Typography variant="caption" color="error">
                  Optional
                </Typography>
              );
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel {...labelProps}>{step}</StepLabel>
                {index === 3 && (
                  <StepContent sx={{ width: 200, height: 200 }}>
                    <MuiPortal />
                  </StepContent>
                )}
                {index === 2 && (
                  <StepContent>
                    <Typography
                      variant="body2"
                      color="secondary"
                      width={350}
                      align="justify"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam doloremque rerum, ipsam corrupti fugit
                      exercitationem vero voluptate. Ut repellat perferendis, ad
                      dolor voluptas voluptatibus exercitationem, nulla eveniet
                      sed incidunt eligendi?
                    </Typography>
                  </StepContent>
                )}
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box mt={3} align="center">
        <Stack spacing={3} direction="row" maxWidth={500}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePrevious}
          >
            {activeStep < 2 ? "First" : "Previous"}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleNext}>
            {activeStep > 5 ? "Last" : "Next"}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleSkip}>
            Skip Step
          </Button>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default MuiStepper;
