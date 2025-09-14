"use client"

import React from 'react'
import { MapPin, Phone } from 'lucide-react'
import { Button } from '../../shadcn/button'
import SectionBadge from '../common/section-badge'

interface HeroSectionProps {
  scrollY: number
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <source
            src="/videos/70-airlines.mp4"
            type="video/mp4"
          />
        </video>
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-dark-blue/90 to-primary/20" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />

        {/* Animated Clouds */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-float"
              style={{
                left: `${15 + i * 14}%`,
                top: `${10 + i * 12}%`,
                width: `${50 + i * 15}px`,
                height: `${25 + i * 8}px`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${6 + i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Flight Path Animation */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <path
              d="M50,650 Q300,150 600,350 Q900,550 1150,250"
              stroke="rgba(236, 36, 38, 0.4)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="15,8"
              className="animate-dash"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center container mx-auto px-4 lg:px-6">
          <div className="animate-fadeInUp">
            <SectionBadge title='✈ TICO Licensed • Trusted Since 2001' variant='secondary' className='mb-4 lg:mb-6' />

            <h1 className="max-w-5xl mx-auto text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400 animate-pulse">Travel{" "}</span>Made Simple,
              Memories Made Forever
            </h1>

            <p className="text-lg md:text-2xl text-primary-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp-delay">
              Mississauga&apos;s trusted travel agency. Since 2001, we&apos;ve been booking flights,
              vacations, and corporate travel with expertise and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg-gap-6 justify-center items-center animate-fadeInUp-delay-2 mb-12">
              <div className='relative sm:w-max w-full'>
                <Button className='sm:w-[166px] w-full' size="lg">Book Your Trip</Button>
                <span className='absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary'></span>
              </div>
              <Button className='sm:w-[166px] w-full' variant="secondary" size="lg">Get a Quote</Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col xs:flex-row gap-4 lg-gap-6 justify-center items-center text-primary-foreground animate-fadeInUp-delay-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">(905) 267-9262</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Mississauga, ON</span>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-10 xl:top-20 right-10 hidden lg:block animate-float">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-primary-foreground text-sm">Years Experience</div>
            </div>
          </div>

          <div className="absolute bottom-32 left-10 hidden lg:block animate-float-delay">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80 text-sm">Hotel Partners</div>
            </div>
          </div>

          <div className="absolute top-1/2 right-20 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-2xl font-bold text-white">TICO</div>
              <div className="text-white/80 text-sm">Licensed</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute md:bottom-8 bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
