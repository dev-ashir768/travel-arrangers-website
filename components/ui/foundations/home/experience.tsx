import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import { ExperienceData } from "@/json/data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/shadcn/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById("experience-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="experience-section"
      className="py-16 lg:py-20 bg-primary bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/images/others/polygon-pattern.png)" }}
    >
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div
          className={`mb-12 lg:mb-14 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
            Ideas worth sharing: explore our library of resources
          </h2>
        </div>

        <div className="w-full mb-12 lg:mb-14">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {ExperienceData.map((experience, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full h-full md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={experience.href}
                    className="block group bg-white rounded-3xl overflow-hidden h-full"
                  >
                    <div className="text-left p-4 mb-4 h-[180px]">
                      <h3 className="text-xl font-bold text-mid-night mb-3">
                        {experience.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {experience.description}
                      </p>
                      <p className="text-primary font-medium flex justify-start items-center gap-2">
                        Explore{" "}
                        <ArrowRight className="group-hover:ml-2 group-hover:duration-300 group-hover:transition-all" />
                      </p>
                    </div>

                    <div className="relative w-full h-[350px]">
                      <Image
                        src={`/images/others/${experience.path}`}
                        alt={experience.path}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn("cursor-pointer h-2 w-6 rounded-full bg-white/30", {
                  "bg-white w-10": current === index + 1,
                })}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 lg:mb-6">
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white mb-2">
              Your great ideas demand action
            </h2>
            <p className="lg:text-lg text-base text-primary-foreground max-w-3xl">
              Let our team help you get started on optimizing your travel
              program.
            </p>
          </div>
          <div className="relative sm:w-[166px] w-full">
            <Button className="w-full" size="lg" variant="secondary" asChild>
              <Link href="#">Get a Quote</Link>
            </Button>
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-primary"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
