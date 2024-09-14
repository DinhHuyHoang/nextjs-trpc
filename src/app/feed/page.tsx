import { Suspense } from 'react'

import { Loader, Text } from '@mantine/core'

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Text fz={56} fw={900}>
          피드
        </Text>
      </Suspense>
    </>
  )
}
