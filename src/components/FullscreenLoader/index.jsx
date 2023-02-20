import { Box } from "@mui/material";
import Loader from "../Loader";

function FullscreenLoader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
    </Box>
  );
}

export default FullscreenLoader;
