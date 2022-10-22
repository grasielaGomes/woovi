import { createTheme } from "@mui/material";
import { palette } from "./tokens";
import { MuiButton, typography, MuiChip } from "./variants";

export const lightTheme = createTheme({
  palette,
  typography,
  components: {
    MuiButton,
    MuiChip,
  }
});
