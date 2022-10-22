import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { OptionContent, CheckOption, Flag } from "../../components";
import { OptionContentI } from "../../interfaces";
import { SELECTED_OPTION as styles } from "../../styles";

export const OptionCard: FC<OptionContentI> = ({
  amount,
  cashback,
  flag,
  installment,
  selectedOption,
  total
}) => {
  const isSelected = selectedOption === installment;
  let navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      sx={isSelected ? styles : {}}
      onClick={() => navigate("/pix")}
    >
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
