import { FC } from "react";
import { ButtonGroup, Chip } from "@mui/material";
import { PixI } from "../../interfaces";
import { OptionCard } from "..";

interface OptionsI {
  methodLabel: string;
  options: PixI[];
  selectedOption: number;
}

export const Options: FC<OptionsI> = ({
  options,
  selectedOption,
  methodLabel
}) => {
  return (
    <ButtonGroup orientation="vertical" sx={{ position: "relative" }}>
      <Chip
        label={methodLabel}
        sx={{ position: "absolute", top: -16, left: 20, zIndex: 10 }}
      />
      {options.map((option) => {
        return (
          <OptionCard
            key={option.installment}
            selectedOption={selectedOption}
            {...option}
          />
        );
      })}
    </ButtonGroup>
  );
};
