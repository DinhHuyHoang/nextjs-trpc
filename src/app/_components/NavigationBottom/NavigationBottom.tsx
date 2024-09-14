'use client'

import React from 'react'
import { ActionIcon, Text, Flex, Drawer } from '@mantine/core'
import { IconBubbleText, IconCalendar, IconHome, IconMenu3, IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useDisclosure } from '@mantine/hooks'

type Props = {}

const NavigationBottom = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const [opened, handlers] = useDisclosure()

  function getColor(path: string) {
    if (path === '/' && pathname === path) {
      return '#FF692E'
    }

    if (path === '/search' && pathname === path) {
      return '#FF692E'
    }

    if (path === '/feed' && pathname === path) {
      return '#FF692E'
    }

    if (path === '/reservation' && pathname === path) {
      return '#FF692E'
    }

    return 'var(--mantine-color-dark-5)'
  }

  return (
    <>
      <Flex bg='#fff' style={{ borderTop: '1px solid #80808057' }} align='center' pos='fixed' bottom={0} justify='space-between' gap={20} h={48} w={'100%'} px={20}>
        <ActionIcon variant='transparent' w={'100%'} onClick={() => router.push('/')}>
          <Flex direction='column' justify='center' align='center' gap={4}>
            <IconHome size={16} color={getColor('/')} />
            <Text fz={10} fw={500} c={getColor('/')}>
              홈
            </Text>
          </Flex>
        </ActionIcon>

        <ActionIcon variant='transparent' w={'100%'} onClick={() => router.push('/search')}>
          <Flex direction='column' justify='center' align='center' gap={4}>
            <IconSearch size={16} color={getColor('/search')} />
            <Text fz={10} fw={500} c={getColor('/search')}>
              검색
            </Text>
          </Flex>
        </ActionIcon>

        <ActionIcon variant='transparent' w={'100%'} onClick={() => router.push('/feed')}>
          <Flex direction='column' justify='center' align='center' gap={4}>
            <IconBubbleText size={16} color={getColor('/feed')} />
            <Text fz={10} fw={500} c='dark.5'>
              피드
            </Text>
          </Flex>
        </ActionIcon>

        <ActionIcon variant='transparent' w={'100%'} onClick={() => router.push('/reservation')}>
          <Flex direction='column' justify='center' align='center' gap={4}>
            <IconCalendar size={16} color={getColor('/reservation')} />
            <Text fz={10} fw={500} c='dark.5'>
              내 예약
            </Text>
          </Flex>
        </ActionIcon>

        <ActionIcon variant='transparent' w={'100%'} onClick={() => handlers.open()}>
          <Flex direction='column' justify='center' align='center' gap={4}>
            <IconMenu3 size={16} color={'var(--mantine-color-dark-5)'} />
            <Text fz={10} fw={500} c='dark.5'>
              메뉴
            </Text>
          </Flex>
        </ActionIcon>
      </Flex>

      <Drawer opened={opened} onClose={handlers.close} title='메뉴'>
        <Text fz={56} fw={500} c='dark.5'>
          메뉴
        </Text>
      </Drawer>
    </>
  )
}

export { NavigationBottom }
