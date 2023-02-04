import React, { useMemo, useState } from "react";
import {
  alpha,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import format from "date-format";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm from "../../containers/HussainedForm";
import { elections } from "./mock";

const RulesBox = styled(Typography)`
  border-radius: 8px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

function Rules() {
  const { previous, next, values } = useMultiStepForm();
  const [isRulesAccepted, setIsRulesAccepted] = useState(false);
  const election = useMemo(
    () => elections.find((x) => x._id === values.electionId),
    [values.election]
  );
  return (
    <HussainedForm>
      <Stack spacing={1}>
        <Typography variant="h4" fontWeight="medium">
          This election is being conducted by {election.conductor}
        </Typography>
        <RulesBox variant="outlined" component="div">
          You, as being a member of the constituency under the Banha Election,
          are allowed to vote. Please take the following steps in order to cast
          a valid vote. You are requested to cast vote on your own decision and
          not by being presserurized or terroized by someone. If someone
          threatens you for making a voting decsion please contact the given
          helpline numbers.
          <h4>Steps</h4>
          <ul>
            <li>Have Hash code with you as you would require it to proceed.</li>

            <li>You are allowed to make only one vote per election.</li>
            <li>You are allowed to choose only one candidate per election.</li>
            <li>Candidates information are available on the page.</li>
            <li>
              Make sure that you are selecting your wanted candidate by
              confirming the name and symbol on the screen.
            </li>
            <li>
              After selecting the candidates make sure to submit the vote.
            </li>
            <li>
              Result will be announced after 5 days of election being completed
            </li>
          </ul>
        </RulesBox>
        <FormControlLabel
          control={
            <Checkbox
              value={isRulesAccepted}
              onChange={(ev) => setIsRulesAccepted(ev.target.checked)}
            />
          }
          label="I understand and will follow above steps."
        />
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          variant="text"
          onClick={previous}
          sx={{ minWidth: 140 }}
          disableElevation
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isRulesAccepted}
          onClick={() => next({ isRulesAccepted })}
          sx={{ minWidth: 140 }}
          disableElevation
        >
          Next
        </Button>
      </Stack>
    </HussainedForm>
  );
}

export default Rules;
