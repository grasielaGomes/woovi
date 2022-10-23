import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { OptionContent, CheckOption, Flag } from "../../components";
import { OptionContentI } from "../../interfaces";
import { SELECTED_OPTION as styles } from "../../styles";
import { paymentOptionsStore } from "../../stores";

export const OptionCard: FC<OptionContentI> = ({
  amount,
  cashback,
  cet,
  flag,
  installment,
  selectedOption,
  total
}) => {
  
  const isSelected = selectedOption === installment;

  let navigate = useNavigate();
  
  const onClick = () => {
    const state = paymentOptionsStore.getState();
    paymentOptionsStore.setState({
      ...state,
      selectedOption: state.options.find(
        (option) => option.installment === installment
      )!
    });
    navigate("/pix")
  };
  
  return (
    <Button variant="outlined" sx={isSelected ? styles : {}} onClick={onClick}>
      <Stack width="100%" py={2} px={1} spacing={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <OptionContent {...{ amount, cashback, cet, installment, total }} />
          <CheckOption isSelected={isSelected} />
        </Stack>
        {flag && <Flag>{flag}</Flag>}
      </Stack>
    </Button>
  );
};
