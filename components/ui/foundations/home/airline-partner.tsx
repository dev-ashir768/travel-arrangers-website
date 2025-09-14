import React, { useEffect, useState } from 'react'
import { Marquee } from '../common/marquee'
import SectionBadge from '../common/section-badge';
import { AirlinePartnersData } from '@/json/data.json';
import Image from 'next/image';

const AirlinePartner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('partners-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="partners-section" className="lg:py-20 py-16 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/10 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className={`text-center mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
            <SectionBadge title='Global Airline Network' variant='primary' className='mb-4 lg:mb-6' />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Fly Anywhere. <span className="text-primary">With the World&apos;s Best.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Top airlines, best fares, and the widest choice of flights.
            </p>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-5 lg:gap-6">
            <Marquee pauseOnHover className="[--duration:20s]">
              {AirlinePartnersData.map((item) => (
                <div className="text-center p-4 bg-secondary rounded-md lg:rounded-xl flex justify-center items-center" key={item.id}>
                  <Image src={`/images/airlines/${item.airline}.svg`} width={120} height={120} alt={item.airline} />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {AirlinePartnersData.map((item) => (
                <div className="text-center p-4 bg-secondary rounded-md lg:rounded-xl flex justify-center items-center" key={item.id}>
                  <Image src={`/images/airlines/${item.airline}.svg`} width={120} height={120} alt={item.airline} />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AirlinePartner
