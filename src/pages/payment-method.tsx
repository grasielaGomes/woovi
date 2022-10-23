import { Options, PageHeader } from "../components";
import { paymentOptionsStore } from "../stores";

export const PaymentMethod = () => {
  const {options, selectedOption} = paymentOptionsStore.getState();
  return (
    <>
      <PageHeader title="João, como você quer pagar?" />
      <Options
        options={options.slice(0, 1)}
        selectedOption={selectedOption.installment}
        methodLabel="Pix"
      />
      <Options
        options={options.slice(1)}
        selectedOption={selectedOption.installment}
        methodLabel="Pix parcelado"
      />
    </>
  );
};
