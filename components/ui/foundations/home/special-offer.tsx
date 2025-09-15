"use client"

import React, { useEffect, useState } from 'react'
import { Gift, Clock, Sparkles } from 'lucide-react';
import SectionBadge from '../common/section-badge';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('special-offer-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section id="special-offer-section" className="py-20 bg-gradient-to-r from-primary to-mid-night relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <Sparkles className="h-4 w-4 text-white/20" />
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
            <Gift className="h-10 w-10 text-white/50" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float-delay">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Clock className="h-8 w-8 text-white/50" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            {/* Badge */}
            <SectionBadge title='Limited Time Offer' variant='secondary' className='mb-4 lg:mb-6' />

            <div className='mb-12 lg:mb-14'>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 lg:mb-6">
                Exclusive Seasonal Deals!
              </h2>

              <p className="text-lg text-primary-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                Book now and get access to exclusive seasonal deals on flights and vacation packages!
                Save up to 40% on your next adventure.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 lg-gap-6 mx-auto max-w-lg mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 min-w-[80px]">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-primary-foreground text-sm uppercase tracking-wide">
                    <span className='hidden lg:block'>{unit}</span>
                    <span className='block lg:hidden'>{unit.substring(0, 1)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer Details */}
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg-gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white/90 font-medium">Off Vacation Packages</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-white mb-2">25%</div>
                <div className="text-white/90 font-medium">Off Flight Bookings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl font-bold text-white mb-2">FREE</div>
                <div className="text-white/90 font-medium">Travel Insurance</div>
              </div>
            </div>

            {/* Terms */}
            <p className="text-primary-foreground text-sm mt-8 max-w-2xl mx-auto">
              *Offer valid until the countdown expires. Terms and conditions apply.
              Cannot be combined with other offers. Subject to availability.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpecialOffer
