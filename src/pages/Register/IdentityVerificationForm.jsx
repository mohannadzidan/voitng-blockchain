import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import CloseIcon from "@mui/icons-material/Close";

function IdentityVerificationForm() {
  const { next, previous } = useMultiStepForm();
  const { t } = useTranslation();
  const camRef = useRef();
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (ev) => {
    if (!image) return;
    setLoading(true);
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
      .then(() => {
        next({ image });
      })
      .catch((e) => {
        setError(true);
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <HussainedForm
      title={t("register.identity_verification.title")}
      figure={VerificationFigure}
      actions={
        <HussainedFormActions>
          <Button onClick={previous}> {t("back", { ns: "common" })}</Button>
          <Button
            variant="contained"
            type="submit"
            disabled={!image || isLoading}
          >
            {isLoading ? (
              <CircularProgress size={16} />
            ) : (
              t("next", { ns: "common" })
            )}
          </Button>
        </HussainedFormActions>
      }
      component="form"
      onSubmit={onSubmit}
    >
      {image ? (
        <img
          src={image}
          style={{
            borderRadius: "8px",
            background: "#D9D9D9",
            overflow: "hidden",
            width: "100%",
            height: "240px",
            objectFit: "cover",
          }}
        />
      ) : (
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
      )}
      <Stack alignItems="center">
        <IconButton
          color="primary"
          sx={{
            fontSize: 40,
          }}
          onClick={() => {
            if (image) setImage(null);
            else if (camRef.current) setImage(camRef.current.getScreenshot());
          }}
        >
          {image ? (
            <CloseIcon fontSize="inherit" />
          ) : (
            <CameraAltIcon fontSize="inherit" />
          )}
        </IconButton>
      </Stack>
      <Dialog open={error}>
        <DialogTitle>
          {t("identity.title", {
            ns: "error",
          })}
        </DialogTitle>
        <DialogContent>
          <ul>
            {t("identity.steps", {
              ns: "error",
              returnObjects: true,
            }).map((s) => (
              <Typography component='li' key={s}>{s}</Typography>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            disableElevation
            onClick={() => setError(false)}
          >
            {t("try_again", {
              ns: "common",
            })}
          </Button>
        </DialogActions>
      </Dialog>
    </HussainedForm>
  );
}

export default IdentityVerificationForm;
