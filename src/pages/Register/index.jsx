import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

function Register() {
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        <Box height={72}></Box>
        <Routes>
          <Route index element={<RegistrationForm />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default Register;
