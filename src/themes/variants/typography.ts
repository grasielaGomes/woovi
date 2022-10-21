import {
  fontFamily,
  fontWeight,
  fontSize,
  palette,
  lineHeight
} from "../tokens";

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
  }
}

export const typography = {
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.short,
    color: palette.neutral[500]
  },
  subtitle2: {
    fontFamily,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.short,
    color: palette.neutral[500],
    fontSize: fontSize.lg
  },
  body1: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.short,
    color: palette.neutral[500]
  },
  body2: {
    fontFamily,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.short,
    color: palette.neutral[500],
    fontSize: fontSize.md
  },
  button: {
    fontFamily,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.short,
    color: palette.neutral[500],
    fontSize: fontSize.lg
  },
  caption: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.short,
    color: palette.neutral[500]
  },
  overline: undefined,
  heading1: {
    fontFamily,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.short,
    color: palette.neutral[500]
  },
  heading2: {
    fontFamily,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.short,
    color: palette.neutral[500],
    fontSize: fontSize["2xl"]
  }
};
