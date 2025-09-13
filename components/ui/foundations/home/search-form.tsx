import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, ArrowLeftRight, Plane } from 'lucide-react';

const SearchForm = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('search-form');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="search-form" className="relative -mt-32 z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`bg-white rounded-3xl shadow-2xl p-8 border border-secondary transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Trip Type Selector */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { id: 'roundtrip', label: 'Round Trip', icon: ArrowLeftRight },
              { id: 'oneway', label: 'One Way', icon: Plane },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTripType(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  tripType === id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-neutral hover:bg-secondary'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* From */}
            <div className="group relative">
              <label className="text-sm text-neutral/70 font-medium mb-2 block">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral/50 group-focus-within:text-primary transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="New York (NYC)"
                  className="w-full pl-10 pr-4 py-4 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-secondary/30 hover:bg-white"
                />
              </div>
            </div>

            {/* To */}
            <div className="group relative">
              <label className="text-sm text-neutral/70 font-medium mb-2 block">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral/50 group-focus-within:text-primary transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="London (LHR)"
                  className="w-full pl-10 pr-4 py-4 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-secondary/30 hover:bg-white"
                />
              </div>
            </div>

            {/* Departure */}
            <div className="group relative">
              <label className="text-sm text-neutral/70 font-medium mb-2 block">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral/50 group-focus-within:text-primary transition-colors duration-300" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-4 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-secondary/30 hover:bg-white"
                />
              </div>
            </div>

            {/* Return */}
            {tripType === 'roundtrip' && (
              <div className="group relative">
                <label className="text-sm text-neutral/70 font-medium mb-2 block">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral/50 group-focus-within:text-primary transition-colors duration-300" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-4 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-secondary/30 hover:bg-white"
                  />
                </div>
              </div>
            )}

            {/* Passengers */}
            <div className={`group relative ${tripType === 'oneway' ? 'lg:col-span-2' : ''}`}>
              <label className="text-sm text-neutral/70 font-medium mb-2 block">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral/50 group-focus-within:text-primary transition-colors duration-300" />
                <select className="w-full pl-10 pr-4 py-4 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-secondary/30 hover:bg-white appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button className="group relative overflow-hidden bg-primary text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search Flights</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-xl opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;