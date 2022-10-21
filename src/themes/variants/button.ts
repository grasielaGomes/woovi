import { palette, radius } from '../tokens'

type VariantTypes = 'text' | 'contained' | 'outlined' | undefined
type SizeTypes = 'small' | 'medium' | 'large' | undefined

export const MuiButton = {
  defaultProps: {
    variant: 'contained' as VariantTypes,
    size: 'small' as SizeTypes,
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      width: '100%',
      backgroundColor: palette.secondary.main,
      borderRadius: radius.md,
    },
  },
}
