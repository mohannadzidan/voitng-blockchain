import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useMultiStepForm } from "../../components/MultiStepForm";
import RegistrationFigure from "./figures/RegistrationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";

function FinishRegistrationForm() {
  const navigate = useNavigate();
  const { t } = useTranslation(["translation", "common"]);
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
          ff4d86bc0e00cd4b7ff4d86bc0e00cd4b7b90660cd4b7ff4d86bbc0e0e00cd4b7b90660cd4b7ff4d86bbc0e00cd4b7b9066ffa083ee9dfb18b6bc0e0ffa083ee9dfb18b620b90ff4d86bc0e00cd4b7b9066ffa083ee9dfb18b62066ffa083ee9dfb18b620
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
