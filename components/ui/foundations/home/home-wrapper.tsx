"use client";

import React, { useEffect, useState } from 'react'
import HeroSection from './hero-section'

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
    </>
  )
}

export default HomeWrapper
