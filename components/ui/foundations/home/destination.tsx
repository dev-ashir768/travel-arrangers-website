import React, { useEffect, useState } from "react";
import { DestinationsData } from "@/json/data.json";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn/carousel";
import Autoplay from "embla-carousel-autoplay";

const Destination = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById("destination-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="destination-section" className="py-16 lg:py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 lg:mb-14 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mid-night mb-4 lg:mb-6">
            Popular <span className="text-primary">Destinations</span>
          </h2>

          <p className="text-lg text-mid-night font-medium leading-relaxed max-w-2xl mx-auto">
            No matter which sector you&apos;re in, our specialized tools and
            services can help take your ideas where they need to be.
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="py-2">
            {DestinationsData.map((destination, index) => (
              <CarouselItem
                key={index}
                className="basis-full h-full md:basis-1/4 xl:basis-1/6"
              >
                <div className="group relative flex-shrink-0 w-56 h-72 mx-auto lg:mx-0 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-10"></div>
                  <Image
                    src={`/images/others/${destination.image}`}
                    alt={destination.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:hidden"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300">
                      {destination.name}
                    </h3>
                  </div>
                  {/* Hover Content */}
                  <div className="absolute h-full z-30 inset-x-0 bg-mid-night rounded-full transform translate-y-0 lg:translate-y-72 lg:group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center p-8 text-center">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Destination;
