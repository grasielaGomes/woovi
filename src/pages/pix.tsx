import { pixCode } from "../assets";
import {
  BaseTemplate,
  PageHeader,
  PixQRCode,
  Summary,
  PageFooter
} from "../components";

export const Pix = () => {
  return (
    <BaseTemplate>
      <PageHeader title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      <PixQRCode code={pixCode} />
      <Summary />
      <PageFooter />
    </BaseTemplate>
  );
};
