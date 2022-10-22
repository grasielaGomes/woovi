import { FC } from "react";
import { Stack, Button, Chip, Box } from "@mui/material";
import { OptionContent, CheckOption } from "..";
import { OptionContentI } from "../../interfaces";
import { SELECTED_OPTION as styles } from "../../styles";

export const OptionCard: FC<OptionContentI> = ({
  amount,
  cashback,
  discount,
  installment,
  selectedOption,
  total
}) => {
  const isSelected = selectedOption === installment;
  return (
    <Button variant="outlined" sx={isSelected ? styles : {}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="start"
        width="100%"
        py={2}
        px={1}
      >
        <OptionContent {...{ amount, cashback, installment, total }} />
        <CheckOption isSelected={isSelected} />
      </Stack>
    </Button>
  );
};
