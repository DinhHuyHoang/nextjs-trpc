import { createCaller } from '@/server'
import { httpBatchLink } from '@trpc/client'

export const trpcServerClient = createCaller({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
})
