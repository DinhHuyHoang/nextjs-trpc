import { AppRouter } from '@/server'
import { httpBatchLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'
import superjson from 'superjson'

export const trpcClient = createTRPCReact<AppRouter>()

// export const trpcClient = trpc.createClient({
//   links: [httpBatchLink({ url: '/api/trpc', transformer: superjson })],
// })
