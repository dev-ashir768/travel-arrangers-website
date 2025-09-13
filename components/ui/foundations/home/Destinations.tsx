// import React, { useState } from 'react';
// import { ArrowRight, Star, MapPin } from 'lucide-react';

// const Destinations = () => {
//   const [activeDestination, setActiveDestination] = useState(0);

//   const destinations = [
//     {
//       name: 'Paris',
//       country: 'France',
//       price: '$599',
//       image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.9,
//       description: 'City of lights and romance'
//     },
//     {
//       name: 'Tokyo',
//       country: 'Japan',
//       price: '$899',
//       image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.8,
//       description: 'Modern metropolis meets tradition'
//     },
//     {
//       name: 'New York',
//       country: 'USA',
//       price: '$649',
//       image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.7,
//       description: 'The city that never sleeps'
//     },
//     {
//       name: 'Dubai',
//       country: 'UAE',
//       price: '$799',
//       image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.8,
//       description: 'Luxury in the desert'
//     },
//     {
//       name: 'London',
//       country: 'UK',
//       price: '$549',
//       image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.6,
//       description: 'Historic charm and modern culture'
//     },
//     {
//       name: 'Sydney',
//       country: 'Australia',
//       price: '$1199',
//       image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600',
//       rating: 4.9,
//       description: 'Harbor city with stunning views'
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
//             Popular <span className="text-primary">Destinations</span>
//           </h2>
//           <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
//             Discover amazing places around the world with exclusive deals
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map((destination, index) => (
//             <div
//               key={destination.name}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-secondary/30"
//               onMouseEnter={() => setActiveDestination(index)}
//             >
//               {/* Image */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={destination.image}
//                   alt={destination.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
//                 {/* Price Badge */}
//                 <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold text-sm transform translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
//                   From {destination.price}
//                 </div>

//                 {/* Rating */}
//                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 transform -translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
//                   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-medium">{destination.rating}</span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <MapPin className="h-4 w-4 text-primary" />
//                   <span className="text-sm text-neutral/60">{destination.country}</span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors duration-300">
//                   {destination.name}
//                 </h3>
                
//                 <p className="text-neutral/70 mb-4">
//                   {destination.description}
//                 </p>

//                 <button className="flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-all duration-300">
//                   <span>Explore Deals</span>
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <button className="group bg-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
//             <span className="flex items-center space-x-2">
//               <span>View All Destinations</span>
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destinations;