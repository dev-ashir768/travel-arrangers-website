import React from 'react'
import * as Icons from 'lucide-react';
import { Mail, Phone, MapPin, Shield, Send } from 'lucide-react';
import { FooterLinksData, SocialLinksData } from '@/json/data.json';
import Link from 'next/link';
import { Button } from '../../shadcn/button';
import { Input } from '../../shadcn/input';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip"

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-blue text-white ">
        <div className='container mx-auto px-4 lg:px-6'>
          {/* Newsletter Section */}
          <div className="border-b border-primary-foreground/50">
            <div className="py-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated with Travel Deals</h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Subscribe to our newsletter and be the first to know about exclusive deals, travel tips, and destination guides
                </p>
                <div className="flex flex-col max-w-md mx-auto">
                  <div className='flex justify-between items-center gap-4 px-4 py-1.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-white/60'>
                    <Input type="email" className='bg-transparent border-0 focus:ring-0 h-full p-0 rounded-none focus-visible:ring-0' placeholder="Enter your email address" />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className='' size="icon"><Send /></Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Subscribe</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <Link href="/">
                    <Image src="/images/branding/logo.svg" width={200} height={83} priority alt='travel arrangers.ca' />
                  </Link>
                </div>

                <p className="text-white mb-6 text-base leading-relaxed">
                  Mississauga&apos;s trusted travel agency since 2001. We specialize in creating unforgettable
                  travel experiences with personalized service and TICO-licensed protection.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 footer-nav-link">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>(905) 267-9262</span>
                  </div>
                  <div className="flex items-center space-x-3 footer-nav-link">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>info@travelarrangers.ca</span>
                  </div>
                  <div className="flex items-start space-x-3 footer-nav-link">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div>3045 Southcreek Rd #43</div>
                      <div>Mississauga, ON L4X 2X7</div>
                    </div>
                  </div>
                </div>

                {/* TICO Badge */}
                <div className="inline-flex items-center bg-primary/20 rounded-lg px-4 py-2 border border-primary/30">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-primary font-semibold text-sm">TICO Licensed Agency</span>
                </div>
              </div>

              {/* Links Sections */}
              {Object.entries(FooterLinksData).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4 text-lg text-primary">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="footer-nav-link"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className='h-full'>
                  <h4 className="font-semibold mb-4 text-primary text-lg">Business Hours</h4>
                  <div className="space-y-2 text-white">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:30 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>11:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="h-full text-left md:text-right">
                  <h4 className="font-semibold mb-4 text-primary text-lg">Follow Us</h4>
                  <div className="flex justify-start md:justify-end items-center space-x-4">
                    {SocialLinksData.map((social) => {
                      const Icon = Icons[social?.icon as keyof typeof Icons] as React.ElementType
                      return (
                        <Link
                          key={social.label}
                          href={social.href}
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                          aria-label={social.label}
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-primary-foreground/50">
            <div className="py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-white text-center text-sm md:text-left">
                  © {new Date().getFullYear()} Travel Arrangers Inc. | All Rights Reserved | Created by <Link href="#">Quantara</Link>
                </div>

                <div className="flex items-center space-x-6">
                  <Link href="#" className="footer-nav-link !text-sm">Privacy Policy</Link>
                  <Link href="#" className="footer-nav-link !text-sm">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
