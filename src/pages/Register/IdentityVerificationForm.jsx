import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useMultiStepForm } from "../../components/MultiStepForm";
import VerificationFigure from "./figures/VerificationFigure";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { useTranslation } from "react-i18next";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useFormik } from "formik";
import { Rest } from "../../baseUrl";

function IdentityVerificationForm() {
  const { next, previous } = useMultiStepForm();
  const { t } = useTranslation();
  const camRef = useRef();
  const [image, setImage] = useState(null);
  const onSubmit = async (ev) => {
    if (!image) return;
    ev.preventDefault();
    const res = await fetch(image);
    const blob = await res.blob();
    const fd = new FormData();
    const file = new File([blob], "filename.jpeg");
    fd.append("image", file);
    Rest.post("upload-image/", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .catch(console.error)
      .finally(() => {
        next({ image });
      });
  };

  return (
    <HussainedForm
      title={t("register.identity_verification.title")}
      figure={VerificationFigure}
      actions={
        <HussainedFormActions>
          <Button onClick={previous}> {t("back", { ns: "common" })}</Button>
          <Button variant="contained" type="submit">
            {t("next", { ns: "common" })}
          </Button>
        </HussainedFormActions>
      }
      component="form"
      onSubmit={onSubmit}
    >
      <Webcam
        ref={camRef}
        style={{
          borderRadius: "8px",
          background: "#D9D9D9",
          overflow: "hidden",
          width: "100%",
          height: "240px",
          objectFit: "cover",
        }}
      />
      <Stack alignItems="center">
        <IconButton
          color="primary"
          sx={{
            fontSize: 40,
          }}
          onClick={() => {
            setImage(camRef.current.getScreenshot());
          }}
        >
          <CameraAltIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </HussainedForm>
  );
}

export default IdentityVerificationForm;
