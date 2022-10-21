import { createTheme } from '@mui/material/styles';
import { palette } from './tokens';
import { MuiButton, typography } from './variants';

export const lightTheme = createTheme({
  palette,
  typography,
  components: {
    MuiButton
  }
});