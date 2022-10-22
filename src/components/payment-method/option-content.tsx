import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { PixI } from "../../interfaces";
import { fontWeight } from "../../themes";

export const OptionContent: FC<PixI> = ({
  amount,
  cashback,
  installment,
  total
}) => {
  return (
    <Stack>
      <Typography
        variant="heading1"
        display="inline"
        textAlign="left"
        color="neutral.dark"
      >
        {`${installment}x `}
        <span style={{ fontWeight: fontWeight.regular }}>{amount}</span>
      </Typography>
      {total && (
        <Typography
          textAlign="left"
          variant="body2"
          color="neutral.main"
        >{`Total: ${total}`}</Typography>
      )}
      {cashback && (
        <Typography variant="body2" color="primary" display="inline">
          Ganhe
          <span
            style={{ fontWeight: fontWeight.bold }}
          >{` ${cashback}% `}</span>
          de Cashback
        </Typography>
      )}
    </Stack>
  );
};
