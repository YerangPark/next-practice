// src/components/atoms/Logo.tsx
import React from 'react'
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const Logo: React.FC = () => {
  const router = useRouter()

  return (
    <Text
      fontSize="2xl"
      fontWeight="bold"
      onClick={() => {
        router.push('/dashboard')
      }}
    >
      Folio
    </Text>
  )
}

export default Logo
