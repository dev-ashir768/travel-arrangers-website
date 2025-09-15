// import { StatsData } from '@/json/data.json';
// import { StatKey } from '@/type/global.types';
// import React, { useState, useEffect } from 'react';

// const Stats = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counts, setCounts] = useState<Record<StatKey, number>>({
//     flights: 0,
//     customers: 0,
//     destinations: 0,
//     satisfaction: 0,
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     const element = document.getElementById('stats-section');
//     if (element) observer.observe(element);

//     return () => observer.disconnect();
//   }, []);

//    useEffect(() => {
//     // Don't start the animation until the section is visible
//     if (!isVisible) return;

//     const animationDuration = 2000; // ms
//     const steps = 100; // More steps for a smoother animation
//     const stepDuration = animationDuration / steps;

//     const timers = StatsData.map((stat) => {
//       const increment = stat.value / steps;
//       return setInterval(() => {
//         setCounts(prevCounts => {
//           const newCount = prevCounts[stat.key] + increment;
//           if (newCount >= stat.value) {
//             // Find and clear the specific interval once the target is reached
//             const timerToClear = timers[StatsData.findIndex(s => s.key === stat.key)];
//             clearInterval(timerToClear);
//             return { ...prevCounts, [stat.key]: stat.value };
//           }
//           return { ...prevCounts, [stat.key]: newCount };
//         });
//       }, stepDuration);
//     });

//     // IMPORTANT: Cleanup all timers if the component unmounts mid-animation
//     return () => timers.forEach(timer => clearInterval(timer));
//   }, [isVisible]);

//   return (
//     <section id="stats-section" className="py-20 bg-gradient-to-br from-mid-night to-primary/10 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/10 rounded-full animate-twinkle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Trusted by Millions
//           </h2>
//           <p className="text-xl text-white/80 max-w-2xl mx-auto">
//             Join the world&apos;s largest community of travelers
//           </p>
//         </div>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {StatsData.map((stat, index) => (
//             <div
//               key={stat.key}
//               className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
//                 <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
//                   {stat.key === 'flights' ? `${(counts[stat.key] / 1000000).toFixed(1)}${stat.suffix}` :
//                     stat.key === 'customers' ? `${(counts[stat.key] / 1000).toFixed(0)}${stat.suffix}` :
//                       `${counts[StatsData.key]}${stat.suffix}`}
//                 </div>
//                 <div className="text-white/80 font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

import { StatsData } from "@/json/data.json";
import { StatKey, StatsType } from "@/type/global.types";
import React, { useState, useEffect, useRef } from "react";
import SectionBadge from "../common/section-badge";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<StatKey, number>>({
    flights: 0,
    customers: 0,
    destinations: 0,
    satisfaction: 0,
  });

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000;
    const steps = 100;
    const stepDuration = animationDuration / steps;

    const timers = StatsData.map((stat) => {
      const increment = stat.value / steps;
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCount = prevCounts[stat.key] + increment;
          if (newCount >= stat.value) {
            const timerToClear =
              timers[StatsData.findIndex((s) => s.key === stat.key)];
            clearInterval(timerToClear);
            return { ...prevCounts, [stat.key]: stat.value };
          }
          return { ...prevCounts, [stat.key]: newCount };
        });
      }, stepDuration);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]);

  const formatCount = (stat: StatsType) => {
    const value = Math.floor(counts[stat.key]);
    switch (stat.key) {
      case "flights":
      case "customers":
        return `${Math.round(value / 1000)}${stat.suffix}`;
      default:
        return `${value}${stat.suffix}`;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="stats-section"
      className="py-16 lg:py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
        <div
          className={`text-center mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <SectionBadge
            title="Our Supermacy"
            variant="primary"
            className="mb-4 lg:mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-mid-night  mb-4 lg:mb-6">
            Trusted by <span className="text-primary">Millions</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Join the world&apos;s largest community of travelers
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {StatsData.map((stat, index) => (
            <div
              key={stat.key}
              className={`bg-secondary backdrop-blur-md rounded-2xl p-8 border border-secondary group text-center transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-mid-night mb-2 group-hover:scale-110 transition-transform duration-300">
                {formatCount(stat)}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
