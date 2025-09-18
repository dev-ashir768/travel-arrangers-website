"use client";

import { ServicesData } from "@/json/data.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById("services-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="services-section"
        className="pb-16 lg:pb-20 bg-background relative overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div
            className={`mb-12 lg:mb-14 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-mid-night">
              One Stop. Every Travel Service.
            </h2>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {ServicesData.map((services, index) => (
                <CarouselItem key={index} className="basis-full h-full md:basis-1/3 lg:basis-1/4">
                  <div className="text-left p-4 lg:border-r lg:border-gray-200">
                    <div className="relative w-20 h-20 rounded-md lg:rounded-xl flex items-center justify-center overflow-hidden mb-4">
                      <Image
                        src={`/images/others/${services.path}`}
                        alt={services.path}
                        fill
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-mid-night mb-3">
                      {services.title}
                    </h3>
                    <p className="text-mid-night font-medium">{services.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Services;
