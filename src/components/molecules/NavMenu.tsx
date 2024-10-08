// src/components/molecules/NavMenu.tsx
import React from 'react'
import { HStack } from '@chakra-ui/react'
import NavLink from '@/components/atoms/NavLink'

const NavMenu: React.FC = () => {
  return (
    <HStack spacing={4}>
      <NavLink label="로그인" href="/login" />
      <NavLink label="회원가입" href="/signup" />
    </HStack>
  )
}

export default NavMenu
