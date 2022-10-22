import {
  BaseTemplate,
  CreditCardForm,
  PageFooter,
  PageHeader,
  Summary
} from "../components";

export const CreditCard = () => {
  return (
    <BaseTemplate>
      <PageHeader title="João, pague o restante em 1x no cartão" />
      <CreditCardForm />
      <Summary />
      <PageFooter />
    </BaseTemplate>
  );
};
