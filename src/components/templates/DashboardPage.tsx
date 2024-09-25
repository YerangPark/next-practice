'use client'

import React, { useEffect, useState } from 'react'
import DashboardNavBar from '../organisms/DashboardNavBar'
import { Heading } from '../atoms/Text'
import EmptyDashboardContents from '../organisms/EmptyDashboardContents'
import DashboardContent from '../organisms/DashboardContent'
import { useRouter } from 'next/navigation';
import { Box } from '@chakra-ui/react'
import DeletePortfolioModal from '../organisms/DeletePortfolioModal'
import { ja } from 'date-fns/locale'
import FadeNotification from '../organisms/FadeNotification'

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState([])
  const [isDeletePortfolioModalOpen, setDeletePortfolioModalOpen] = useState(false);
  const openDeletePortfolioModal = () => setDeletePortfolioModalOpen(true);
  const closeDeletePortfolioModal = () => setDeletePortfolioModalOpen(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({id: 0, file_name: ''})
  const [showNotification, setShowNotification] = useState(false)
  const onNotification = () => setShowNotification(true)
  const offNotification = () => setShowNotification(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      fetch(`${apiUrl}/api/portfolios/brief`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        mode: "cors",
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.success) {
          setPortfolios(data.data)
        } else {
          console.error("잘못된 데이터", data)
        }
      })
      .catch(error => {
        console.error("포트폴리오 조회 실패:", error)
        router.push("/")
      })
    } else {
      console.log("토큰이 없습니다")
      router.push("/")
    }
  }, [])

  return (
    <div>
      <DashboardNavBar />
      <hr/>
      <Box mx="10" mt="5">
        <Heading content="대시보드" fontSize="4xl" color="brand.text1"/>
        {
          portfolios.length > 0 ?
          (<DashboardContent data={portfolios} onHover={setSelectedPortfolio} openDeletePortfolioModal={openDeletePortfolioModal} handleExport={onNotification}/>) :
          (<EmptyDashboardContents />)
        }
      </Box>
      <DeletePortfolioModal
        isOpen={isDeletePortfolioModalOpen}
        onClose={closeDeletePortfolioModal}
        portfolioId={selectedPortfolio.id}
        portfolioFileName={selectedPortfolio.file_name}
      />
      { showNotification && <FadeNotification message="내보내기 링크가 복사되었습니다." onNotificationClose={offNotification} /> }
    </div>
  )
}

export default DashboardPage