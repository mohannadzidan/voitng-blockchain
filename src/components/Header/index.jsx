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
import AppLogo from "../AppLogo";
import LanguageIcon from "@mui/icons-material/Language";
import { useCallback, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function useNavScroll(path, hash, { timeoutRef, ...options }) {
  const navigate = useNavigate();
  return useCallback(() => {
    setTimeout(() => {});
    clearTimeout(timeoutRef.current);
    navigate(`${path}#${hash}`);
    timeoutRef.current = setTimeout(() => {
      scroller.scrollTo(hash, options);
    }, 100);
  }, [navigate, path, hash]);
}

function Header() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const { pathname } = useLocation();
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const toggleLanguage = useCallback(() => {
    const lang = i18n.language === "en" ? "ar" : "en";
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.dir = dir;
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  }, [i18n]);
  const scrollTimeoutRef = useRef();
  return (
    <AppBar
      sx={{
        backgroundColor: trigger
          ? theme.palette.background.paper
          : "transparent",
        color:
          trigger || pathname !== "/"
            ? theme.palette.common.black
            : theme.palette.common.white,
        backdropFilter: "blur(3px)",
      }}
      elevation={trigger ? 4 : 0}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Button color='inherit' component={Link} to='/'>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                marginInlineEnd: 2,
              }}
            >
              <AppLogo fontSize="large" />
              <Typography>{t("blockchain_election")}</Typography>
            </Stack>
          </Button>
          <Button
            variant="text"
            startIcon={<LanguageIcon />}
            onClick={toggleLanguage}
          >
            {t("other_language")}
          </Button>
          <Box flex={1} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
