import { FC } from "react";
import { CheckIcon, RadioIcon } from "../icons";

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
        <CheckIcon sx={{ fontSize }} />
      ) : (
        <RadioIcon sx={{ fontSize }} />
      )}
    </>
  );
};
