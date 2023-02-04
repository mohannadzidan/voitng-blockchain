import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import RegistrationFigure from "./figures/RegistrationFigure";

function RegistrationForm() {
  const { next } = useMultiStepForm();
  return (
    <HussainedForm
      title="Registration"
      figure={RegistrationFigure}
      actions={
        <HussainedFormActions>
          <Button variant="contained" onClick={next}>
            Next
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={2}>
        <div>
          <Typography fontWeight="light">Full name</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <Typography fontWeight="light">National ID</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="ie; 6100 4080 9126 0909"
          />
        </div>
        <div>
          <Typography fontWeight="light">Phone number</Typography>
          <TextField fullWidth size="small" placeholder="+20 xxx xxxx xxxx" />
        </div>
      </Stack>
    </HussainedForm>
  );
}

export default RegistrationForm;
