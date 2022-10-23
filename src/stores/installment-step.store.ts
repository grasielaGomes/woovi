import { createStore } from ".";

export const installmentStepStore = createStore({
  currentStep: 0
});

export type ValuesInstallmentStepStore = ReturnType<
  typeof installmentStepStore.getState
>;