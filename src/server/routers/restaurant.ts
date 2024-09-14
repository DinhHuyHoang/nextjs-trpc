import { publicProcedure, router } from '../trpc'
import prisma from '@/db/prisma'
import { z } from 'zod'

import { Prisma } from '@prisma/client'

type Featured = {
  text: string
  icon: string
}

type Restaurant = Prisma.RestaurantGetPayload<Omit<Prisma.RestaurantDefaultArgs, 'images' | 'featured'>> & {
  images: string[]
  featured: Featured
}

async function getRestaurants(): Promise<Restaurant[]> {
  const restaurants = await prisma.restaurant.findMany()

  return restaurants.map((restaurant) => ({
    ...restaurant,
    featured: typeof restaurant.featured === 'string' ? (JSON.parse(restaurant.featured) as unknown as Featured) : (restaurant.featured as Featured),
    images: typeof restaurant.images === 'string' ? (JSON.parse(restaurant.images) as unknown as string[]) : (restaurant.images as unknown as string[]),
  }))
}

const restaurant = router({
  getRestaurants: publicProcedure.query(async () => {
    return await getRestaurants()
  }),
  addFavorite: publicProcedure
    .input(
      z.object({
        restaurantId: z.string(),
        isFavorite: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      const { restaurantId, isFavorite } = input

      const updatedRestaurant = await prisma.restaurant.update({
        where: { id: restaurantId },
        data: { isFavorite },
      })

      return updatedRestaurant
    }),
})

export { restaurant }
