import React from "react";
import { Button } from "@/components/ui/shadcn/button";

const CTA_2 = () => {
  return (
    <section className="w-full bg-primary rounded-4xl lg:py-16 py-12">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col justify-center items-start lg:gap-12 gap-8 rounded-3xl text-white p-10">
          <h3 className="text-3xl lg:text-6xl font-bold leading-tight">
            Choose travel management and savings that work for you
          </h3>
          <div className="sm:w-[166px] w-full">
            <Button variant="secondary" className="w-full" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA_2;
