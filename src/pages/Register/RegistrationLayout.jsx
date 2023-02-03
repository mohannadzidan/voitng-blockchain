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
    <Grid container rowSpacing={4} columnSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" fontWeight="medium">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={figure ? 6 : 12}>
        <Box marginLeft={2}>{children}</Box>
      </Grid>
      {figure && (
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {React.createElement(figure)}
        </Grid>
      )}
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
  );
}

export default RegistrationLayout;
