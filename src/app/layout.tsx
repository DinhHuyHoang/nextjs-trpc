import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import './globals.css'

import { Box, Flex } from '@mantine/core'
import { AppProvider } from './AppProvider'
import { NavigationBottom } from '@/components/NavigationBottom'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body>
        <AppProvider>
          <Flex direction='column' pos='relative' h='100%'>
            <Box mb={48} style={{ flex: 1, height: 'calc(100% - 48px)' }}>
              {children}
            </Box>

            <NavigationBottom />
          </Flex>
        </AppProvider>
      </body>
    </html>
  )
}
