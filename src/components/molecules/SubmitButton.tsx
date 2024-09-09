import React from 'react'
import Button from '@/components/atoms/Button'

interface SubmitButtonProps {
  onSubmit: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <Button
      label="Submit"
      onClick={onSubmit}
      bg="brand.primary1"
      color="white"
      _hover={{ bg: 'brand.primary2' }}
      disabled={false}
    />
  )
}

export default SubmitButton
