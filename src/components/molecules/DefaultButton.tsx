import React from 'react'
import Button from '@/components/atoms/Button'

interface DefaultButtonProps {
  label: string
  onClick: () => void
  theme? : string
  mr?: number | string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick, theme, mr }) => {
  let themeOption = {
    color: "white",
    bg: "brand.primary1",
    _hover: {bg: 'brand.primary2'}
  }
  if (theme == 'gray') {
    themeOption = {
      color: "brand.text3",
      bg: "brand.background3",
      _hover: {bg: 'brand.background2'}
    }
  }
  return (
    <div>
      <Button
        label={label}
        onClick={onClick}
        bg={themeOption.bg}
        color={themeOption.color}
        _hover={themeOption._hover}
        disabled={false}
        mr={mr}
      />
    </div>
  );
};

export default DefaultButton