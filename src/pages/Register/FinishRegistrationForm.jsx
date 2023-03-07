import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useMultiStepForm } from "../../components/MultiStepForm";
import RegistrationFigure from "./figures/RegistrationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";
import { Rest } from "../../baseUrl";

function FinishRegistrationForm() {
  const navigate = useNavigate();
  const { t } = useTranslation(["translation", "common"]);
  const [hash, setHash] = useState(
    "ff4d86bcee9df90660cd4b7ff4d80e00cd400cd4b7b9066ffa0836bbc0e"
  );
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Rest.get("hash/")
      .then(({ code }) => {
        setHash(code);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <HussainedForm
      title={t("register.finish.title")}
      actions={
        <HussainedFormActions>
          <Button variant="contained" onClick={() => navigate("/metamask")}>
            {t("next", { ns: "common" })}
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={2}>
        <Typography variant="body1">
          {t("register.finish.congratulations")}
        </Typography>
        <Typography
          fontFamily="monospace"
          sx={{
            padding: 2,
            background: (theme) => theme.palette.background.paper,
            wordBreak: "break-word",
          }}
          component="div"
        >
          {isLoading ? (
            <Box sx={{ justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            hash
          )}
        </Typography>
        <Typography variant="h4" fontWeight="medium">
          {t("register.finish.important_notes.title")}
        </Typography>
        <Typography variant="body1" fontWeight="medium" component="ul">
          <li>{t("register.finish.important_notes.note_1")}</li>
          <li>{t("register.finish.important_notes.note_2")}</li>
        </Typography>
      </Stack>
    </HussainedForm>
  );
}

export default FinishRegistrationForm;
