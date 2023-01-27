import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Theme({ children }) {
  const { i18n } = useTranslation();
  const theme = useMemo(
    () =>
      createTheme({
        direction: i18n.language === "ar" ? "rtl" : "ltr",
        typography: {
          fontWeightLight: 300,
          fontWeightMedium: 500,
          fontWeightLight: 700,
          h1: {
            fontSize: 49,
          },
          h2: {
            fontSize: 39,
          },
          h3: {
            fontSize: 31,
          },
          h4: {
            fontSize: 25,
          },
          h5: {
            fontSize: 20,
          },
          body1: {
            fontSize: 16,
          },
          fontFamily: '"Cairo", "Poppins", "Roboto","Helvetica","Arial",sans-serif',
        },
        palette: {
          primary: {
            main: "#FB6054",
            dark: "#bc483f",
            light: "#e4574c",
            contrastText: "#F5F5F5",
            // #313b57 dark
          },
          secondary: {
            main: "#1a1fa3",
            light: "#2529b1",
            dark: "#181c98",
          },
          common: {
            black: "#1F1E27",
            white: "#F5F5F5",
          },
          white: {
            light: "#FAFAFA",
            main: "#F5F5F5",
            dark: "#eaeaea",
            contrastText: "#1F1E27",
          },
          background: {
            paper: "#F5F5F5",
          },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              color: "#1F1E27",
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "8px",
              },
            },
          },
        },
      }),
    [i18n.language]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
