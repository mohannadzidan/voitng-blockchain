import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useMultiStepForm } from "../../components/MultiStepForm";
import DetailsFigure from "./figures/DetailsFigure";
import RegistrationLayout from "./RegistrationLayout";

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
  return (
    <RegistrationLayout
      onNext={next}
      onBack={previous}
      title="Review Details"
      figure={DetailsFigure}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Field title="Name">Omar Tarek</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title="Age">23</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title="Phone number">01xxxxxxxxxx</Field>
        </Grid>
        <Grid item xs={12}>
          <Field title="National ID">6100 4080 9126 0909</Field>
        </Grid>
        <Grid item xs={12}>
          <Field title="Address">XYZ, Street No. 92, Qalyubia, Banha, 100021</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title="Verified">Yes</Field>
        </Grid>
        <Grid item xs={6}>
          <Field title="Eligble">Yes</Field>
        </Grid>
      </Grid>
    </RegistrationLayout>
  );
}

export default ReviewDetailsForm;
