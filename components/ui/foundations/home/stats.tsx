"use client";

import { StatsData } from "@/json/data.json";
import { StatKey, StatsType } from "@/type/global.types";
import React, { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Initialize counts based on the keys in StatsData to be more dynamic
  const initialCounts = StatsData.reduce(
    (acc, stat) => {
      acc[stat.key] = 0;
      return acc;
    },
    {} as Record<StatKey, number>
  );

  const [counts, setCounts] = useState<Record<StatKey, number>>(initialCounts);

  const sectionRef = useRef<HTMLElement | null>(null);

  // Effect to observe when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start animation only when the section is 50% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after it becomes visible to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Effect to run the counting animation
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds for animation
    const steps = 100; // Number of steps for a smooth animation
    const stepDuration = animationDuration / steps;

    const timers: NodeJS.Timeout[] = [];

    StatsData.forEach((stat) => {
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        setCounts((prevCounts) => {
          const currentCount = prevCounts[stat.key];

          if (currentCount >= stat.value) {
            // Once the target is reached, clear this specific interval
            clearInterval(timer);
            // Return the exact final value to avoid overshoot
            return { ...prevCounts, [stat.key]: stat.value };
          }

          // Otherwise, continue incrementing
          return { ...prevCounts, [stat.key]: currentCount + increment };
        });
      }, stepDuration);

      timers.push(timer);
    });

    // Cleanup function: clear all intervals if the component unmounts mid-animation
    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]); // This effect depends only on isVisible

  const formatCount = (stat: StatsType): string => {
    const count = counts[stat.key];

    // Check if the original value in data is a float (e.g., 1.2)
    if (stat.value % 1 !== 0) {
      // For floats, display with one decimal place
      return `${count.toFixed(1)}${stat.suffix}`;
    }

    // For integers, display the floored value
    return `${Math.floor(count)}${stat.suffix}`;
  };

  return (
    <section
      ref={sectionRef}
      id="stats-section"
      className="pb-16 lg:pb-20 bg-background relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div
          className={`mb-12 lg:mb-14 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mid-night mb-4 lg:mb-6">
            Trusted by Travelers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {StatsData.map((stats, index) => (
            <div
              className="bg-white rounded-4xl shadow-lg overflow-hidden"
              key={index}
            >
              <div className={`${stats.bg_color} p-6 h-[130px]`}>
                <p className={`text-sm font-medium ${stats.text_color} mb-2`}>
                  Travel Arrangers
                </p>
                <h3 className={`text-xl font-bold ${stats.text_color}`}>
                  {stats.label}
                </h3>
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-mid-night mb-2 group-hover:scale-110 transition-transform duration-300">
                  {formatCount(stats)}
                </div>
                <p className={`text-base font-medium text-primary`}>
                  {stats.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
