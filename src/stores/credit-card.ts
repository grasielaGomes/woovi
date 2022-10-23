import { createStore } from ".";

export const crediCardStore = createStore({
  fields: {
    fullName: "",
    cpf: "",
    cardNumber: "",
    expiration: "",
    cvv: ""
  }
});

export type ValuescrediCardStore = ReturnType<typeof crediCardStore.getState>;
