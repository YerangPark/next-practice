import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"

interface InputDateProps {
  formLabel: string
  value: string
  onChange?: (arg: string) => void
  isDisabled?: boolean
}

const InputDate: React.FC<InputDateProps> = ({ formLabel, value, onChange, isDisabled = false }) => {
  return (
    <FormControl mb={4}>
      <Flex align="center">
        <FormLabel mb="0" width="150px">{formLabel}</FormLabel>
        <Input
          type="date"
          value={value}
          flex="1"
          isDisabled={isDisabled}
          onChange={e => onChange ? onChange(e.target.value) : undefined}
        />
      </Flex>
    </FormControl>
  )
}

export default InputDate