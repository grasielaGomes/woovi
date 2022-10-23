import { FC } from "react";
import { SvgIcon } from "@mui/material";
import { IconAttributes } from "../../interfaces";

export const RadioIcon: FC<IconAttributes> = (props) => {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12" stroke="#E5E5E5" strokeWidth="2" />
      </svg>
    </SvgIcon>
  );
};
