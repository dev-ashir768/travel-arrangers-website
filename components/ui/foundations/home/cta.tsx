import React from "react";
import { Button } from "@/components/ui/shadcn/button";

const CTA = () => {
  return (
    <section className="w-full lg:py-16 py-12">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-12 gap-8 bg-mid-night lg:rounded-full rounded-4xl text-white p-10">
          <div>
            <h3 className="lg:text-3xl text-2xl font-semibold mb-2">
              Stay up-to-date with the latest business travel pulse
            </h3>
            <p className="lg:text-lg text-base text-primary-foreground max-w-3xl">
              Read our 2025 breakdown of current trends, insights in a
              streamlined infographic.
            </p>
          </div>
          <div className="sm:w-[166px] w-full">
            <Button variant="secondary" className="w-full" size="lg">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
