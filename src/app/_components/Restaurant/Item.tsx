'use client'

import { RestaurantItem } from '@/types/restaurant'
import { Heart } from './Heart'
import { Box, Flex, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

import ImageWithFallback from '@/app/_components/ImageWithFallback/ImageWithFallback'
import { IconStar, IconStarFilled } from '@tabler/icons-react'

import classes from './Restaurant.module.css'

type Props = {
  restaurant: RestaurantItem
}

export default function Item(props: Props) {
  const { restaurant } = props

  return (
    <>
      <Flex direction='column'>
        <Box pos='relative' style={{ borderRadius: 12, overflow: 'hidden' }}>
          <Carousel
            classNames={{
              indicators: classes.indicators,
              indicator: classes.indicator,
            }}
            withIndicators
            withControls={false}
            slideSize={'100%'}
          >
            {restaurant.images.map((i, idx) => (
              <>
                <Carousel.Slide key={idx} w='100%'>
                  <ImageWithFallback style={{ objectFit: 'cover', aspectRatio: '358 / 200' }} src={i} fallbackSrc='/image-not-available.png' />
                </Carousel.Slide>
              </>
            ))}
          </Carousel>

          <Box pos='absolute' top={10} right={10}>
            <Heart restaurant={restaurant} />
          </Box>
        </Box>

        <Box mt={20}>
          <Flex gap={4} c='#FF692E'>
            <Text>{restaurant.featured.icon}</Text>
            <Text>{restaurant.featured.text}</Text>
          </Flex>

          <Flex gap={10} justify='space-between'>
            <Text>{restaurant.name}</Text>

            <Flex align='center' gap={4}>
              <IconStarFilled size={14} color='#FF692E' />
              <Text>
                {restaurant.rating} ({restaurant.ratingCount})
              </Text>
            </Flex>
          </Flex>
          <Text>{restaurant.desc}</Text>

          <Flex gap={4}>
            <Text fz={16} fw={900}>
              {restaurant.city}
            </Text>
            <Text>{restaurant.priceRange}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
