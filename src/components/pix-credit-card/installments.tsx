import { Box, Stack, Typography } from "@mui/material";
import { paymentOptionsStore, installmentStepStore } from "../../stores";
import { CheckIcon, RadioIcon } from "../icons";

export const Installments = () => {
  const { selectedOption } = paymentOptionsStore.getState();
  const snapshot = installmentStepStore.useStore((state) => state.currentStep);
  const installmments = selectedOption.installment;
  const currentInstallment = snapshot;
  const firstInstallment = "ª entrada no Pix";
  const atCard = "/ª no cartão";
  const moreInstallments = atCard.repeat(installmments - 1).split("/");
  const steps = [firstInstallment, ...moreInstallments.slice(1)];
  return (
    <Stack>
      {steps.map((label, idx) => {
        const lastItem: boolean = idx === steps.length - 1;
        const installment: number = idx + 1;
        return (
          <Stack width="100%" key={installment+label}>
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
              <Typography variant="subtitle1">
                {selectedOption.amount}
              </Typography>
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
