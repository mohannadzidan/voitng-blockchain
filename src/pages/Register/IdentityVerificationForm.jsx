import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Webcam from "react-webcam";
import { useMultiStepForm } from "../../components/MultiStepForm";
import VerificationFigure from "./figures/VerificationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";

function IdentityVerificationForm() {
  const { next, previous } = useMultiStepForm();
  return (
    <HussainedForm
      title="Identity verification"
      figure={VerificationFigure}
      actions={
        <HussainedFormActions>
        <Button onClick={previous}>Back</Button>
        <Button variant="contained" onClick={next}>
          Next
        </Button>
      </HussainedFormActions>
      }
    >
      <Webcam
        style={{
          borderRadius: "8px",
          background: "#D9D9D9",
          overflow: "hidden",
          width: "100%",
          height: "240px",
          objectFit: "cover",
        }}
      />
    </HussainedForm>
  );
}

export default IdentityVerificationForm;
