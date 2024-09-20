import React from 'react'
import DashboardNavBar from '../organisms/DashboardNavBar'
import { Heading } from '../atoms/Text'
import EmptyDashboardContents from '../organisms/EmptyDashboardContents'
import DashboardContent from '../organisms/DashboardContent'

const DashboardPage: React.FC = () => {
  // 대시보드 초반에 읽어오고
  // empty가 아닐 때만 EmptyDashboardContents 보여줘야 함.
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
