import { trpcServerClient } from '@/app/_trpc/serverClient'
// import { z } from 'zod'

// export const restaurantSchema = z.object({
//   id: z.string(),
//   rating: z.number(),
//   ratingCount: z.number(),
//   category: z.string(),
//   city: z.string(),
//   desc: z.string(),
//   name: z.string(),
//   priceRange: z.string(),
//   images: z.array(z.string()),
//   isFavorite: z.boolean(),
//   featured: z.object({
//     text: z.string(),
//     icon: z.string(),
//   }),
// })

// export type Restaurant = z.infer<typeof restaurantSchema>
// export type RestaurantList = Restaurant[]

export type GetRestaurantsReturnType = Awaited<ReturnType<(typeof trpcServerClient)['restaurant']['getRestaurants']>>
export type RestaurantItem = GetRestaurantsReturnType extends Array<infer R> ? R : GetRestaurantsReturnType
