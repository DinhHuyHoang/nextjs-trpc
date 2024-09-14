import { createTheme, CSSVariablesResolver, type MantineThemeOverride, VariantColorsResolver, defaultVariantColorsResolver, rem, Container, Text } from '@mantine/core'
import { commonVariantColorResolver } from './common'

// import './fonts/pretendard/index.css'

export const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)

  return {
    ...defaultResolvedColors,
    ...commonVariantColorResolver(input),
  }
}

export const resolver: CSSVariablesResolver = () => ({
  variables: {
    '--mantine-color-background-select': '#f1f3f5',
  },
  light: {},
  dark: {},
})

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(390),
  xs: rem(540),
  sm: rem(720),
  md: rem(1272),
  lg: rem(1440),
  xl: rem(1920),
}

export const theme: MantineThemeOverride = createTheme({
  variantColorResolver,
  // fontFamily: Nippo.style.fontFamily,
  // fontFamily: 'Pretendard',
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid ? '100%' : size === undefined ? CONTAINER_SIZES['md'] : size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size),
        },
      }),
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'var(--mantine-color-white-5)',
        ff: 'inherit',
        fz: 'inherit',
        fw: 'inherit',
        lh: 'inherit',
      },
    }),
  },
})
