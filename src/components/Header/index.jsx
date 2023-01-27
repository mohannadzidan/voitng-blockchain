import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  styled,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React from "react";
import { useMemo } from "react";
import AppLogo from "../AppLogo";
import LanguageIcon from "@mui/icons-material/Language";
import { useCallback } from "react";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const theme = useTheme();
  const bgColor = useMemo(
    () => alpha(theme.palette.background.paper, 0.8),
    [theme]
  );
  const { t, i18n } = useTranslation();
  const toggleLanguage = useCallback(() => {
    const lang = i18n.language === "en" ? "ar" : "en";
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.dir = dir;
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  }, [i18n]);
  return (
    <AppBar
      sx={{
        backgroundColor: trigger
          ? theme.palette.background.paper
          : "transparent",
        color: trigger
          ? theme.palette.common.black
          : theme.palette.common.white,
        backdropFilter: "blur(3px)",
      }}
      elevation={trigger ? 4 : 0}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              marginInlineEnd: 2,
            }}
          >
            <AppLogo fontSize="large" />
            <Typography>Blockchain Election</Typography>
          </Stack>
          <Button
            variant="text"
            startIcon={<LanguageIcon />}
            onClick={toggleLanguage}
          >
            {t("other_language")}
          </Button>
          <Box flex={1} />
          <Stack direction="row" spacing={2}>
            <Button color="inherit">{t("about")}</Button>
            <Button color="inherit">{t("contact")}</Button>
            <Button variant="contained" color="primary">
              {t("login")}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
