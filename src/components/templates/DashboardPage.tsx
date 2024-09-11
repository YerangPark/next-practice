import React from 'react'
import DashboardNavBar from '../organisms/DashboardNavBar'
import { Heading } from '../atoms/Text'
import EmptyDashboardContents from '../organisms/EmptyDashboardContents'

const DashboardPage: React.FC = () => {
  return (
    <div>
      <DashboardNavBar />
      <Heading content="대시보드" fontSize="4xl" color="brand.text1"/>
      <EmptyDashboardContents />
    </div>
  )
}

export default DashboardPage
