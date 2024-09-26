'use client'

import React, { useEffect } from 'react'
import DashboardNavBar from '../organisms/DashboardNavBar'
import { Heading } from '../atoms/Text'
import { Box } from '@chakra-ui/react'
import PortfolioInputForm from '../organisms/PortfolioInputForm'
import PortfolioInputFooter from '../molecules/PortfolioInputFooter'

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const CreatePortfolioPage: React.FC = () => {

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (token) {
  //     fetch(`${apiUrl}/api/portfolios/brief`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`,
  //       },
  //       mode: "cors",
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data && data.success) {
  //         setPortfolios(data.data)
  //       } else {
  //         console.error("잘못된 데이터", data)
  //       }
  //     })
  //     .catch(error => {
  //       console.error("포트폴리오 조회 실패:", error)
  //       router.push("/")
  //     })
  //   } else {
  //     console.log("토큰이 없습니다")
  //     router.push("/")
  //   }
  // }, [])

  return (
    <div>
      <DashboardNavBar />
      <hr/>
      <Box mx="10" mt="5">
        <Heading content="포트폴리오 생성" fontSize="2xl" color="brand.text1"/>
        <PortfolioInputForm />
      </Box>
      <PortfolioInputFooter />
    </div>
  )
}

export default CreatePortfolioPage