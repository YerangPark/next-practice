// src/components/atoms/NavLink.tsx
import React from 'react'
import { Link } from '@chakra-ui/react'

interface NavLinkProps {
  label: string
  href: string
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <Link href={href} px={3} py={1} rounded="md" _hover={{ bg: 'gray.200' }}>
      {label}
    </Link>
  )
}

export default NavLink
