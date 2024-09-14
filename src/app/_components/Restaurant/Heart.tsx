'use client'

import { trpcClient } from '@/app/_trpc/client'
import { RestaurantItem } from '@/types/restaurant'
import { ActionIcon, Box, Flex } from '@mantine/core'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { useState } from 'react'

type Props = {
  restaurant: RestaurantItem
}

const Heart = (props: Props) => {
  const { restaurant } = props

  const [isFavorite, setIsFavorite] = useState(restaurant.isFavorite)

  const addFavorite = trpcClient.restaurant.addFavorite.useMutation()

  const toggleFavorite = () => {
    addFavorite.mutate(
      {
        restaurantId: restaurant.id,
        isFavorite: !isFavorite,
      },
      {
        onSuccess: (updatedRestaurant) => {
          setIsFavorite(updatedRestaurant.isFavorite)
        },
      }
    )
  }

  return (
    <Flex align='center' justify='center' h={36} w={36} bg='#ffffff40' style={{ borderRadius: '50%' }}>
      <ActionIcon variant='transparent' onClick={toggleFavorite}>
        {isFavorite ? <IconHeartFilled size={20} color='#FF692E' /> : <IconHeart size={20} color='white' />}
      </ActionIcon>
    </Flex>
  )
}

export { Heart }
