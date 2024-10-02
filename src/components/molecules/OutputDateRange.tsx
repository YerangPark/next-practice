import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

interface DateRangeInputProps {
  formLabel: string
  startDate: string
  endDate: string
}

const OutputDateRange: React.FC<DateRangeInputProps> = ({ formLabel, startDate, endDate }) => {
  return (
    <Box mb={4}>
      <Flex align="center">
        <Text mb="0" width="150px" fontWeight="bold" align="left">
          {formLabel}
        </Text>
        <Text>{startDate}</Text>
        <Text>~</Text>
        <Text>{endDate}</Text>
      </Flex>
    </Box>
  )
}

export default OutputDateRange
