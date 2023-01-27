import React from "react";
import Section from "./Section";
import ballotPng from "../../assets/ballot.png";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import VoteIcon from "./VoteIcon";
import LaptopIcon from "./LaptopIcon";
import MobileIcon from "./MobileIcon";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Section
        sx={{
          background: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.common.white,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="60vh"
            >
              <VoteIcon />
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
              <Stack spacing={2}>
                <Typography variant="h2" fontWeight="medium">
                  {t("hero.part_of_decision")}
                </Typography>
                <Typography variant="body1">{t("hero.quote1")}</Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" disableElevation>
                    {t("hero.vote_now")}
                  </Button>
                  <Button variant="text" color="white" disableElevation>
                    {t("read_more")}
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography component="span">{t("hero.vote_with")}</Typography>
            <LaptopIcon fontSize="large" />
            <Typography component="span">{t("laptop")}</Typography>
            <Typography color="primary" component="span" fontWeight="bold">
              {t("hero.or")}
            </Typography>
            <Typography component="span"> {t("mobile")}</Typography>
            <MobileIcon fontSize="large" />
          </Stack>
        </Container>
      </Section>
      <Section>
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="60vh"
            >
              <VoteIcon />
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center">
              <Stack spacing={2}>
                <Typography variant="h2" fontWeight="medium">
                  Be part of the decision
                </Typography>
                <Typography variant="body1">
                  We believe that democracy creates better organizations and
                  territories, and that technology should be at the service of
                  people and their institutions.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" disableElevation>
                    Vote now
                  </Button>
                  <Button variant="text" color="white" disableElevation>
                    Read More
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography component="span">
              You can vote with Your laptop
            </Typography>
            <LaptopIcon fontSize="large" />
            <Typography color="primary" component="span" fontWeight="bold">
              OR
            </Typography>
            <Typography component="span">mobile</Typography>
            <MobileIcon fontSize="large" />
          </Stack>
        </Container>
        <Typography variant="h5">Features</Typography>
      </Section>
      <Section>
        <Typography variant="h5">Features</Typography>
      </Section>
    </>
  );
}

export default Home;
