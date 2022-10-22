import { CardMedia } from "@mui/material";
import { FC } from "react";
import { logo } from "../../assets";
import { ImageAttributes } from "../../interfaces";

export const WooviLogo: FC<ImageAttributes> = (props) => {
  return <CardMedia {...props} component="img" image={logo} alt="Woovi" />;
};
