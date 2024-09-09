// src/components/organisms/Navbar.tsx
'use client'

import React from 'react'
import { Box, Flex, Spacer, Button } from '@chakra-ui/react'
import Logo from '@/components/atoms/Logo'
import NavMenu from '@/components/molecules/NavMenu'
import DefaultButton from '@/components/molecules/DefaultButton'

const Navbar: React.FC = () => {
  return (
    <Box bg="white" px={4}>
      <Flex alignItems="center" py={4}>
        <Logo />
        <Spacer />
        <DefaultButton
          label="로그인"
          onClick={() => console.log('로그인 클릭')}
          theme="gray"
          mr={5}
        />
        <DefaultButton
          label="회원가입"
          onClick={() => console.log('회원가입 클릭')}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;