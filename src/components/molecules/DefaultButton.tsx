import React from 'react'
import Button from '@/components/atoms/Button'

interface DefaultButtonProps {
  label: string
  onClick: () => void
  theme? : string
  mr?: number | string;
  width?: number | string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick, theme, mr, width }) => {
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
        children={label}
        onClick={onClick}
        bg={themeOption.bg}
        color={themeOption.color}
        _hover={themeOption._hover}
        disabled={false}
        mr={mr}
        width={width}
      />
    </div>
  );
};

export default DefaultButton