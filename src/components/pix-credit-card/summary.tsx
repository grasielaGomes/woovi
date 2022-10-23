import { Stack, Divider } from "@mui/material";
import {
  DueDate,
  HowItWorks,
  Installments,
  Total,
  Identifier
} from "../../components";

export const Summary = () => {
  return (
    <>
      <DueDate />
      <Stack spacing={2}>
        <Installments />
        <Divider />
        <Total />
        <HowItWorks />
      </Stack>
      <Identifier />
    </>
  );
};
