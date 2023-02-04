import React, { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import format from "date-format";
import { useMultiStepForm } from "../../components/MultiStepForm";
import HussainedForm, {
  HussainedFormActions,
} from "../../containers/HussainedForm";
import { elections } from "./mock";
import PersonVotingIllustration from "./figures/PersonVotingIllustration";
import { useNavigate } from "react-router-dom";

function Candidate({ candidate, onSelected, selected }) {
  return (
    <Stack
      sx={{
        backgroundColor: "#D9D9D9",
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
      onClick={onSelected}
    >
      <Box
        sx={{
          borderRadius: "50%",
          width: 56,
          height: 56,
          background: selected ? "black" : "white",
          border: "3px solid #0A89FF",
        }}
      />
      <Avatar
        src={candidate.photo}
        sx={{
          width: 110,
          height: 110,
        }}
      />
      <Typography variant="h2" fontWeight="medium">
        {candidate.firstName} {candidate.lastName}
      </Typography>
      <Box
        src={candidate.symbol.thumbnail}
        component="img"
        sx={{
          width: 82,
          height: 82,
        }}
      />
      <Typography variant="h2" fontWeight="medium">
        {candidate.symbol.title}
      </Typography>
    </Stack>
  );
}

function VotingForm() {
  const { previous, next, values } = useMultiStepForm();
  const navigate = useNavigate();
  const election = useMemo(
    () => elections.find((x) => x._id === values.electionId),
    [values.election]
  );
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  return (
    <HussainedForm
      actions={
        <HussainedFormActions>
          <Button
            variant="contained"
            onClick={() => navigate("/results/" + election._id)}
            disabled={selectedCandidate === null}
          >
            Next
          </Button>
        </HussainedFormActions>
      }
    >
      <Stack spacing={10.28}>
        {election.candidates.map((x) => (
          <Candidate
            key={x._id}
            candidate={x}
            onSelected={() => setSelectedCandidate(x._id)}
            selected={selectedCandidate === x._id}
          />
        ))}
      </Stack>
    </HussainedForm>
  );
}

export default VotingForm;
