export const maskCPF = (cpf: string): string => {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const maskCreditCardNumber = (value: string): string => {
  return value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

export const maskExpiration = (value: string): string => {
  return value.replace(/\D/g, "").replace(/(\d{2})(\d{2})/, "$1/$2");
};
