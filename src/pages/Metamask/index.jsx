import {
  alpha,
  Button,
  Container,
  darken,
  List,
  ListItem,
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
import { HussainedFormActions } from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";
import addExtensionImage from "./figures/add-extension.png";
import chromeStoreImage from "./figures/chrome-store.png";

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

function Metamask() {
  const { t } = useTranslation(["translation", "common"]);

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
                      {t("metamask.do_you_have")}
                    </Typography>
                    <Stack width="100%" alignItems="start" spacing={1}>
                      <NavigationButton
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowRightIcon />}
                        component="a"
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                        target="_blank"
                      >
                        {t("metamask.click_to_download")}
                      </NavigationButton>
                      <Typography variant="h4" fontWeight="medium">
                        {t("metamask.steps", { returnObjects: true })[0]}
                      </Typography>
                      <img src={chromeStoreImage} width="100%" />
                      <Typography variant="h4" fontWeight="medium">
                        {t("metamask.steps", { returnObjects: true })[1]}
                      </Typography>
                      <img
                        src={addExtensionImage}
                        width={400}
                        style={{ alignSelf: "center" }}
                      />
                      <Typography variant="h4" fontWeight="medium">
                        {t("metamask.click_to_continue")}
                      </Typography>
                    </Stack>
                  </Stack>
                  <HussainedFormActions>
                    <Button
                      variant="contained"
                      component="a"
                      href="https://google.com"
                    >
                      {t("metamask.go_to_elections")}
                    </Button>
                  </HussainedFormActions>
                </Paper>
              </animated.div>
            )
        )}
      </Container>
    </Wrapper>
  );
}

export default Metamask;
