import { palette, radius, fontSize } from "../tokens";
import { fontWeight } from '../tokens/font-weight';

export const MuiChip = {
  styleOverrides: {
    root: {
      padding: 8,
      borderRadius: radius.full,
      backgroundColor: palette.neutral[100]
    },
    label: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      color: palette.neutral[500]
    }
  }
};
