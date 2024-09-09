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
      <label color="brand.text1">
        {label}
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          borderColor="brand.text4"
          focusBorderColor="brand.text4"
          bg="white"
          color="brand.text1"
          borderRadius="xl"
          _focus={{
            boxShadow: '0 0 0 1px brand.text4',
            borderWidth: '1px'
          }}
          _hover={{
            boxShadow: '0 0 0 1px brand.text4',
            borderWidth: '1px'
          }}
        />
      </label>
    </div>
  )
}

export default TextInputWithLabel
