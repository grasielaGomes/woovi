interface FormatCurrencyI {
  country?: string;
  currrency?: string;
  value: string | number;
}

export const formatCurrency = ({
  country = "pt-BR",
  currrency = "BRL",
  value
}: FormatCurrencyI) => {
  if (!value) {
    return Number(0).toLocaleString(country, {
      style: "currency",
      currency: currrency
    });
  }
  const formatter = Number(value).toLocaleString(country, {
    style: "currency",
    currency: currrency
  });
  return formatter;
};

export const formatDate = (date: Date): string => {
  const timeFormat = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
  }).format(date);

  const dateFormat = new Date(date).toLocaleDateString("pt-BR");

  return dateFormat + " - " + timeFormat;
};
