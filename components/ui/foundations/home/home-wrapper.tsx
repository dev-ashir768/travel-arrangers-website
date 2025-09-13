"use client";

import React, { useEffect, useState } from 'react'
import HeroSection from './hero-section'
import AboutUs from './about-us';
import Services from './services';
import Testimonials from './testimonials';
import SpecialOffer from './special-offer';

const HomeWrapper = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection scrollY={scrollY} />
      <AboutUs />
      <Services />
      <Testimonials />
      <SpecialOffer />
    </>
  )
}

export default HomeWrapper
