import { Box, Stack, Typography } from "@mui/material";
import { CheckIcon, RadioIcon } from "../icons";

export const Installments = () => {
  const installmments = 3;
  const currentInstallment = 1;
  const firstInstallment = "ª entrada no Pix";
  const atCard = "/ª no cartão";
  const moreInstallments = atCard.repeat(installmments).split("/");
  const steps = [firstInstallment, ...moreInstallments.slice(1)];
  return (
    <Stack>
      {steps.map((label, idx) => {
        const lastItem: boolean = idx === steps.length - 1;
        const installment: number = idx + 1;
        return (
          <Stack width="100%">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                {installment <= currentInstallment ? (
                  <CheckIcon fontSize="small" color="primary" />
                ) : (
                  <RadioIcon fontSize="small" color="primary" />
                )}
                <Typography variant="subtitle2">{`${installment}${label}`}</Typography>
              </Stack>
              <Typography variant="subtitle1">R$ 15.300,00</Typography>
            </Stack>
            {!lastItem && (
              <Box
                width="2px"
                bgcolor="neutral.light"
                height="20px"
                ml={1.1}
                my={-0.8}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};
