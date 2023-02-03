import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";

function RegistrationLayout({
  title,
  figure,
  children,
  onNext,
  onBack,
  next = "Next",
  back = "Back",
}) {
  return (
    <Paper
      sx={{
        padding: 4,
        marginX: 16,
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        background: "#fff",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="medium"
        marginBottom={2}
        marginLeft={2}
      >
        {title}
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}>
          <Box marginLeft={2}>{children}</Box>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {React.createElement(figure)}
        </Grid>
        {(onBack || onNext) && (
          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              {onBack && (
                <Button
                  variant="text"
                  onClick={onBack}
                  sx={{ minWidth: 140 }}
                  disableElevation
                >
                  {back}
                </Button>
              )}
              {onNext && (
                <Button
                  variant="contained"
                  onClick={onNext}
                  sx={{ minWidth: 140 }}
                  disableElevation
                >
                  {next}
                </Button>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default RegistrationLayout;
