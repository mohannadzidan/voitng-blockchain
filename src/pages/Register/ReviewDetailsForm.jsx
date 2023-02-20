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
    <>
      <Typography color="primary" variant="body1" fontWeight="light">
        {title}
      </Typography>
      <Typography variant="body1" fontWeight="medium">
        {children}
      </Typography>
    </>
  );
}

function ReviewDetailsForm() {
  const { next, previous } = useMultiStepForm();
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
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Field title={t("name", { ns: "common" })}>Omar Tarek</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title={t("age", { ns: "common" })}>23</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title={t("phone_number", { ns: "common" })}>
            01xxxxxxxxxx
          </Field>
        </Grid>
        <Grid item xs={12}>
          <Field title={t("national_id", { ns: "common" })}>
            >6100 4080 9126 0909
          </Field>
        </Grid>
        <Grid item xs={12}>
          <Field title={t("address", { ns: "common" })}>
            XYZ, Street No. 92, Qalyubia, Banha, 100021
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field title={t("register.review_details.verified")}>Yes</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title={t("register.review_details.eligble")}>Yes</Field>
        </Grid>
      </Grid>
    </HussainedForm>
  );
}

export default ReviewDetailsForm;
