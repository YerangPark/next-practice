import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import Button from '../atoms/Button'
import { IoIosSave } from "react-icons/io";

const PortfolioInputFooter: React.FC = () => {
  return (
    <>
      <Divider />
      <Box mb={4} mx={4} display="flex" justifyContent="flex-end">
        {/* <Text color="gray.500">포트폴리오 생성 완료 후 저장해주세요</Text> */}
        <Button
          leftIcon={<IoIosSave />}
          aria-label="저장"
          color="white"
          bg="brand.primary1"
          _hover={{ bg: "brand.background3", color: "brand.text3" }}
          onClick={() => { console.log('저장 클릭') }}
          mt={4}
        >
          저장
        </Button>
      </Box>
    </>
  )
}

export default PortfolioInputFooter