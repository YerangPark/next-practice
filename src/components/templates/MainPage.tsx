// src/components/templates/MainPageTemplate.tsx
import React from 'react'
import MainBanner from '@/components/organisms/MainBanner'
import NavBar from '@/components/organisms/NavBar'
import MainContents from '../organisms/MainContents';
import Footer from '../organisms/Footer';

const MainPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <MainBanner />
      <MainContents />
      <Footer />
    </div>
  );
};

export default MainPage;