import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BaseTemplate, PageFooter } from "../components";

export const DefaultLayout: FC = () => {
  return (
    <BaseTemplate>
      <Outlet />
      <PageFooter />
    </BaseTemplate>
  );
};
