"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/shadcn/button';
import SectionBadge from '../common/section-badge';
import Image from 'next/image';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about-section" className="lg:py-20 py-16 bg-secondary relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-12 items-center">
            {/* Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <SectionBadge title='About Travel Arrangers Inc.' variant='primary' className='mb-4 lg:mb-6' />

              <h2 className="text-4xl md:text-5xl font-bold text-mid-night mb-4 lg:mb-6">
                More Than Travel Agents{' '}
                <span className="text-primary">We&apos;re Your Journey Partners</span>
              </h2>

              <p className="text-lg text-muted-foreground font-medium mb-4 leading-relaxed">
                At Travel Arrangers Inc., we believe travel should be seamless, stress-free, and unforgettable.
                Since 2001, we&apos;ve proudly served families, solo travelers, and corporate clients across Canada.
              </p>

              <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
                As a fully licensed TICO agency, we provide the reliability and consumer protection you deserve,
                paired with personalized service that big-box booking sites simply can&apos;t match.
              </p>

              <div className="grid grid-cols-2 gap-4 lg-gap-6 mb-8">
                <div className="text-center p-4 bg-background rounded-md lg:rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">2001</div>
                  <div className="text-muted-foreground font-medium">Established</div>
                </div>
                <div className="text-center p-4 bg-background rounded-md lg:rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">95,000+</div>
                  <div className="text-muted-foreground font-medium">Hotel Partners</div>
                </div>
              </div>

              <div className='relative sm:w-max w-full'>
                <Button className='sm:w-[166px] w-full' size="lg">Learn More</Button>
                <span className='absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary'></span>
              </div>
            </div>

            {/* Features Grid */}
            <div className={`h-full transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
              <div className="h-full grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 min-h-[400px] lg:min-h-[500px]">
                <div className="group col-span-2 row-span-2 h-full">
                  <div className='relative z-10 h-full lg:rounded-xl rounded-md overflow-hidden'>
                    <Image
                      src="/images/others/about-2.jpg"
                      className="object-cover object-left w-full h-full group-hover:scale-110 transition-transform duration-700"
                      width={500}
                      height={400}
                      alt="plane-with-bags"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute bottom-4 inset-x-4 rounded-md bg-primary-foreground backdrop-blur-sm px-3 py-2 flex flex-col justify-center items-start transform translate-y-0 lg:translate-y-26 lg:group-hover:translate-y-0 transition-transform duration-300">
                      <h6 className="w-full text-sm lg:text-base text-center lg:text-left font-semibold text-foreground">Worldwide Travel</h6>
                      <p className="hidden lg:block font-medium text-muted-foreground">Access to exclusive destinations and premium airline partnerships globally</p>
                    </div>
                  </div>
                </div>
                <div className="group col-span-1 h-full">
                  <div className='relative z-10 h-full lg:rounded-xl rounded-md overflow-hidden'>
                    <Image
                      src="/images/others/about-3.jpg"
                      className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-700"
                      width={500}
                      height={400}
                      alt="plane-with-bags"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 inset-x-4 rounded-md bg-primary-foreground backdrop-blur-sm px-3 py-2 flex flex-col justify-center items-start transform translate-y-0 lg:translate-y-25 lg:group-hover:translate-y-0 transition-transform duration-300">
                      <h6 className="w-full text-sm lg:text-base text-center lg:text-left font-semibold text-foreground">95,000+ Hotels</h6>
                      <p className="hidden lg:block text-sm font-medium text-muted-foreground">Premium Partners</p>
                    </div>
                  </div>
                </div>
                <div className="group col-span-1 h-full">
                  <div className='relative z-10 h-full lg:rounded-xl rounded-md overflow-hidden'>
                    <Image
                      src="/images/others/about-1.jpg"
                      className="object-cover object-right w-full h-full group-hover:scale-110 transition-transform duration-700"
                      width={500}
                      height={400}
                      alt="plane-with-bags"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 inset-x-4 rounded-md bg-primary-foreground backdrop-blur-sm px-3 py-2 flex flex-col justify-center items-start transform translate-y-0 lg:translate-y-25 lg:group-hover:translate-y-0 transition-transform duration-300">
                      <h6 className="w-full text-sm lg:text-base text-center lg:text-left font-semibold text-foreground">Easy Booking</h6>
                      <p className="hidden lg:block text-sm font-medium text-muted-foreground">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
