import { FC } from "react";
import { Container, Stack } from "@mui/material";
import { DivAttributes } from "../../interfaces";

export const BaseTemplate: FC<DivAttributes> = (props) => {
  return (
    <Container maxWidth="sm" sx={{ py: 3, px: 1 }} {...props}>
      <Stack spacing={4}>
        {props.children}
      </Stack>
    </Container>
  );
};
