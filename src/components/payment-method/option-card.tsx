import { FC } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { OptionContent, CheckOption, Flag } from "../../components";
import { OptionContentI } from "../../interfaces";
import { SELECTED_OPTION as styles } from "../../styles";
import { fontWeight } from "../../themes";

export const OptionCard: FC<OptionContentI> = ({
  amount,
  cashback,
  flag,
  installment,
  selectedOption,
  total
}) => {
  const isSelected = selectedOption === installment;
  return (
    <Button variant="outlined" sx={isSelected ? styles : {}}>
      <Stack width="100%" py={2} px={1} spacing={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <OptionContent {...{ amount, cashback, installment, total }} />
          <CheckOption isSelected={isSelected} />
        </Stack>
        {flag && <Flag>{flag}</Flag>}
      </Stack>
    </Button>
  );
};
