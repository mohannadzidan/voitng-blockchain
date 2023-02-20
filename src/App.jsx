import React, { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
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
import Header from "./components/Header";
import Theme from "./styles/Theme";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import FullscreenLoader from "./components/FullscreenLoader";

const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Results = lazy(() => import("./pages/Results"));
const Preparation = lazy(() => import("./pages/Preparation"));
const About = lazy(() => import("./pages/About"));
const Vote = lazy(() => import("./pages/Vote"));

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
            <Route
              path="/"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/register/*"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/elections/*"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Vote />
                </Suspense>
              }
            />
            <Route
              path="/preparation"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Preparation />
                </Suspense>
              }
            />
            <Route
              path="/results/:id"
              element={
                <Suspense fallback={<FullscreenLoader />}>
                  <Results />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Theme>
    </CacheProvider>
  );
}

export default App;
