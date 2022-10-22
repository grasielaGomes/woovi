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
      <DueDate date="15/12/2021 - 08:17" />
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
