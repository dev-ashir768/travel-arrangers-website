"use client"

import { ServicesData } from '@/json/data.json';
import { Package, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from '../../shadcn/button';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/shadcn/carousel";

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
      <section id="services-section" className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Package className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-semibold xs:text-base text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              One Stop. <span className="text-primary">Every Destination.</span>
            </h2>
            <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs
            </p>
          </div>

          {/* Services Carousel */}
          <div className="relative w-full max-w-5xl mx-auto mb-16">
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
              className="w-full rounded-3xl">
              <CarouselContent>
                {ServicesData.map((service, index) => {
                  const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType
                  return (
                    <CarouselItem key={index}>
                      <div className="w-full h-full flex-shrink-0">
                        <div className={`${service.bgColor} h-full lg:p-12 p-6 rounded-3xl mx-4`}>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                                <Icon className="h-10 w-10 text-white" />
                              </div>
                              <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                              <p className="text-lg font-medium text-muted-foreground mb-6">{service.description}</p>
                              <Button className={cn("sm:w-[166px] w-full bg-gradient-to-r", service.color)} size="lg">Learn More</Button>
                            </div>
                            <div className="space-y-4">
                              {service.features.map((feature, featureIndex) => (
                                <div
                                  key={feature}
                                  className="flex items-center space-x-3 text-muted-foreground font-medium bg-white/70 p-4 rounded-xl transform hover:translate-x-2 transition-all duration-300"
                                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                                >
                                  <ChevronRight className="h-5 w-5 text-primary" />
                                  <span className="font-medium text-foreground">{feature}</span>
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServicesData.slice(0, 3).map((service, index) => {
              const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType
              return (
                <div
                  key={service.title}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-secondary/50 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={cn("bg-gradient-to-r sm:w-[166px] w-full", service.color)} size="lg">Get Started</Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
