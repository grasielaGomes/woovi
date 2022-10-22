import { FC, HTMLAttributes } from "react";
import { Container, Stack } from "@mui/material";

type BaseTemplateProps = HTMLAttributes<HTMLDivElement>;

export const BaseTemplate: FC<BaseTemplateProps> = (props) => {
  return (
    <Container maxWidth="xs" sx={{ py: 3, px: 1 }} {...props}>
      <Stack spacing={4}>{props.children}</Stack>
    </Container>
  );
};
