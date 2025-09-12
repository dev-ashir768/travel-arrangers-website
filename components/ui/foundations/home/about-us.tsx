"use client"

import { FeaturesData } from '@/json/data.json';
import { Users } from 'lucide-react';
import * as Icons from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../../shadcn/button';

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
      <section id="about-section" className="py-20 bg-white relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-primary font-semibold xs:text-base text-sm">About Travel Arrangers Inc.</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">2001</div>
                  <div className="text-muted-foreground font-medium">Established</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground font-medium">Hotel Partners</div>
                </div>
              </div>

              <div className='relative sm:w-max w-full'>
                <Button className='sm:w-[166px] w-full' size="lg">Learn More</Button>
                <span className='absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary'></span>
              </div>
            </div>

            {/* Features Grid */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FeaturesData.map((feature, index) => {
                  const Icon = Icons[feature.icon as keyof typeof Icons] as React.ElementType
                  return (
                    <div
                      key={feature.title}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-secondary/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
