import { Container, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Stepper from "../../components/Stepper";

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
        <Stepper titles={titles} activeStep={0}/>
        <Routes>
          <Route index element={<RegistrationForm />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default Register;
