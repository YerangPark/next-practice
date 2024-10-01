import { Box } from '@chakra-ui/react'
import React from 'react'
import { IoIosSave } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from '../atoms/Button'

interface PortfolioInputFooterProps {
  showPrevButton?: boolean // 이전 버튼 표시 여부
  showNextButton?: boolean // 다음 버튼 표시 여부
  showSaveButton?: boolean // 저장 버튼 표시 여부
  onNextClick?: () => void // 다음 버튼 클릭 핸들러
  onPrevClick?: () => void // 이전 버튼 클릭 핸들러
  onSaveClick?: () => void // 저장 버튼 클릭 핸들러
}

const PortfolioInputFooter: React.FC<PortfolioInputFooterProps> = ({
  showPrevButton = false,
  showNextButton = false,
  showSaveButton = false,
  onNextClick = () => {},
  onPrevClick = () => {},
  onSaveClick = () => {},
}) => {
  return (
    <Box mb={4} mx={4} display="flex" justifyContent="space-between" alignItems="center">
      {showPrevButton && (
        <Button
          leftIcon={<FaArrowLeft />}
          aria-label="이전"
          color="white"
          bg="brand.primary1"
          _hover={{ bg: 'brand.background3', color: 'brand.text3' }}
          onClick={onPrevClick}
          mt={4}
        >
          이전
        </Button>
      )}

      <Box ml="auto" display="flex" gap={4}>
        {showNextButton && (
          <Button
            leftIcon={<FaArrowRight />}
            aria-label="다음"
            color="white"
            bg="brand.primary1"
            _hover={{ bg: 'brand.background3', color: 'brand.text3' }}
            onClick={onNextClick}
            mt={4}
          >
            다음
          </Button>
        )}

        {showSaveButton && (
          <Button
            leftIcon={<IoIosSave />}
            aria-label="저장"
            color="white"
            bg="brand.primary1"
            _hover={{ bg: 'brand.background3', color: 'brand.text3' }}
            onClick={onSaveClick}
            mt={4}
          >
            저장
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default PortfolioInputFooter
