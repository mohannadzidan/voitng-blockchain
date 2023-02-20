import { Grid, Stack, styled, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
const Wrapper = styled("div")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  height: 300px;
`;


function Footer() {
  return (
    <Wrapper>
      <Container
        maxWidth="lg"
        sx={{
          color: "white",
          height: "100%",
          color: "#fff",
        }}
      >
            </Container>
    </Wrapper>
  );
}

export default Footer;
