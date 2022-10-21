import { FC, HTMLAttributes } from "react";
import { Container } from "@mui/material";

type BaseTemplateProps = HTMLAttributes<HTMLDivElement>;

export const BaseTemplate: FC<BaseTemplateProps> = (props) => {
  return (
    <Container maxWidth="xs" sx={{ py: 3, px: 1 }} {...props}>
      {props.children}
    </Container>
  );
};
