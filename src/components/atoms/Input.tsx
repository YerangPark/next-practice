import React from 'react'
import { Input as ChakraInput } from '@chakra-ui/react'
import { InputProps } from '@/types/style'

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <ChakraInput {...props} />
}

export default Input
