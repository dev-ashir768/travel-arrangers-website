import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { DestinationsData } from '@/json/data.json';
import Image from 'next/image';
import SectionBadge from '../common/section-badge';
import { Button } from '@/components/ui/shadcn/button';
import Link from 'next/link';

const Destinations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('destination-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="destination-section" className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`text-center mb-12 lg:mb-14 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
          <SectionBadge title='Famous Destinaions' variant='primary' className='mb-4 lg:mb-6' />
          <h2 className="text-4xl md:text-5xl font-bold text-mid-night mb-4 lg:mb-6">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Discover amazing places around the world with exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {DestinationsData.slice(0, 4).map((destination, index) => (
            <div key={index} className="group relative bg-background rounded-md lg:rounded-xl overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold text-sm transform lg:translate-x-30 lg:group-hover:translate-x-0 transition-transform duration-300">
                  From {destination.price}
                </div>

                {/* Rating */}
                <div className="absolute top-4 left-4 bg-primary-foreground backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 transform lg:-translate-x-21 lg:group-hover:translate-x-0 transition-transform duration-300">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{destination.country}</span>
                </div>

                <h3 className="text-2xl font-bold text-mid-night mb-2 group-hover:text-primary transition-colors duration-300">
                  {destination.name}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <button className="flex items-center space-x-2 text-primary font-semibold group-hover:space-x-3 transition-all duration-300">
                  <span>Explore Deals</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='relative mx-auto sm:w-max w-full mt-12'>
          <Button className='sm:w-[166px] w-full' size="lg" asChild>
            <Link href="#">
              View All
            </Link>
          </Button>
          <span className='absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary'></span>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
