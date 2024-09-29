import React from 'react'
import Button from '@/components/atoms/Button'

interface DefaultButtonProps {
  label: string
  onClick: () => void
  theme?: string
  mr?: number | string
  width?: number | string
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick, theme, mr, width }) => {
  let themeOption = {
    color: 'white',
    bg: 'brand.primary1',
    _hover: { bg: 'brand.primary2' },
  }
  if (theme === 'gray') {
    themeOption = {
      color: 'brand.text3',
      bg: 'brand.background3',
      _hover: { bg: 'brand.background2' },
    }
  }
  return (
    <div>
      <Button
        onClick={onClick}
        bg={themeOption.bg}
        color={themeOption.color}
        // eslint-disable-next-line no-underscore-dangle
        _hover={themeOption._hover}
        isDisabled={false}
        mr={mr}
        width={width}
      >
        {label}
      </Button>
    </div>
  )
}

export default DefaultButton
