"use client";

import React, { useEffect, useState } from 'react'
import HeroSection from './hero-section'
import AboutUs from './about-us';
import Services from './services';

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
    </>
  )
}

export default HomeWrapper
