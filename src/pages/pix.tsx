import { Box } from "@mui/material";
import { pixCode } from "../assets";
import { PageHeader, PixQRCode, Summary } from "../components";

export const Pix = () => {
  return (
    <>
      <PageHeader title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      <PixQRCode code={pixCode} />
      <Summary />
    </>
  );
};
