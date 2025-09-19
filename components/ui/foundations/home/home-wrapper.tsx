"use client";

import React from "react";
import HeroSection from "./hero-section";
import Services from "./services";
import CTA from "./cta";
import CTA_2 from "./cta-2";
import Experience from "./experience";
import Destination from "./destination";
import Stats from "./stats";
import AirlinePartner from "./airline-partner";

const HomeWrapper = () => {
  return (
    <>
      <HeroSection />
      <CTA />
      <Stats />
      <Services />
      <CTA_2 />
      <Destination />
      <Experience />
      <AirlinePartner />
    </>
  );
};

export default HomeWrapper;
