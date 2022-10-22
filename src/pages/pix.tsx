import { Divider, Stack } from "@mui/material";
import { pixCode } from "../assets";
import {
  BaseTemplate,
  PageHeader,
  PixQRCode,
  DueDate,
  Installments,
  Total,
  HowItWorks,
  Identifier,
  PageFooter
} from "../components";

export const Pix = () => {
  return (
    <BaseTemplate>
      <PageHeader title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      <PixQRCode code={pixCode} />
      <DueDate date="15/12/2021 - 08:17" />
      <Stack spacing={2}>
        <Installments />
        <Divider />
        <Total />
        <HowItWorks />
      </Stack>
      <Identifier />
      <PageFooter />
    </BaseTemplate>
  );
};
