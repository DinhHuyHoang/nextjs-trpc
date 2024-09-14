import {
  defaultVariantColorsResolver,
  VariantColorsResolver,
} from '@mantine/core'

export const commonVariantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input)

  if (input.variant === 'normal') {
    return {
      background: 'var(--mantine-color-white-5)',
      hover: '#EBEBEB',
      color: 'var(--mantine-color-dark-5)',
      border: '1px solid var(--mantine-color-dark-5)',
    }
  }

  if (input.variant === 'warning') {
    return {
      background: 'var(--mantine-color-yellow-5)',
      hover: 'var(--mantine-color-yellow-4)',
      color: 'var(--mantine-color-dark-5)',
      border: 'none',
    }
  }

  if (input.variant === 'light') {
    return {
      background: 'transparent',
      hover: 'var(--mantine-color-dark-5)',
      color: '#fff',
      border: '1px solid var(--mantine-color-white-5)',
    }
  }

  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-5)',
      hover: 'var(--mantine-color-red-6)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    }
  }

  return defaultResolvedColors
}
