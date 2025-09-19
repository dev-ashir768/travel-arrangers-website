import React, { useEffect, useState } from "react";
import { Marquee } from "../common/marquee";
import { AirlinePartnersData } from "@/json/data.json";
import Image from "next/image";

const AirlinePartner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById("partners-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        id="partners-section"
        className="lg:py-20 py-16 bg-background relative overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div
            className={`mb-12 lg:mb-14 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Fly Anywhere. With the World&apos;s Best.
            </h2>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-5 lg:gap-6">
            <Marquee pauseOnHover className="[--duration:20s]">
              {AirlinePartnersData.map((item) => (
                <div
                  className="text-center p-4 bg-secondary rounded-md lg:rounded-xl flex justify-center items-center"
                  key={item.id}
                >
                  <Image
                    src={`/images/airlines/${item.airline}.svg`}
                    width={120}
                    height={120}
                    alt={item.airline}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {AirlinePartnersData.map((item) => (
                <div
                  className="text-center p-4 bg-secondary rounded-md lg:rounded-xl flex justify-center items-center"
                  key={item.id}
                >
                  <Image
                    src={`/images/airlines/${item.airline}.svg`}
                    width={120}
                    height={120}
                    alt={item.airline}
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AirlinePartner;
