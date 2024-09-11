import { ResponsiveValue, SystemStyleObject } from "@chakra-ui/react"
import { ReactNode } from "react"

export interface ButtonProps {
  onClick: () => void
  bg: string
  color: string
  disabled?: boolean
  _hover?: SystemStyleObject
  borderRadius?: string | number
  size?: ResponsiveValue<string>
  fontSize?: ResponsiveValue<string>
  px?: number | string
  py?: number | string
  fontWeight?: string
  mr?: number | string
  width?: string | number
  mt?: number | string;
  children?: ReactNode | string | undefined
}

export interface InputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  borderColor?: string
  focusBorderColor?: string
  bg?: string
  color?: string
  borderRadius?: ResponsiveValue<number | string>
  _focus?: SystemStyleObject
  _hover?: SystemStyleObject
}

export interface TextProps {
  content: string
  fontSize?: string
  color?: string
  fontWeight?: string
  mt?: number | string  // margin-top
  mb?: number | string  // margin-bottom
}

export interface ImageProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  layout?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  quality?: number
  mx?: number | string
  mt?: number | string
}