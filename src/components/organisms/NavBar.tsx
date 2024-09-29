// src/components/organisms/Navbar.tsx

'use client'

import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import Logo from '@/components/atoms/Logo'
import DefaultButton from '@/components/molecules/DefaultButton'

const Navbar: React.FC<{ openSignupModal: () => void; openLoginModal: () => void }> = ({
  openSignupModal,
  openLoginModal,
}) => {
  return (
    <Box bg="white" px={4}>
      <Flex alignItems="center" py={4}>
        <Logo />
        <Spacer />
        <DefaultButton label="로그인" onClick={openLoginModal} theme="gray" mr={5} />
        <DefaultButton label="회원가입" onClick={openSignupModal} />
      </Flex>
    </Box>
  )
}

export default Navbar
