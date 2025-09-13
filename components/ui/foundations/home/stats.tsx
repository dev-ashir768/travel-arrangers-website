// import React, { useState, useEffect } from 'react';

// const Stats = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counts, setCounts] = useState({ flights: 0, customers: 0, destinations: 0, satisfaction: 0 });

//   const stats = [
//     { key: 'flights', label: 'Flights Booked', value: 2500000, suffix: 'M+' },
//     { key: 'customers', label: 'Happy Customers', value: 50000, suffix: 'K+' },
//     { key: 'destinations', label: 'Destinations', value: 500, suffix: '+' },
//     { key: 'satisfaction', label: 'Satisfaction Rate', value: 98, suffix: '%' },
//   ];

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

//   useEffect(() => {
//     if (!isVisible) return;

//     const animationDuration = 2000;
//     const steps = 60;
//     const stepDuration = animationDuration / steps;

//     stats.forEach((stat) => {
//       let currentCount = 0;
//       const increment = stat.value / steps;

//       const timer = setInterval(() => {
//         currentCount += increment;
//         if (currentCount >= stat.value) {
//           currentCount = stat.value;
//           clearInterval(timer);
//         }
//         setCounts(prev => ({ ...prev, [stat.key]: Math.floor(currentCount) }));
//       }, stepDuration);
//     });
//   }, [isVisible]);

//   return (
//     <section id="stats-section" className="py-20 bg-gradient-to-br from-neutral to-primary/10 relative overflow-hidden">
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
//           {stats.map((stat, index) => (
//             <div
//               key={stat.key}
//               className={`text-center transform transition-all duration-1000 ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
//                 <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
//                   {stat.key === 'flights' ? `${(counts[stat.key] / 1000000).toFixed(1)}${stat.suffix}` :
//                    stat.key === 'customers' ? `${(counts[stat.key] / 1000).toFixed(0)}${stat.suffix}` :
//                    `${counts[stat.key]}${stat.suffix}`}
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