import {
  alpha,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PreparationFigure from "./figures/PreparationFigure";
import { useTransition, animated } from "react-spring";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import baseUrl from "../../baseUrl";

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

function AdminPanel() {
  const { t } = useTranslation();
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
                      {t("admin_panel.title")}
                    </Typography>
                    <PreparationFigure />
                    <Stack width="100%" alignItems="start" spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <NavigationButton
                          variant="contained"
                          disableElevation
                          endIcon={<KeyboardArrowRightIcon />}
                          component={Link}
                          href={`${baseUrl}/admin`}
                        >
                          {t("admin_panel.registration_system.title")}
                        </NavigationButton>
                        <Tooltip
                          title={t(
                            "admin_panel.registration_system.description"
                          )}
                          placement="top"
                          arrow
                        >
                          <InfoIcon
                            sx={{
                              fontSize: "16px",
                              color: (theme) =>
                                alpha(theme.palette.secondary.main, 0.6),
                            }}
                          />
                        </Tooltip>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <NavigationButton
                          variant="contained"
                          disableElevation
                          endIcon={<KeyboardArrowRightIcon />}
                          component={Link}
                          href="/elections"
                        >
                          {t("admin_panel.voting_system.title")}
                        </NavigationButton>
                        <Tooltip
                          title={t("admin_panel.voting_system.description")}
                          placement="top"
                          arrow
                        >
                          <InfoIcon
                            sx={{
                              fontSize: "16px",
                              color: (theme) =>
                                alpha(theme.palette.secondary.main, 0.6),
                            }}
                          />
                        </Tooltip>
                      </Stack>
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

export default AdminPanel;
