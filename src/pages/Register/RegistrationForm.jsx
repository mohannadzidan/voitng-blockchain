import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import RegistrationFigure from "./figures/RegistrationFigure";
import * as yup from "yup";
import { useFormik } from "formik";
import baseUrl from "../../baseUrl";

function RegistrationForm() {
  const { next } = useMultiStepForm();
  const { t } = useTranslation(["translation", "common", "error"]);
  const validationSchema = useMemo(
    () =>
      yup.object({
        nationalId: yup
          .string(t("invalid_national_id", { ns: "error" }))
          .required(t("invalid_national_id", { ns: "error" }))
          .matches(/\d{14}/, t("invalid_national_id", { ns: "error" })),
        fullName: yup
          .string(t("invalid_full_name", { ns: "error" }))
          .required(t("invalid_full_name", { ns: "error" }))
          .min(8, t("invalid_full_name", { ns: "error" })),
      }),
    [t]
  );
  const formik = useFormik({
    initialValues: {
      nationalId: "",
      fullName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({
          username: values.fullName,
          password: values.nationalId,
        }),
      })
        .then((response) => {
          console.log(response);
          next();
        })
        .catch(() => {
          next();
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  const [isLoading, setLoading] = useState(false);
  return (
    <HussainedForm
      title={t("register.info.title")}
      figure={RegistrationFigure}
      onSubmit={formik.handleSubmit}
      actions={
        <HussainedFormActions>
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={16} />
            ) : (
              t("next", { ns: "common" })
            )}
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
            placeholder={t("register.info.enter_full_name")}
            onChange={formik.handleChange}
            name="fullName"
            value={formik.values.fullName}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </div>
        <div>
          <Typography fontWeight="light">
            {t("national_id", { ns: "common" })}
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder={t("register.info.enter_national_id")}
            onChange={formik.handleChange}
            name="nationalId"
            value={formik.values.nationalId}
            error={
              formik.touched.nationalId && Boolean(formik.errors.nationalId)
            }
            helperText={formik.touched.nationalId && formik.errors.nationalId}
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
