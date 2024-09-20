import { DashboardProps } from '@/types/data'
import React from 'react'

const DashboardContent: React.FC<DashboardProps> = ({ data }) => {
  // 대시보드 카드 형식으로 보여줘야 함.
  return (
    <>
      data.map()
    </>
  )
}

export default DashboardContent