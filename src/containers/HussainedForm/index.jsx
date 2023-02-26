import React from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function HussainedForm({ title, figure, children, actions }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      {title && (
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="medium">
            {title}
          </Typography>
        </Grid>
      )}
      <Grid item xs={!isMobile && figure ? 6 : 12}>
        <Box marginLeft={2}>{children}</Box>
      </Grid>
      {!isMobile && figure && (
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
      {actions && (
        <Grid item xs={12}>
          {actions}
        </Grid>
      )}
    </Grid>
  );
}

export { default as HussainedFormActions } from "./HussainedFormActions";
export default HussainedForm;
