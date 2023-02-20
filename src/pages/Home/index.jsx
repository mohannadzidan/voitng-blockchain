import React from "react";
import Section from "../../components/Section";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import HeroIllustration from "./HeroIllustration";
import LaptopIcon from "./LaptopIcon";
import MobileIcon from "./MobileIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  return (
    <Section
      sx={{
        background: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.common.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
            <HeroIllustration />
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center">
            <Stack spacing={2}>
              <Typography variant="h2" fontWeight="medium">
                {t("hero.part_of_decision")}
              </Typography>
              <Typography variant="body1">{t("hero.quote1")}</Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  to={"/preparation"}
                  component={Link}
                  disableElevation
                  sx={{ fontSize: "1rem" }}
                >
                  {t("hero.vote_now")}
                </Button>
                <Button
                  variant="text"
                  color="white"
                  disableElevation
                  to="/about"
                  component={Link}
                  sx={{ fontSize: "1rem" }}
                >
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
  );
}

export default Home;
