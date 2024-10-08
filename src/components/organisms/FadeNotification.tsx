'use client'

import { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface FadeNotificationProps {
  message: string
  onNotificationClose: () => void
}

const FadeNotification: React.FC<FadeNotificationProps> = ({ message, onNotificationClose }) => {
  const [show, setShow] = useState(false)

  // 알림창을 보여주고 3초 후에 사라지도록 설정
  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
    }, 3000)

    const closeTimer = setTimeout(() => {
      onNotificationClose()
    }, 3600)

    return () => {
      clearTimeout(timer)
      clearTimeout(closeTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%)"
          bg="brand.background3"
          color="brand.text2"
          px={4}
          py={2}
          borderRadius="md"
          zIndex="1000"
          transition="all 0.1 ease-in-out"
        >
          <Text>{message}</Text>
        </Box>
      )}
    </AnimatePresence>
  )
}

export default FadeNotification
