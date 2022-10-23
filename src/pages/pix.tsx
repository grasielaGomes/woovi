import { pixCode } from "../assets";
import { PageHeader, PixQRCode, Summary } from "../components";
import { paymentOptionsStore } from "../stores";

export const Pix = () => {
  const { selectedOption } = paymentOptionsStore.getState();
  return (
    <>
      <PageHeader
        title={`João, pague a entrada de ${selectedOption.amount} pelo Pix`}
      />
      <PixQRCode code={pixCode} />
      <Summary />
    </>
  );
};
