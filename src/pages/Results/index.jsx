import {
  alpha,
  Avatar,
  Box,
  Button,
  Container,
  darken,
  Paper,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { elections } from "../Vote/mock";

const Wrapper = styled("div")`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const CandidateButton = styled(Button)`
  background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.06)};
  color: ${({ theme }) => theme.palette.secondary.main};
  justify-content: start;
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.palette.secondary.main, 0.1)};
  }
  & > :not(:last-child) {
    margin-inline-start: 8px;
  }
`;

function Results() {
  const transition = useTransition(true, {
    config: {
      damping: 0.8,
      friction: 14,
    },
    from: { scale: 0.8, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 1, opacity: 0 },
  });
  const { id } = useParams;
  const election = useMemo(() => elections[0], [id]);
  const theme = useTheme();
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
                  <Stack alignItems="center" spacing={1}>
                    <Typography variant="h3" fontWeight="medium">
                      Results of {election?.name}
                    </Typography>

                    {election.candidates.map((candidate) => {
                      const v = Math.round(Math.random() * 50);
                      const r = 100 - v;
                      return (
                        <CandidateButton key={candidate._id} fullWidth>
                          <Avatar src={candidate.photo} />
                          <Typography variant="body1" fontWeight="medium">
                            {candidate.firstName} {candidate.lastName}
                          </Typography>
                          <Box flex={1} />
                          <Box sx={{ width: 40, height: 40 }}>
                            {" "}
                            <PieChart
                              animate={true}
                              data={[
                                {
                                  title: "One",
                                  value: v,
                                  color: theme.palette.primary.main,
                                },
                                {
                                  title: "One",
                                  value: r,
                                  color: theme.palette.common.white,
                                },
                              ]}
                            />
                          </Box>
                          <Typography variant="body1" fontWeight="medium">
                            {v}%
                          </Typography>
                        </CandidateButton>
                      );
                    })}
                    {/* {election} */}
                  </Stack>
                </Paper>
              </animated.div>
            )
        )}
      </Container>
    </Wrapper>
  );
}

export default Results;
