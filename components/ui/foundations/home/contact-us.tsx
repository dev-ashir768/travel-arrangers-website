import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['3045 Southcreek Rd #43', 'Mississauga, ON L4X 2X7'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(905) 267-9262', 'Toll-free support'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@travelarrangers.ca', 'Quick response guaranteed'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon–Fri: 9:30 AM–6 PM', 'Sat: 11 AM–3 PM', 'Sun: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Send className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
            Your Next Trip <span className="text-primary">Starts Here</span>
          </h2>
          <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
            Let&apos;s make your travel plans stress-free and tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-neutral mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group flex items-start space-x-4 p-6 bg-secondary rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-neutral/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Website */}
            <div className="bg-gradient-to-r from-primary to-red-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Visit Our Website</h4>
              <p className="text-white/90 mb-4">
                Explore more services and book online at:
              </p>
              <a
                href="https://travelarrangers.ca"
                className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                travelarrangers.ca
                <Send className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="bg-secondary rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-neutral mb-6">Plan My Trip Today</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-neutral/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:shadow-md"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-neutral/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:shadow-md"
                      placeholder="(905) 123-4567"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-neutral/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-neutral/70 mb-2">
                    Tell us about your travel plans
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white hover:shadow-md resize-none"
                    placeholder="Destination, dates, number of travelers, special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-primary text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send My Request
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-neutral/10">
                <div className="flex items-center justify-center space-x-4 text-sm text-neutral/70">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>TICO Licensed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free Quotes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;