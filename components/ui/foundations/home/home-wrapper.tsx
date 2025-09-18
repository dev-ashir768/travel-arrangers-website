"use client";

import React from "react";
import HeroSection from "./hero-section";
import Services from "./services";
import CTA from "./cta";
import CTA_2 from "./cta-2";
import Experience from "./experience";
import Destination from "./destination";

const HomeWrapper = () => {
  return (
    <>
      <HeroSection />
      <CTA />
      <Services />
      <Experience />
      <CTA_2 />
      <Destination />
    </>
  );
};

export default HomeWrapper;
