// src/components/organisms/Navbar.tsx

'use client'

import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'

import Logo from '@/components/atoms/Logo'
import UserButtonWithMenu from '../molecules/UserButtonWithMenu'

const DashboardNavBar: React.FC = () => {
  return (
    <Box bg="white" px={4}>
      <Flex alignItems="center" py={4}>
        <Logo />
        <Spacer />
        <UserButtonWithMenu />
      </Flex>
    </Box>
  )
}

export default DashboardNavBar
