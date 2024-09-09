import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { ButtonProps } from '@/types/style'

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, bg, color, _hover, ...props}) => {
  return (
    <ChakraButton
    onClick={onClick}
    isDisabled={disabled}
    bg={bg}
    color={color}
    _hover={_hover}
    {...props}>
      {label}
    </ChakraButton>
  )
}

export default Button