import { Container, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
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

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const titles = [
  "Enter your info",
  "Identity Verification",
  "Review Details",
  "Finish",
];

function Register() {
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        <MultiStepForm>
          <Stepper
            titles={titles}
            activeStep={() => {
              const { currentStep } = useMultiStepForm();
              return currentStep;
            }}
          />
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
      </Container>
    </Wrapper>
  );
}

export default Register;
