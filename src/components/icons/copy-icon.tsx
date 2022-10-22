import { FC } from "react";
import { SvgIcon } from "@mui/material";
import { IconAttributes } from "../../interfaces";

export const CopyIcon: FC<IconAttributes> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M13.5714 19.25V20.9688C13.5714 21.5383 13.1157 22 12.5536 22H1.01786C0.455703 22 0 21.5383 0 20.9688V5.15625C0 4.5867 0.455703 4.125 1.01786 4.125H4.07143V16.8438C4.07143 18.1706 5.13683 19.25 6.44643 19.25H13.5714ZM13.5714 4.46875V0H6.44643C5.88427 0 5.42857 0.461699 5.42857 1.03125V16.8438C5.42857 17.4133 5.88427 17.875 6.44643 17.875H17.9821C18.5443 17.875 19 17.4133 19 16.8438V5.5H14.5893C14.0295 5.5 13.5714 5.03594 13.5714 4.46875ZM18.7019 3.13547L15.9052 0.302027C15.7144 0.108643 15.4555 1.42998e-06 15.1855 0L14.9286 0V4.125H19V3.86465C19 3.59116 18.8928 3.32887 18.7019 3.13547Z"
      />
    </SvgIcon>
  );
};
