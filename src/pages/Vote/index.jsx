import { Container, Paper, styled, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ElectionsPanel from "./ElectionsPanel";
import Stepper from "../../components/Stepper";
import MultiStepForm, {
  FormStep,
  useMultiStepForm,
} from "../../components/MultiStepForm";
import Rules from "./Rules";
import HashCodeForm from "./HashCodeForm";
import VotingForm from "./VotingForm";

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const titles = [
  "Chose The Election",
  "Accept The Rules",
  "Enter Hash Code",
  "Vote",
];

function Vote() {
  const [step, setStep] = useState(0);
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
              <ElectionsPanel />
            </FormStep>
            <FormStep index={1}>
              <Rules />
            </FormStep>
            <FormStep index={2}>
              <HashCodeForm />
            </FormStep>
            <FormStep index={3}>
              <VotingForm />
            </FormStep>
          </MultiStepForm>
        </Paper>
      </Container>
    </Wrapper>
  );
}

export default Vote;
