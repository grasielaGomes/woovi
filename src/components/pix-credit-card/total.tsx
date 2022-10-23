import { Stack, Typography } from "@mui/material";
import { paymentOptionsStore } from "../../stores";

export const Total = () => {
  const { selectedOption } = paymentOptionsStore.getState();
  const cet = selectedOption.cet.toLocaleString();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
    >
      <Typography variant="caption" color="neutral.main">
        {`CET: ${cet}%`}
      </Typography>
      <Typography variant="subtitle2">{`Total: ${selectedOption.total}`}</Typography>
    </Stack>
  );
};
