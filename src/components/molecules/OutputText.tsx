import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

interface OutputTextProps {
  text: string
  formLabel: string
}

const OutputText: React.FC<OutputTextProps> = ({ text, formLabel }) => {
  return (
    <Box mb={4}>
      <Flex align="center">
        <Text mb="0" width="150px" fontWeight="bold" align="left">
          {formLabel}
        </Text>
        <Text>{text}</Text>
      </Flex>
    </Box>
  )
}

export default OutputText
