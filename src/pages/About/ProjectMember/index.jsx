import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ProjectMember({ member }) {
  const {
    displayImage,
    name,
    facebookProfile: facebookLink,
    linkedinProfile: linkedinLink,
    imgStyles,
  } = member;

  return (
    <Paper
      spacing={2}
      sx={{
        paddingY: 3,
        paddingX: 2,
        width: "210px",
        boxSizing: "border-box",
        alignItems: "center",
      }}
      component={Stack}
      elevation={3}
    >
      <Box
        sx={{
          position: "relative",
          "& .border": {
            position: "absolute",
            left: -5,
            top: -5,
            zIndex: 1,
          },
        }}
      >
        <svg
          className="border"
          width="170"
          height="176"
          viewBox="0 0 170 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M8.54969 46.5849C20.3782 25.0788 45.1467 34.2603 44.0497 21.0849C41.9681 -3.9151 100.821 0.606593 126.05 13.0849C156.181 27.9878 181.35 55.6849 158.55 108.085C130.05 173.585 98.0497 183.585 52.0497 163.585C6.04969 143.585 27.5497 127.585 11.0497 113.585C-1.77998 102.699 2.28239 57.9799 8.54969 46.5849Z"
            stroke="#222145"
            stroke-width="5"
            stroke-linecap="round"
            stroke-dasharray="10 20 30 40"
          />
        </svg>
        <Avatar
          src={displayImage}
          sx={{ width: 158, height: 158, "& img": imgStyles }}
        />
      </Box>
      <Stack spacing={1} justifyContent="space-between" flex={1}>
        <Typography variant="h5" fontWeight="medium" textAlign="center">
          {name}
        </Typography>
        <Stack spacing={1} direction="row" justifyContent="center">
          <IconButton
            color="primary"
            target="_blank"
            href={facebookLink}
            component="a"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            target="_blank"
            href={linkedinLink}
            component="a"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default ProjectMember;
