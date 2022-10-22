import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CardMedia, useTheme, Button, Stack } from "@mui/material";
import { ImageAttributes } from "../../interfaces";
import { CopyIcon } from "../../components";

interface PixQRCodeI extends ImageAttributes {
  code: string;
}

export const PixQRCode: FC<PixQRCodeI> = ({ code }, props) => {
  let navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack spacing={4} alignItems="center" px={2}>
      <CardMedia
        sx={{
          maxWidth: "350px",
          maxHeight: "auto",
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: 2,
          padding: 1
        }}
        component="img"
        image={code}
        alt="QR code do pix"
        {...props}
      />
      <Button
        variant="contained"
        endIcon={<CopyIcon />}
        sx={{ paddingX: 3 }}
        onClick={() => navigate("/credit-card")}
      >
        Clique para copiar QR CODE
      </Button>
    </Stack>
  );
};
