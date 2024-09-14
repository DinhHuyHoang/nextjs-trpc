import { Suspense } from 'react'
import { trpcServerClient } from '../_trpc/serverClient'

import { Loader } from '@mantine/core'
import List from '../_components/Restaurant/List'

export default async function Home() {
  const restaurants = await trpcServerClient.restaurant.getRestaurants()

  return (
    <>
      <Suspense fallback={<Loader />}>
        <List restaurants={restaurants} />
      </Suspense>
    </>
  )
}
