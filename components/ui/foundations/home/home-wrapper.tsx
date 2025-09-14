"use client";

import React, { useEffect, useState } from 'react'
import HeroSection from './hero-section'
import AboutUs from './about-us';
import Services from './services';
import Testimonials from './testimonials';
import SpecialOffer from './special-offer';
import Destinations from './destinations';
import Stats from './stats';
import CTA from './cta';
import AirlinePartner from './airline-partner';
import AirlineVideo from './airline-video';

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
      <AirlinePartner />
      <AboutUs />
      <Services />
      <Destinations />
      <Testimonials />
      <SpecialOffer />
      <AirlineVideo/>
      <Stats />
      <CTA />
    </>
  )
}

export default HomeWrapper
