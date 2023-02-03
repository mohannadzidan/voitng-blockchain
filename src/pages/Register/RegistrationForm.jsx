import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useMultiStepForm } from "../../components/MultiStepForm";
import RegistrationFigure from "./figures/RegistrationFigure";
import RegistrationLayout from "./RegistrationLayout";

function RegistrationForm() {
  const { next } = useMultiStepForm();
  return (
    <RegistrationLayout
      onNext={next}
      title="Registration"
      figure={RegistrationFigure}
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
    </RegistrationLayout>
  );
}

export default RegistrationForm;
