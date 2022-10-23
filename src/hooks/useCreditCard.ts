import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { crediCardStore } from "../stores";
import { maskCPF, maskCreditCardNumber } from "../utils";
import { maskExpiration } from "../utils/masks";

export const useCreditCard = () => {
  let navigate = useNavigate();
  const { fields } = crediCardStore.getState();

  const [maskedCpf, setMaskedCpf] = useState("");
  const [maskedCardNumber, setMaskedCardNumber] = useState("");
  const [maskedExpiration, setMaskedExpiration] = useState("");
  const [isValidated, setIsValidate] = useState(false);

  type KeyTypes = "fullName" | "cpf" | "cardNumber" | "cvv" | "expiration";
  type EventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleInputChange = (event: EventType, key: KeyTypes) => {
    setIsValidate(false);
    fields[key] = event.target.value;
  };

  const handleCpfChange = (event: EventType) => {
    setIsValidate(false);
    const input = event.target.value;
    const maskedInput = maskCPF(input);
    setMaskedCpf(maskedInput);
    fields.cpf = input;
  };

  const handleCardNumberChange = (event: EventType) => {
    setIsValidate(false);
    const input = event.target.value;
    const maskedInput = maskCreditCardNumber(input);
    setMaskedCardNumber(maskedInput);
    fields.cardNumber = input;
  };

  const handleExpirationChange = (event: EventType) => {
    setIsValidate(false);
    const input = event.target.value;
    const maskedInput = maskExpiration(input);
    setMaskedExpiration(maskedInput);
    fields.expiration = input;
  };

  const hasEmptyField = (inputs: string[]): boolean => {
    return inputs.includes("");
  };

  const onSubmit = () => {
    setIsValidate(true);
    const allInputs = [...Object.values(fields)];
    if (!hasEmptyField(allInputs)) {
      navigate("/");
    }
  };

  return {
    maskedCardNumber,
    maskedCpf,
    maskedExpiration,
    handleCardNumberChange,
    handleCpfChange,
    handleExpirationChange,
    handleInputChange,
    isValidated,
    onSubmit
  };
};
