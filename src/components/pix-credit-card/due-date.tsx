import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { pixCreditCardStore } from "../../stores";

export const DueDate: FC = () => {
  const { dueDate } = pixCreditCardStore.getState();
  return (
    <Stack alignItems="center">
      <Typography variant="body2" color="neutral.main">
        Prazo de pagamento:
      </Typography>
      <Typography variant="body1">{dueDate}</Typography>
    </Stack>
  );
};
