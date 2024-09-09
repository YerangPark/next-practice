// src/components/atoms/Image.tsx
import React from 'react'
import { Image as ChakraImage } from '@chakra-ui/react'
import { ImageProps } from '@/types/style'

const Image: React.FC<ImageProps> = ({ src, alt, width = '100%', height = 'auto', ...props }) => {
  return (
    <ChakraImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}

export default Image