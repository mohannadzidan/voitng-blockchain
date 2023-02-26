import React from "react";
import { Stack } from "@mui/material";

export default function HussainedFormActions({ children }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        "& .MuiButton-root": {
          height: "36.5px",
          minWidth: 140,
          boxShadow: "unset!important",
        },
      }}
    >
      {children}
    </Stack>
  );
}
