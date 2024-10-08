'use client'

import React from 'react'
import Image from '@/components/atoms/Image'
import { Box, Text } from '@chakra-ui/react'
import BlurryImage from '../molecules/BlurryImage'

const PortfolioMainImageText: React.FC<{ image: string; text: string }> = ({ image, text }) => {
  return (
    <Box position="relative" textAlign="center" width="100%">
      <BlurryImage src={image || '/images/notebook.jpg'} alt="Banner" overlayOpacity={0.5} height="700px" />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="90%">
        <Text fontSize="7xl" color="brand.text1" fontWeight="bold">
          {text}
        </Text>
      </Box>
      <Box>
        <Image src="/images/scrollIcon.png" height="40px" width="80px" alt="scroll" mt={10} mx="auto" />
      </Box>
    </Box>
  )
}

export default PortfolioMainImageText
