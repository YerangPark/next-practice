// src/components/organisms/Navbar.tsx

'use client'

import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

const PortfolioNavBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box bg="white" px={4}>
      <Flex alignItems="center" py={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Spacer />
      </Flex>
    </Box>
  )
}

export default PortfolioNavBar
