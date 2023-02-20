import React from "react";
import Section from "../../components/Section";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import RegisterIcon from "../../components/icons/RegisterIcon";
import WindowsIcon from "../../components/icons/WindowsIcon";
import TargetIcon from "../../components/icons/TargetIcon";
import KeyIcon from "../../components/icons/KeyIcon";
import VoteIcon from "../../components/icons/VoteIcon";
import Steel from "../../components/icons/Steel";
import Hand from "../../components/icons/Hand";
import Circle from "../../components/icons/Circle";
import ScanFace from "../../components/icons/ScanFace";
import PriceTagIcon from "../../components/icons/PriceTagIcon";
import ProjectMember from "./ProjectMember";
import { Link } from "react-router-dom";
import Lock from "../../components/icons/Lock";

const teamMembers = [
  {
    name: "Omar Tarek",
    displayImage: "/images/team-members/omar-tarek.jpg",
    linkedinProfile: "https://www.linkedin.com/in/omar-tareq9/",
    facebookProfile: "https://www.facebook.com/otareq",
  },
  {
    name: "Mohamed Abd-Elhalim",
    displayImage: "/images/team-members/mohamed-abdelhalim.jpg",
    linkedinProfile: "",
    facebookProfile: "",
  },
  {
    name: "Youssef Abdelrahman",
    displayImage: "/images/team-members/youssef-abdelrahman.jpg",
    linkedinProfile:
      "https://www.linkedin.com/in/youssef-abdelrahman-31380822a/",
    facebookProfile: "https://www.facebook.com/youssef.abdelrahman.96",
  },
  {
    name: "Mohamed Diab",
    displayImage: "/images/team-members/mohamed-diab.jpeg",
    linkedinProfile: "https://www.linkedin.com/in/mohamad-diab-b8180219b/",
    facebookProfile: "https://www.facebook.com/Mohamad.Diab2000",
  },
  {
    name: "Mohamed Khalid",
    displayImage: "/images/team-members/mohamed-khalid.jpg",
    linkedinProfile: "https://www.linkedin.com/in/mohamed-khaled-916b10234/",
    facebookProfile: "https://www.facebook.com/profile.php?id=100002159652083",
    imgStyles: {
      objectPosition: "0 -10px",
    },
  },
];

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Section sx={{ minHeight: "unset", paddingTop: 8 }}>
        <Container
          maxWidth="lg"
          sx={{
            paddingY: 2,
            height: "100%",
          }}
        >
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              xs={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                color="secondary"
                fontWeight={"medium"}
                marginTop={1}
                marginBottom={2}
              >
                {t("landing.features.title")}
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Lock />
                  <Typography variant="body1">
                    {t("landing.features.feat_1")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Steel />
                  <Typography variant="body1">
                    {t("landing.features.feat_2")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ScanFace />
                  <Typography variant="body1">
                    {t("landing.features.feat_3")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Hand />
                  <Typography variant="body1">
                    {t("landing.features.feat_4")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PriceTagIcon />
                  <Typography variant="body1">
                    {t("landing.features.feat_5")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Circle />
                  <Typography variant="body1">
                    {t("landing.features.feat_6")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                color="secondary"
                fontWeight={"medium"}
                marginTop={1}
                marginBottom={2}
              >
                {t("landing.steps.title")}
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <RegisterIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_1")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TargetIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_2")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <WindowsIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_3")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <KeyIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_5")}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <VoteIcon />
                  <Typography variant="body1">
                    {t("landing.steps.step_6")}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section id="about">
        <Container
          maxWidth="lg"
          sx={{
            paddingY: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h2" color="secondary" fontWeight="medium">
              {t("landing.about.title")}
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {t("landing.about.p1")}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              fontWeight="medium"
              textAlign="center"
              id="contact"
            >
              {t("landing.about.meet_the_team")}
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              fontWeight="medium"
              textAlign="center"
            >
              {t("landing.about.meet_the_team_p1")}
            </Typography>
            <Grid container columnSpacing={3} rowSpacing={3}>
              {teamMembers.map((x) => (
                <Grid
                  item
                  xs
                  display="flex"
                  justifyContent="center"
                  key={x.name}
                >
                  <ProjectMember member={x} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  );
}

export default About;
