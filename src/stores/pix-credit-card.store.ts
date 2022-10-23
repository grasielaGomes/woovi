import { createStore } from ".";
import { formatDate } from '../utils';

const formattedDate = formatDate(new Date())

export const pixCreditCardStore = createStore({
  code: "qr-code.svg",
  dueDate: formattedDate,
  identifier: "2c1b951f356c4680b13ba1c9fc889c47"
});

export type ValuesPixStore = ReturnType<typeof pixCreditCardStore.getState>;