import { fontFamily, fontWeight, fontSize, lineHeight } from "../tokens";

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
    fontWeight: fontWeight.bold
  },
  subtitle2: {
    fontSize: fontSize.lg
  },
  body1: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold
  },
  body2: {
    fontSize: fontSize.md
  },
  button: {
    fontSize: fontSize.lg
  },
  caption: {
    fontSize: fontSize.sm,
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
    fontWeight: fontWeight.bold
  },
  heading2: {
    fontFamily,
    lineHeight: lineHeight.short,
    fontSize: fontSize["2xl"]
  }
};
