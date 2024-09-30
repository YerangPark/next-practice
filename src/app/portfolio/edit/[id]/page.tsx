'use client'

import PortfolioFormPage from '@/components/templates/PortfolioFormPage'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  if (Array.isArray(params.id) || !params.id) {
    return <div>올바르지 않은 접근입니다.</div>
  }
  const id = parseInt(params.id, 10)

  return <PortfolioFormPage id={id} />
}
