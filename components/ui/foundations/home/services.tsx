"use client"

import { ServicesData } from '@/json/data.json';
import { ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/shadcn/carousel";
import SectionBadge from '../common/section-badge';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('services-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <section id="services-section" className="py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className={`text-center mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <SectionBadge title='Our Services' variant='primary' className='mb-4 lg:mb-6' />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              One Stop. <span className="text-primary">Every Travel Service.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative w-full max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              plugins={[
                Autoplay({
                  delay: 6000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full rounded-md lg:rounded-xl">
              <CarouselContent>
                {ServicesData.map((service, index) => {
                  const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType
                  return (
                    <CarouselItem key={index}>
                      <div className="w-full h-full flex-shrink-0">
                        <div className={`bg-primary/10 h-full lg:p-12 p-6 rounded-md lg:rounded-xl mx-4`}>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                              <div className={`relative w-20 h-20 rounded-md lg:rounded-xl bg-gradient-to-br from-primary/80 to-primary/90 flex items-center justify-center mb-6`}>
                                <Icon className="h-10 w-10 text-white" />
                              </div>
                              <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                              <p className="text-lg font-medium text-muted-foreground mb-6">{service.description}</p>
                              <button className="group flex items-center space-x-2 text-primary font-semibold cursor-pointer">
                                <span>Explore More</span>
                                <Icons.ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                            <div className="space-y-4">
                              {service.features.map((feature, featureIndex) => (
                                <div
                                  key={feature}
                                  className="flex items-center space-x-3 text-muted-foreground font-medium bg-white/70 p-4 rounded-md lg:rounded-xl transform hover:translate-x-2 transition-all duration-300"
                                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                                >
                                  <ChevronRight className="h-5 w-5 text-primary" />
                                  <span className="font-medium text-foreground text-base">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8 gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn("w-3 h-3 rounded-full transition-all duration-300 cursor-pointer", current === index + 1 ? 'bg-primary' : 'bg-dark-blue/30 hover:bg-primary')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
