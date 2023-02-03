import React from "react";
import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper as MuiStepper,
  styled,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 8,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: 0,
    backgroundColor: "#d9d9d9",
    height: "8px",
    borderRadius: "8px",
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: "#d9d9d9",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.secondary.main,
  }),
  "& .QontoStepIcon-completedIcon": {
    borderRadius: "50%",
    width: 32,
    height: 32,
    padding: 4,
    zIndex: 1,
    fontSize: 18,
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
  },
  "& .QontoStepIcon-circle": {
    borderRadius: "50%",
    width: 32,
    height: 32,
    backgroundColor: "#d9d9d9",
    boxSizing: "border-box",
  },
  ".Mui-active & .QontoStepIcon-circle": {
    border: "8px solid " + theme.palette.secondary.main,
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

function Stepper({ activeStep = 0, titles = [], ...props }) {
  return (
    <MuiStepper
      activeStep={typeof activeStep === "function" ? activeStep() : activeStep}
      alternativeLabel
      sx={{ margin: 2 }}
      connector={<QontoConnector />}
      {...props}
    >
      {titles.map((title, index) => (
        <Step key={title + index}>
          <StepLabel StepIconComponent={QontoStepIcon}>{title}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}

export default Stepper;
