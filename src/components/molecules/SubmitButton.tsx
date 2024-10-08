import React from 'react'
import Button from '@/components/atoms/Button'

interface SubmitButtonProps {
  onSubmit: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <Button onClick={onSubmit} bg="brand.primary1" color="white" _hover={{ bg: 'brand.primary2' }} isDisabled={false}>
      submit
    </Button>
  )
}

export default SubmitButton
