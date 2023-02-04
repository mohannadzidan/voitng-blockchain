import React from "react";
import {
  alpha,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import format from "date-format";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm from "../../containers/HussainedForm";
import { elections } from "./mock";

const ElectionButton = styled(Button)`
  background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.06)};
  color: ${({ theme }) => theme.palette.secondary.main};
  justify-content: space-between;
  padding: 8px 16px;
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.palette.secondary.main, 0.1)};
  }
`;

function ElectionsPanel() {
  const { next } = useMultiStepForm();
  return (
    <HussainedForm>
      <Typography
        variant="h5"
        fontWeight="medium"
        marginTop={1}
        marginBottom={2}
      >
        In going elections
      </Typography>
      <Stack spacing={1}>
        {elections.map((x) => (
          <ElectionButton
            key={x._id}
            endIcon={format("dd-MM-yyyy", x.date)}
            onClick={() => next({ electionId: x._id })}
          >
            {x.name}
          </ElectionButton>
        ))}
      </Stack>
    </HussainedForm>
  );
}

export default ElectionsPanel;
