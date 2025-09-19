"use client";

import React from "react";
import { Button } from "@/components/ui/shadcn/button";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src={`/videos/aeroplane-globe.mp4`}
            type="video/mp4"
          />
        </video>

         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 container max-w-7xl mx-auto text-center px-4 lg:px-6">
          <div className="animate-fadeInUp">
            <h1 className="max-w-5xl mx-auto text-3xl lg:text-6xl font-bold text-mid-night lg:mb-6 mb-8 leading-tight">
              A marketplace for businesses with ideas worth traveling for
            </h1>

            <p className="text-base sm:text-lg text-mid-night font-medium lg:mb-6 mb-8 max-w-[820px] mx-auto animate-fadeInUp-delay">
              One place for bookings, meetings, and expenses, with access to
              options from the world&apos;s top travel providers. Our
              streamlined technology is here to help your great ideas travel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg-gap-6 justify-center items-center animate-fadeInUp-delay-2">
              <div className="relative sm:w-[166px] w-full">
                <Button size="lg" className="w-full">
                  Book Your Trip
                </Button>
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary"></span>
              </div>
              <div className="sm:w-[166px] w-full">
                <Button variant="outline" className="w-full" size="lg">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
