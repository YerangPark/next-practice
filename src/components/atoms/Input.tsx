import React from 'react'

interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} />
}

export default Input
