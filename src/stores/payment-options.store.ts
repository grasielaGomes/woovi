import { createStore } from ".";
import { PIX_OPTIONS as paymentOptions } from "../helpers";
import { PixOptionsType } from "../interfaces";
import { formatCurrency } from "../utils";

const mapOptions = (options: PixOptionsType) => {
  return options.map((option) => ({
    ...option,
    amount: formatCurrency({ value: option.amount }),
    total: formatCurrency({ value: option.total || 0 })
  }));
};

const formattedOptions = mapOptions(paymentOptions);

export const paymentOptionsStore = createStore({
  options: formattedOptions,
  selectedOption: formattedOptions[1]
});

export type ValuesPaymentOptionsStore = ReturnType<
  typeof paymentOptionsStore.getState
>;
