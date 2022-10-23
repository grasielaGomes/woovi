import { useSyncExternalStore } from "react";

export const createStore = <StoreType>(initialState: StoreType) => {
  let currentState = initialState;
  const listeners = new Set<(state: StoreType) => void>();
  const subscribe = (listener: (state: StoreType) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return {
    getState: () => currentState,
    setState: (newState: StoreType) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe,
    useStore: <SelectorOutput>(
      selector: (state: StoreType) => SelectorOutput
    ): SelectorOutput =>
      useSyncExternalStore(subscribe, () => selector(currentState))
  };
};
