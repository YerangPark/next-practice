import React from 'react'
import Button from '@/components/atoms/Button'

interface SubmitButtonProps {
  onSubmit: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return <Button label="Submit" onClick={onSubmit} />
}

export default SubmitButton
