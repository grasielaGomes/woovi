import { Stack, Typography } from "@mui/material";

export const Total = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
    >
      <Typography variant="caption" color="neutral.main">
        CET: 0,5%
      </Typography>
      <Typography variant="subtitle2">Total: R$ 30.600,00</Typography>
    </Stack>
  );
};
