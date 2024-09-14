import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

type Context = {}

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const router = t.router
export const mergeRouters = t.mergeRouters
export const middleware = t.middleware
export const createCallerFactory = t.createCallerFactory
export const publicProcedure = t.procedure
