import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface DueDateI {
  date: string
}

export const DueDate: FC<DueDateI> = ({date}) => {
  return (
    <Stack alignItems="center">
      <Typography variant="body2" color="neutral.main">
        Prazo de pagamento:
      </Typography>
      <Typography variant="body1">{date}</Typography>
    </Stack>
  );
};
