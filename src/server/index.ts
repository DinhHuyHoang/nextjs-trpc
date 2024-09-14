import { createCallerFactory, router } from './trpc'
import { restaurant } from './routers/restaurant'

export const appRouter = router({
  restaurant: restaurant,
})

const createCaller = createCallerFactory(appRouter)

export { createCaller }
export type AppRouter = typeof appRouter
