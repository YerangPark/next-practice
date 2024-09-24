'use client'
import React, { useEffect } from 'react'
import DashboardNavBar from '../organisms/DashboardNavBar'
import { Heading } from '../atoms/Text'
import EmptyDashboardContents from '../organisms/EmptyDashboardContents'
import DashboardContent from '../organisms/DashboardContent'

const DashboardPage: React.FC = async () => {
  // 대시보드 초반에 읽어오고
  // empty가 아닐 때만 EmptyDashboardContents 보여줘야 함.
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetch("http://localhost:3001/api/portfolios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  // JWT 토큰을 Authorization 헤더에 포함
        },
        mode: "cors",
      })
      .then(response => response.json())
      .then(data => {
        console.log("포트폴리오 조회 성공:", data)
      })
      .catch(error => {
        console.error("포트폴리오 조회 실패:", error)
      })
    }
  }, [])

  return (
    <div>
      <DashboardNavBar />
      <Heading content="대시보드" fontSize="4xl" color="brand.text1"/>
      <EmptyDashboardContents />
      {/* <DashboardContent /> */}
    </div>
  )
}

export default DashboardPage
