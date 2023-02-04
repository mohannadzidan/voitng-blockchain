import React, { useMemo, useState } from "react";
import { Button, Stack, styled, TextField, Typography } from "@mui/material";
import format from "date-format";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm"
import { elections } from "./mock";
import PersonVotingIllustration from "./figures/PersonVotingIllustration";

function HashCodeForm() {
  const { previous, next, values } = useMultiStepForm();
  const [hashCode, setHashCode] = useState("");
  const election = useMemo(
    () => elections.find((x) => x._id === values.electionId),
    [values.election]
  );
  return (
    <HussainedForm
      title="Hash code"
      figure={PersonVotingIllustration}
      actions={
        <HussainedFormActions>
          <Button onClick={previous}>Back</Button>
          <Button
            variant="contained"
            onClick={() => next({ hashCode })}
            disabled={hashCode.length === 0}
          >
            Next
          </Button>
        </HussainedFormActions>
      }
    >
      <TextField
        multiline
        maxRows={4}
        minRows={4}
        sx={{
          "& textarea": {
            fontFamily: "monospace",
          },
        }}
        onChange={(ev) => setHashCode(ev.target.value)}
        value={hashCode}
        placeholder="Enter your hash code"
        fullWidth
      />
    </HussainedForm>
  );
}

export default HashCodeForm;
