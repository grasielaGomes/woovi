import { fontFamily, fontWeight, fontSize, lineHeight, palette } from "../tokens";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    overline: false;
    tag: true;
  }
}

export const typography = {
  fontFamily,
  fontWeight: fontWeight.regular,
  lineHeight: lineHeight.short,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: palette.neutral.dark
  },
  subtitle2: {
    fontSize: fontSize.lg,
    color: palette.neutral.dark
  },
  body1: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    color: palette.neutral.dark
  },
  body2: {
    fontSize: fontSize.md,
    color: palette.neutral.dark
  },
  button: {
    fontSize: fontSize.lg
  },
  caption: {
    fontSize: fontSize.sm,
    color: palette.neutral.dark
  },
  tag: {
    fontFamily,
    lineHeight: lineHeight.short,
    fontSize: fontSize.md,
    "@media (max-width:500px)": {
      fontSize: fontSize.xs
    }
  },
  heading1: {
    fontFamily,
    lineHeight: lineHeight.short,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    color: palette.neutral.dark
  },
  heading2: {
    fontFamily,
    lineHeight: lineHeight.short,
    fontSize: fontSize["2xl"],
    color: palette.neutral.dark
  }
};
