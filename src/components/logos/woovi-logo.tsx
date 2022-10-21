import { CardMedia } from "@mui/material";
import { logo } from "../../assets";

export const WooviLogo = () => {
  return (
    <CardMedia
      component="img"
      sx={{ width: "123px", height: "auto", mx: "auto" }}
      image={logo}
      alt="Woovi"
    />
  );
};
