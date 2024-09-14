'use client'

import { RestaurantItem } from '@/types/restaurant'

import { Text, Container, Flex, ScrollArea, Tabs, TextInput } from '@mantine/core'
import Item from './Item'

import { IconSearch } from '@tabler/icons-react'
import { textByStoreCategory } from '@/constant/category'
import { useEffect, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import { usePathname } from 'next/navigation'

type Props = {
  restaurants: Array<RestaurantItem>
}

const categoryKeys = Object.keys(textByStoreCategory)

type Keys = keyof typeof textByStoreCategory

export default function List(props: Props) {
  const { restaurants } = props

  const pathname = usePathname()

  const [activeTab, setActiveTab] = useState<string | null>(categoryKeys[0])
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchText, setDebouncedSearchText] = useState('')

  function changeActiveTab(tab: string | null) {
    setActiveTab(tab)
  }

  const debouncedSetSearchText = useMemo(() => debounce((text) => setDebouncedSearchText(text), 300), [])

  useEffect(() => {
    debouncedSetSearchText(searchText)
  }, [searchText, debouncedSetSearchText])

  const restaurantFilterOut = restaurants.filter((item) => {
    const matchesCategory = item.category === activeTab
    const matchesSearch = debouncedSearchText === '' || item.name.toLowerCase().includes(debouncedSearchText.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const canSearch = pathname.includes('search')

  return (
    <>
      <Container my={20}>
        {canSearch && (
          <>
            <Flex mb={20} w='100%'>
              <TextInput onChange={(e) => setSearchText(e.target.value)} w='100%' placeholder='맛집 이름을 검색해보세요' leftSection={<IconSearch />} />
            </Flex>
          </>
        )}

        <ScrollArea mb={20}>
          <Tabs defaultValue={activeTab} onChange={changeActiveTab}>
            <Tabs.List style={{ flexWrap: 'nowrap' }}>
              {categoryKeys.map((key, idx) => (
                <>
                  <Tabs.Tab key={key} value={key}>
                    <Text c='dark.5'>{textByStoreCategory[key as Keys]}</Text>
                  </Tabs.Tab>
                </>
              ))}
            </Tabs.List>
          </Tabs>
        </ScrollArea>

        <Flex direction='column' gap={20}>
          {restaurantFilterOut.length === 0 && (
            <>
              <Text ta='center'>Not Found</Text>
            </>
          )}
          {restaurantFilterOut?.map((i, idx) => <Item key={i.id} restaurant={i} />)}
        </Flex>
      </Container>
    </>
  )
}
