import { TextFields } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { createContext } from "react";
import RegistrationCamera from "./RegistrationCamera";

export const RegistrationContext = createContext({
  hasCameraPermission: false,
  subscribeCameraShots: (listener) => () => {},
  setCameraPermission: () => {},
});

function RegistrationForm() {
  return (
    <RegistrationContext.Provider value={{}}>
      <Stack spacing={1}>
        <RegistrationCamera />
        <TextField fullWidth placeholder="Enter your national ID" />
        <Button variant="contained" fullWidth>
          Register
        </Button>
      </Stack>
    </RegistrationContext.Provider>
  );
}

export default RegistrationForm;
