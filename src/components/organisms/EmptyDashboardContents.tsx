'use client'

import { Box } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Heading } from '../atoms/Text'
import RoundButton from '../molecules/RoundButton'

const EmptyDashboardContents: React.FC = () => {
  const router = useRouter()
  return (
    <Box textAlign="center" mt={150}>
      <Box mb={15}>
        <Heading content="포트폴리오를 생성해주세요." fontSize="4xl" color="brand.text1" />
      </Box>
      <RoundButton
        label="생성하기"
        color="brand.primary1"
        px={24}
        py={6}
        fontWeight="bold"
        fontSize="2xl"
        onClick={() => {
          router.push('/portfolio/create')
        }}
      />
    </Box>
  )
}

export default EmptyDashboardContents
