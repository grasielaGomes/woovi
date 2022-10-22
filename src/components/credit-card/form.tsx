import { Button, MenuItem, Stack, TextField } from "@mui/material";

export const CreditCardForm = () => {
  return (
    <Stack
      spacing={3}
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiInputBase-root": {
          fontWeight: "regular"
        }
      }}
    >
      <TextField
        id="full-name"
        required
        label="Nome completo"
        variant="outlined"
        fullWidth
      />
      <TextField id="cpf" required label="CPF" variant="outlined" fullWidth />
      <TextField
        id="card-number"
        required
        label="Número do cartão"
        variant="outlined"
        fullWidth
      />
      <Stack direction="row" spacing={3}>
        <TextField
          id="expiration"
          required
          label="Vencimento"
          type="tel"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="cvv"
          required
          label="CVV"
          type="tel"
          variant="outlined"
          fullWidth
        />
      </Stack>
      <TextField
        id="installments"
        select
        label="Parcelas"
        value="1x de R$ 15.300,00"
      >
        {["1x de R$ 15.300,00"].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" fullWidth>Pagar</Button>
    </Stack>
  );
};
