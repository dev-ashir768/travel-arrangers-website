import { Calendar, MapPin, Plane, Users } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";

const CTA = () => {
  return (
    <section className="w-full bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg-px-6">
        <div className="bg-gradient-to-br from-primary to-mid-night rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of travelers who trust us with their adventures
            </p>
            <div className="flex justify-center">
              <Button
                className="sm:w-[166px] w-full"
                variant="secondary"
                size="lg"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            {[MapPin, Calendar, Users, Plane].map((Icon, i) => (
              <Icon
                key={i}
                className="absolute w-16 h-16 animate-float"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
