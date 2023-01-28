import { styled } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
const Wrapper = styled("div")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  height: 300px;
`;
function Footer() {
  return (
    <Wrapper>
      <Container maxWidth="lg" />
    </Wrapper>
  );
}

export default Footer;
