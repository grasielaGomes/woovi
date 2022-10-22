import { ButtonClasses, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { radius, palette } from "../tokens";

type StyleOverridesType =
  | Partial<
      OverridesStyleRules<
        keyof ButtonClasses,
        "MuiButton",
        Omit<Theme, "components">
      >
    >
  | undefined;

export const MuiButton = {
  defaultProps: {
    disableElevation: true
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === "outlined" && {
        width: "100%",
        borderWidth: "2px",
        textTransform: "none",
        borderRadius: radius.md,
        borderColor: palette.neutral.light,
        ":hover": {
          borderWidth: "2px"
        }
      })
    })
  } as StyleOverridesType
};
