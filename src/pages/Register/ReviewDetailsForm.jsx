import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useMultiStepForm } from "../../components/MultiStepForm";
import DetailsFigure from "./figures/DetailsFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";

function Field({ title, children }) {
  return (
    <div>
      <Typography color="primary" variant="body1" fontWeight="light">
        {title}
      </Typography>
      <Typography variant="body1" fontWeight="medium">
        {children}
      </Typography>
    </div>
  );
}

function ReviewDetailsForm() {
  const { next, previous, values } = useMultiStepForm();
  const { t } = useTranslation(["translation", "common"]);
  return (
    <HussainedForm
      title={t("register.review_details.title")}
      figure={DetailsFigure}
      actions={
        <HussainedFormActions>
          <Button onClick={previous}> {t("back", { ns: "common" })}</Button>
          <Button variant="contained" onClick={next}>
            {t("next", { ns: "common" })}
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={2}>
        <Field title={t("name", { ns: "common" })}>{values.fullName}</Field>
        <Field title={t("phone_number", { ns: "common" })}>
          {values.phone}
        </Field>
        <Field title={t("national_id", { ns: "common" })}>
          {values.nationalId}
        </Field>
        <Field title={t("register.review_details.eligble")}>
          {t("yes", { ns: "common" })}
        </Field>
      </Stack>
    </HussainedForm>
  );
}

export default ReviewDetailsForm;
