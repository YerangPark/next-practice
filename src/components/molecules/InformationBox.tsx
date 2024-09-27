import { Box, Text } from "@chakra-ui/react"
import { Children } from "react"

const InformationBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg="brand.primary2" py={4} px={4} mb={4}>
      <Text fontSize="sm" color="brand.text2">
        { children }
      </Text>
    </Box>
  )
}

export default InformationBox