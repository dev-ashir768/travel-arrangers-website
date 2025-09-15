"use client";

import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-mid-night via-mid-night/95 to-primary/10 transition-all duration-1000"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 2}s`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-16 h-16 border border-white/20 rotate-45" />
            ) : i % 3 === 1 ? (
              <div className="w-12 h-12 bg-white/10 rounded-full" />
            ) : (
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-transparent rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;