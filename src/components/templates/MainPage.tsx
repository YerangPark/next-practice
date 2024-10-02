'use client'

import React, { useState } from 'react'
import MainBanner from '@/components/organisms/MainBanner'
import NavBar from '@/components/organisms/NavBar'
import MainContents from '../organisms/MainContents'
import Footer from '../organisms/Footer'
import SignupModal from '../organisms/SignupModal'
import LoginModal from '../organisms/LoginModal'
import FindIdModal from '../organisms/FindIdModal'
import FindPasswordModal from '../organisms/FindPasswordModal'

const MainPage: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false)
  const openLoginModal = () => setLoginModalOpen(true)
  const closeLoginModal = () => setLoginModalOpen(false)
  const [isSignupModalOpen, setSignupModalOpen] = useState(false)
  const openSignupModal = () => setSignupModalOpen(true)
  const closeSignupModal = () => setSignupModalOpen(false)
  const [isFindIdModalOpen, setFindIdModalOpen] = useState(false)
  const openFindIdModal = () => setFindIdModalOpen(true)
  const closeFindIdModal = () => setFindIdModalOpen(false)
  const [isFindPasswordModalOpen, setFindPasswordModalOpen] = useState(false)
  const openFindPasswordModal = () => setFindPasswordModalOpen(true)
  const closeFindPasswordModal = () => setFindPasswordModalOpen(false)

  return (
    <div>
      <NavBar openSignupModal={openSignupModal} openLoginModal={openLoginModal} />
      <MainBanner openSignupModal={openSignupModal} />
      <MainContents openSignupModal={openSignupModal} />
      <Footer />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} openLoginModal={openLoginModal} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        openSignupModal={openSignupModal}
        openFindIdModal={openFindIdModal}
        openFindPasswordModal={openFindPasswordModal}
      />
      <FindIdModal isOpen={isFindIdModalOpen} onClose={closeFindIdModal} openLoginModal={openLoginModal} />
      <FindPasswordModal
        isOpen={isFindPasswordModalOpen}
        onClose={closeFindPasswordModal}
        openLoginModal={openLoginModal}
      />
    </div>
  )
}

export default MainPage
