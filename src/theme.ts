import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      // 메인 색상
      primary1: '#007BFF', // 메인컬러 1
      primary2: '#E7F0FF', // 메인컬러 2

      // 배경 및 섹션 구분 색상
      background1: '#343A40', // 서브컬러 1
      background2: '#9798A1', // 서브컬러 2
      background3: '#F1F3F5', // 서브컬러 3

      // 글자 색상
      text1: '#191F28', // 글자 1
      text2: '#323D4C', // 글자 2
      text3: '#6B7685', // 글자 3
      text4: '#ADB3BA', // 글자 4

      // 보조 색상
      success: '#28A745', // 성공
      warning: '#FFC107', // 경고 및 하이라이트
      danger: '#DC3545', // 오류 및 중요한 알림
    },
  },
})

export default theme
