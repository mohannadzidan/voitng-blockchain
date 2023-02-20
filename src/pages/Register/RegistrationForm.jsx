import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import RegistrationFigure from "./figures/RegistrationFigure";

function RegistrationForm() {
  const { next } = useMultiStepForm();
  const { t } = useTranslation(["translation", "common"]);
  return (
    <HussainedForm
      title={t("register.info.title")}
      figure={RegistrationFigure}
      actions={
        <HussainedFormActions>
          <Button variant="contained" onClick={next}>
            {t("next", { ns: "common" })}
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={2}>
        <div>
          <Typography fontWeight="light">
            {t("full_name", { ns: "common" })}
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <Typography fontWeight="light">
            {t("national_id", { ns: "common" })}
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="ie; 6100 4080 9126 0909"
          />
        </div>
        <div>
          <Typography fontWeight="light">
            {t("phone_number", { ns: "common" })}
          </Typography>
          <TextField fullWidth size="small" placeholder="+20 xxx xxxx xxxx" />
        </div>
      </Stack>
    </HussainedForm>
  );
}

export default RegistrationForm;
