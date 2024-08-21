import React from 'react'
import Input from '@/components/atoms/Input'

interface TextInputWithLabelProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <label>
        {label}
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      </label>
    </div>
  )
}

export default TextInputWithLabel
