import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/Hero'
import { MoreThanMerch } from './components/Intro'
import { ShopByCategory } from './components/Category'
import { TrendingNow } from './components/Trending'
import { WhyChooseUs } from './components/Choose'
import { SRMFarmFresh } from './components/FarmFresh'
import { GetInvolved } from './components/Collective'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <MoreThanMerch />
    <ShopByCategory />
    <TrendingNow />
    <WhyChooseUs />
    <SRMFarmFresh />
    <GetInvolved />
    <Footer />
    </>
  )
}

export default App