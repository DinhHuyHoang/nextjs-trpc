'use client'

import React from 'react'

import { MantineProvider } from '@mantine/core'

import { resolver, theme, variantColorResolver } from '@/styles/theme'
import TrpcProvider from './_trpc/provider'

interface Props {
  children: React.ReactNode
}

export function AppProvider({ children }: Props) {
  return (
    <TrpcProvider>
      <MantineProvider theme={{ ...theme, variantColorResolver }} cssVariablesResolver={resolver}>
        {children}
      </MantineProvider>
    </TrpcProvider>
  )
}
