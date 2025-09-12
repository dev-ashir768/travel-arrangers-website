"use client"

import React from 'react'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

interface HeroSectionProps {
  scrollY: number
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              strokeWidth="3"
              fill="none"
              strokeDasharray="15,8"
              className="animate-dash"
            />
            <circle r="6" fill="var(--primary)" className="drop-shadow-lg">
              <animateMotion dur="8s" repeatCount="indefinite">
                <path d="M50,650 Q300,150 600,350 Q900,550 1150,250" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center container mx-auto px-4">
          <div className="animate-fadeInUp">
            {/* TICO Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/30 animate-fadeInUp">
              <span className="text-white/90 font-medium">✈ TICO Licensed • Trusted Since 2001</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Travel Made
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400 animate-pulse block">
                Simple,
              </span>
              Memories Made
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
                Forever
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp-delay">
              Mississauga&apos;s trusted travel agency. Since 2001, we&apos;ve been booking flights,
              vacations, and corporate travel with expertise and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp-delay-2 mb-12">
              <button className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-2">
                <span className="relative z-10 flex items-center">
                  Book Your Trip
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-red-600 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
              </button>

              <button className="group bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300">
                Get a Free Quote
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 animate-fadeInUp-delay-2">
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
          <div className="absolute top-20 right-10 hidden xl:block animate-float">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
          </div>

          <div className="absolute bottom-32 left-10 hidden xl:block animate-float-delay">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80 text-sm">Hotel Partners</div>
            </div>
          </div>

          <div className="absolute top-1/2 right-20 hidden xl:block animate-float" style={{ animationDelay: '3s' }}>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <div className="text-2xl font-bold text-white">TICO</div>
              <div className="text-white/80 text-sm">Licensed</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
