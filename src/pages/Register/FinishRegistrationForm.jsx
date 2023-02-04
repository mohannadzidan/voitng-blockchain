import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useMultiStepForm } from "../../components/MultiStepForm";
import RegistrationFigure from "./figures/RegistrationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";

function FinishRegistrationForm() {
  const navigate = useNavigate();
  return (
    <HussainedForm
      title="Finish"
      actions={
        <HussainedFormActions>
          <Button onClick={() => navigate("/")}>Return to home</Button>
          <Button variant="contained" onClick={() => navigate("/elections")}>
            Go to elections
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body1">
          Congratulations, you have finished your registration and you are able
          to use your hash code now to vote, your hash code is as the following
        </Typography>
        <Typography
          fontFamily="monospace"
          sx={{
            padding: 2,
            background: (theme) => theme.palette.background.paper,
            wordBreak: "break-word",
          }}
          component="div"
        >
          ff4d86bc0e00cd4b7ff4d86bc0e00cd4b7b90660cd4b7ff4d86bbc0e0e00cd4b7b90660cd4b7ff4d86bbc0e00cd4b7b9066ffa083ee9dfb18b6bc0e0ffa083ee9dfb18b620b90ff4d86bc0e00cd4b7b9066ffa083ee9dfb18b62066ffa083ee9dfb18b620
        </Typography>
        <Typography variant="h4" fontWeight="medium">
          Important Notes
        </Typography>
        <Typography variant="body1" fontWeight="medium" component="ul">
          <li>Your Hash code is very important Keep it secret</li>
          <li>Your Hash code is valid only one time</li>
        </Typography>
      </Stack>
    </HussainedForm>
  );
}

export default FinishRegistrationForm;
