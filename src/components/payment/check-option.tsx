import { FC } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import UncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface CheckOptionI {
  isSelected?: boolean;
  fontSize?: number;
}

export const CheckOption: FC<CheckOptionI> = ({
  isSelected = false,
  fontSize = 30
}) => {
  return (
    <>
      {isSelected ? (
        <CheckCircle color="primary" sx={{ fontSize }} />
      ) : (
        <UncheckedIcon sx={{ fontSize, color: "neutral.100" }} />
      )}
    </>
  );
};
