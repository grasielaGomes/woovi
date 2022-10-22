import { Box } from "@mui/material";
import { CreditCardForm, PageHeader, Summary } from "../components";

export const CreditCard = () => {
  return (
    <>
      <PageHeader title="João, pague o restante em 1x no cartão" />
      <CreditCardForm />
      <Summary />
    </>
  );
};
