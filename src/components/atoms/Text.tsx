// src/components/atoms/Text.tsx
import React from 'react'
import { Text as ChakraText } from '@chakra-ui/react'
import { TextProps } from '@/types/style'

export const Heading: React.FC<TextProps> = ({
  content,
  fontSize = '4xl',
  color = 'blue.500',
  fontWeight = 'bold',
  mt,
  mb,
}) => {
  return (
    <ChakraText fontSize={fontSize} color={color} fontWeight={fontWeight} mt={mt} mb={mb}>
      {content}
    </ChakraText>
  )
}

export const Paragraph: React.FC<TextProps> = ({
  content,
  fontSize = 'md',
  color = 'gray.600',
  fontWeight = 'normal',
  mt,
  mb,
}) => {
  return (
    <ChakraText fontSize={fontSize} color={color} fontWeight={fontWeight} mt={mt} mb={mb}>
      {content}
    </ChakraText>
  )
}
