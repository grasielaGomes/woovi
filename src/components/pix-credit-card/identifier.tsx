import { Stack, Typography } from "@mui/material";
import { pixCreditCardStore } from "../../stores";

export const Identifier = () => {
  const { identifier } = pixCreditCardStore.getState();
  return (
    <Stack alignItems="center">
      <Typography variant="caption" color="neutral.main">
        Identificador:
      </Typography>
      <Typography variant="caption" fontWeight="bold">
        {identifier}
      </Typography>
    </Stack>
  );
};
