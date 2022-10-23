import { useEffect } from "react";
import { CreditCardForm, PageHeader, Summary } from "../components";
import { paymentOptionsStore, installmentStepStore } from "../stores";

export const CreditCard = () => {
  
  const { selectedOption } = paymentOptionsStore.getState();
  
  useEffect(() => {
    installmentStepStore.setState({
      currentStep: 1
    });
  }, []);
  
  const installments = selectedOption.installment - 1;
  
  return (
    <>
      <PageHeader
        title={`João, pague o restante em ${installments}x no cartão`}
      />
      <CreditCardForm />
      <Summary />
    </>
  );
};
