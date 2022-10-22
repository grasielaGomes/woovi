import { Stack, Typography } from "@mui/material";
import { SecurityIcon } from "../icons";
import { WooviLogo } from "../logos";

export const PageFooter = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="row"
      spacing={1}
      height="3rem"
    >
      <SecurityIcon />
      <Typography variant="caption" color="neutral.main" display="block">
        Pagamento 100% seguro via:
      </Typography>
      <WooviLogo
        sx={{
          width: "58px",
          height: "auto",
          filter: "grayscale()"
        }}
      />
    </Stack>
  );
};
