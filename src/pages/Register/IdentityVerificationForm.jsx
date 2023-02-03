import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Webcam from "react-webcam";
import { useMultiStepForm } from "../../components/MultiStepForm";
import VerificationFigure from "./figures/VerificationFigure";
import RegistrationLayout from "./RegistrationLayout";

function IdentityVerificationForm() {
  const { next, previous } = useMultiStepForm();
  return (
    <RegistrationLayout
      onNext={next}
      onBack={previous}
      title="Identity verification"
      figure={VerificationFigure}
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
    </RegistrationLayout>
  );
}

export default IdentityVerificationForm;
