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
import { useTransition, animated } from "react-spring";

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
  const transition = useTransition(true, {
    config: {
      damping: 0.8,
      friction: 14,
    },
    from: { scale: 0.8, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 1, opacity: 0 },
  });
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        {transition(
          (style, item) =>
            item && (
              <animated.div style={style}>
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
                      Do You Have Your Hash Code?
                    </Typography>
                    <PreparationFigure />
                    <Typography variant="body1" fontWeight="medium">
                      Your Hash code is important to the election process and
                      you can’t vote without it, You Must Take it by registering
                      the first time.
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
              </animated.div>
            )
        )}
      </Container>
    </Wrapper>
  );
}

export default Preparation;
