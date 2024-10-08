'use client'

import React, { useState } from 'react'
import TextInputWithLabel from '@/components/molecules/TextInputWithLabel'
import SubmitButton from '@/components/molecules/SubmitButton'

const GuestbookForm: React.FC = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    // 제출 로직 (API 호출 등)
    console.log({ name, message })
  }

  return (
    <div>
      <TextInputWithLabel label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextInputWithLabel label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  )
}

export default GuestbookForm
