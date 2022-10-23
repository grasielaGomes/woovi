import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useCreditCard } from "../../hooks";
import { crediCardStore } from "../../stores";

export const CreditCardForm = () => {
  const { fullName, cvv } = crediCardStore.useStore((state) => state.fields);
  const {
    maskedCardNumber,
    maskedCpf,
    maskedExpiration,
    handleCardNumberChange,
    handleCpfChange,
    handleExpirationChange,
    handleInputChange,
    isValidated,
    onSubmit
  } = useCreditCard();
  return (
    <Stack
      spacing={3}
      component="form"
      noValidate={!isValidated}
      autoComplete="off"
      sx={{
        "& .MuiInputBase-root": {
          fontWeight: "regular"
        }
      }}
    >
      <TextField
        error={isValidated && !fullName}
        fullWidth
        helperText={isValidated && !fullName && "Nome completo é obrigatório"}
        id="full-name"
        label="Nome completo"
        onChange={(event) => handleInputChange(event, "fullName")}
        required
        variant="outlined"
      />
      <TextField
        error={isValidated && !maskedCpf}
        fullWidth
        helperText={isValidated && !maskedCpf && "CPF é obrigatório"}
        id="cpf"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 14 }}
        label="CPF"
        onChange={handleCpfChange}
        required
        type="tel"
        value={maskedCpf}
        variant="outlined"
      />
      <TextField
        error={isValidated && !maskedCardNumber}
        fullWidth
        helperText={isValidated && !maskedCpf && "Número do é obrigatório"}
        id="card-number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 19 }}
        label="Número do cartão"
        onChange={handleCardNumberChange}
        required
        type="tel"
        value={maskedCardNumber}
        variant="outlined"
      />
      <Stack direction="row" spacing={3}>
        <TextField
          error={isValidated && !maskedExpiration}
          fullWidth
          helperText={isValidated && !maskedCpf && "Validade é obrigatório"}
          id="expiration"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 5 }}
          label="Vencimento"
          onChange={handleExpirationChange}
          required
          type="tel"
          value={maskedExpiration}
          variant="outlined"
        />
        <TextField
          error={isValidated && !cvv}
          fullWidth
          helperText={isValidated && !maskedCpf && "CVV é obrigatório"}
          id="cvv"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 3 }}
          label="CVV"
          onChange={(event) => handleInputChange(event, "cvv")}
          required
          type="tel"
          variant="outlined"
        />
      </Stack>
      <TextField
        id="installments"
        label="Parcelas"
        select
        value="1x de R$ 15.300,00"
      >
        {["1x de R$ 15.300,00"].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" fullWidth onClick={onSubmit}>
        Pagar
      </Button>
    </Stack>
  );
};
