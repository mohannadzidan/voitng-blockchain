import {
  alpha,
  Button,
  Container,
  darken,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PreparationFigure from "./figures/PreparationFigure";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const NavigationButton = styled(Button)`
  background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.06)};
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.palette.secondary.main, 0.1)};
  }
`;

function Preparation() {
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        <Paper
          sx={{
            padding: 4,
            marginX: {
              md: 16,
            },
            borderRadius: "8px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            background: "#fff",
          }}
        >
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h3" fontWeight="medium">
              Vestibulum nec fermentum turpis!
            </Typography>
            <PreparationFigure />
            <Typography variant="body1" fontWeight="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lacus dolor, lacinia sit amet ante sit amet, dictum gravida erat.
              Nullam eget varius sapien, sit amet blandit magna.
            </Typography>
            <Stack width="100%" alignItems="start" spacing={1}>
              <NavigationButton
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowRightIcon />}
                component={Link}
                to="/register"
              >
                I don’t have my hash code, i want to register
              </NavigationButton>
              <NavigationButton
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowRightIcon />}
                component={Link}
                to="/vote"
              >
                I have my hash code, take me to the voting panel
              </NavigationButton>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Wrapper>
  );
}

export default Preparation;
