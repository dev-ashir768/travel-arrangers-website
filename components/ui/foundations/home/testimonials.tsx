"use cient"

import { TestimonialsData } from '@/json/data.json';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/shadcn/carousel";
import { cn } from '@/lib/utils';


const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }
    // setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      const newIndex = api.selectedScrollSnap()
      setCurrent(newIndex + 1)
      thumbApi?.scrollTo(newIndex)
    })
  }, [api, thumbApi])

  const handleThumbClick = useCallback(
    (index: number) => {
      api?.scrollTo(index)
      thumbApi?.scrollTo(index)
    },
    [api, thumbApi],
  )

  return (
    <>
      <section
        id="testimonials-section"
        className="py-20 bg-gradient-to-br from-dark-blue to-primary/10 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/30">
              <Quote className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stories From <span className="text-primary">Travelers Like You</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              See what our clients say about their travel experiences with us
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              className="w-full mb-6">
              <CarouselContent>
                {TestimonialsData.map((testimonial, index,) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center bg-white/10 backdrop-blur-md h-full rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
                      {/* Quote Icon */}
                      <div className="absolute top-6 left-6 opacity-20">
                        <Quote className="h-16 w-16 text-white" />
                      </div>

                      <div className="relative z-10">
                        {/* Testimonial Text */}
                        <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed font-medium">
                          &quot;{testimonial.text}&quot; {/* Fixed testimonial reference */}
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Testimonial Thumbnails */}
            <Carousel setApi={setThumbApi}
              className="w-full">
              <CarouselContent className="flex">
                {TestimonialsData.map((testimonial, index) => (
                  <CarouselItem
                    key={testimonial.name}
                    className={cn("lg:basis-1/4 md:basis-1/3 xs:basis-1/2 basis-full cursor-pointer transition-all duration-300 h-full")}
                    onClick={() => handleThumbClick(index)}
                  >
                    <div className="p-1">
                      <div className={cn("backdrop-blur-md rounded-md p-3 border hover:bg-white/30 transition-all duration-300", current === index + 1 ? "bg-white/30 border-primary" : "bg-white/10 border-white/20",)}>
                        <div className="flex flex-col items-center space-y-2">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                            width={48}
                            height={48}
                          />
                          <div className="text-center">
                            <div className="text-white font-medium text-xs truncate w-full">{testimonial.name}</div>
                            <div className="flex justify-center mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials;
