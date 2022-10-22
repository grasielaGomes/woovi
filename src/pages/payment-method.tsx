import {
  BaseTemplate,
  Options,
  PageFooter,
  PageHeader,
} from "../components";
import { PIX_OPTIONS as options } from "../helpers";

export const PaymentMethod = () => {
  return (
    <BaseTemplate>
      <PageHeader title="João, como você quer pagar?" />
      <Options
        options={options.slice(0, 1)}
        selectedOption={2}
        methodLabel="Pix"
      />
      <Options
        options={options.slice(1)}
        selectedOption={2}
        methodLabel="Pix parcelado"
      />
      <PageFooter />
    </BaseTemplate>
  );
};
