import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { WooviLogo } from "../../components";

interface PageHeaderI {
  title: string;
}

export const PageHeader: FC<PageHeaderI> = ({ title }) => {
  return (
    <Stack alignItems="center" spacing={4}>
      <WooviLogo />
      <Typography variant="heading1">{title}</Typography>
    </Stack>
  );
};
