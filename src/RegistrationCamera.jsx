import { createContext, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  border-radius: 6px;
  background: #000;
  height: 360px;
  overflow: hidden;
  position: relative;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .RegistrationCamera-loader {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default function RegistrationCamera() {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const requestVideoPermission = useCallback(() => {
    setIsLoading(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 600 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
        setHasPermission(true);
      })
      .catch((err) => {
        setHasPermission(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    requestVideoPermission();
  }, []);
  return (
    <Wrapper>
      {isLoading && (
        <Stack className='RegistrationCamera-loader'>
          <CircularProgress color='inherit'/>
        </Stack>
      )}
      <video ref={videoRef} className="CameraPreview-root"></video>
      <Dialog open={!isLoading && !hasPermission}>
        <DialogTitle>Permission error</DialogTitle>
        <DialogContent>
          <Typography>
            It seems like you don't allow this website to access the camera,
            please give this website the camera permission and try again.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button></Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}
