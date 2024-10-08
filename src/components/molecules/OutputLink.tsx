import { Flex, Box, Text, Link } from '@chakra-ui/react'
import React from 'react'

interface OutputLinkProps {
  link: string
  formLabel: string
}

const OutputLink: React.FC<OutputLinkProps> = ({ link, formLabel }) => {
  return (
    <Box mb={4}>
      <Flex align="center">
        <Text mb="0" width="150px" fontWeight="bold" align="left">
          {formLabel}
        </Text>
        <Link href={link} isExternal>
          <Text fontWeight="bold" color="blue.500">
            바로가기
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}

export default OutputLink
