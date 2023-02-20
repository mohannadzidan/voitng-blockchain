import { Container, Paper, styled, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Stepper from "../../components/Stepper";
import MultiStepForm, {
  FormStep,
  useMultiStepForm,
} from "../../components/MultiStepForm";
import IdentityVerificationForm from "./IdentityVerificationForm";
import ReviewDetailsForm from "./ReviewDetailsForm";
import FinishRegistrationForm from "./FinishRegistrationForm";
import { useTranslation } from "react-i18next";

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

function Register() {
  const [step, setStep] = useState(0);
  const { t } = useTranslation();
  const titles = useMemo(() => [
    t("register.info.title"),
    t("register.identity_verification.title"),
    t("register.review_details.title"),
    t("register.finish.title"),
  ]);
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        <Stepper titles={titles} activeStep={step} />
        <Paper
          sx={{
            padding: 4,
            marginX: 16,
            borderRadius: "8px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          <MultiStepForm step={step} onChange={setStep}>
            <FormStep index={0}>
              <RegistrationForm />
            </FormStep>
            <FormStep index={1}>
              <IdentityVerificationForm />
            </FormStep>
            <FormStep index={2}>
              <ReviewDetailsForm />
            </FormStep>
            <FormStep index={3}>
              <FinishRegistrationForm />
            </FormStep>
          </MultiStepForm>
        </Paper>
      </Container>
    </Wrapper>
  );
}

export default Register;
