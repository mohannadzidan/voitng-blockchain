import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";
import styled from "@emotion/styled";
import RegistrationForm from "./RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Theme from "./styles/Theme";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Register from "./pages/Register";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: "muiltr",
  stylisPlugins: [],
});

function App() {
  const { i18n } = useTranslation();
  return (
    <CacheProvider value={i18n.language === "ar" ? cacheRtl : cacheLtr}>
      <Theme>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Bubble>
            <RegistrationForm />
          </Bubble> */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Theme>
    </CacheProvider>
  );
}

export default App;
