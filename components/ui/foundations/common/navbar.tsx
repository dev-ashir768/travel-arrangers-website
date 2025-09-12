"use client";

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/shadcn/navigation-menu'
import { Button } from '@/components/ui/shadcn/button'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import * as Icons from 'lucide-react';
import { navigationMenusData } from '@/json/data.json'
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)

  const openMobileSubmenu = (submenu: string) => {
    setMobileSubmenu(submenu)
  }

  const closeMobileSubmenu = () => {
    setMobileSubmenu(null)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSubmenu(null)
  }

  const activeSubmenuData = navigationMenusData.find(menu => menu.title === mobileSubmenu);

  return (
    <>
      <nav className={cn("w-full bg-background fixed inset-0 z-20 h-max")}>
        <div className={cn("container mx-auto px-4 lg:px-6 py-1 flex items-center justify-between")}>
          <Link href="/">
            <Image src="/images/branding/logo.svg" width={200} height={83} priority alt='travel arrangers.ca' />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden lg:flex' viewport={false}>
            <NavigationMenuList>
              {navigationMenusData.map((menus, index) => (
                menus.dropdown ?
                  (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger className='nav-link'>{menus.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn("grid gap-2 md:grid-cols-1 w-[350px]")}>
                          {menus.item && menus.item.map((menus, index) => {
                            const Icon = menus.icon ? (Icons[menus.icon as keyof typeof Icons] as React.ElementType) : null;
                            return (
                              <li key={index}>
                                <NavigationMenuLink className='nav-link' asChild>
                                  <Link href={menus.href}>
                                    <div className="flex items-center gap-3">
                                      <div className='bg-secondary rounded-md flex justify-center items-center p-0.5 size-12 flex-shrink-0'>
                                        {Icon && <Icon color="var(--primary)" className="size-6" />}
                                      </div>
                                      <div className="flex-1">
                                        <div className="text-foreground text-sm font-semibold leading-none">{menus.title}</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-medium mt-1">{menus.description}</p>
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) :
                  (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink className='nav-link' asChild>
                        <Link href={menus.href} className={cn("cursor-pointer", navigationMenuTriggerStyle())}>
                          {menus.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className={cn("flex items-center gap-3")}>
            <Button className="hidden lg:flex w-[166px]" size="lg">
              Get a Quote
            </Button>
            <div className='flex lg:hidden cursor-pointer'>
              <Hamburger toggled={mobileMenuOpen} toggle={setMobileMenuOpen} size={30} color="var(--primary)" rounded />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden fixed inset-0 bg-slate-900 z-50 overflow-y-auto'>
            <div className='container mx-auto px-4 lg:px-6 h-full'>
              <div className="flex items-center py-1 justify-between border-b border-primary-foreground">
                <Link href="/" onClick={closeMobileMenu}>
                  <Image src="/images/branding/logo.svg" width={200} height={83} priority alt='travel arrangers.ca' />
                </Link>

                <div className='cursor-pointer'>
                  <Hamburger toggled={mobileMenuOpen} toggle={setMobileMenuOpen} size={30} color="var(--primary)" rounded />
                </div>
              </div>

              <div className='py-7'>
                {!mobileSubmenu ?
                  <div className="flex flex-col gap-6">
                    {navigationMenusData.map((menus, index) => (
                      !menus.dropdown ? (
                        <Link href={menus.href} className="nav-link" onClick={closeMobileMenu} key={index}>
                          {menus.title}
                        </Link>
                      ) : (
                        <button onClick={() => openMobileSubmenu(menus.title)} className="flex items-center justify-between nav-link" key={index}>
                          {menus.title}
                          <ChevronDown className="h-5 w-5" />
                        </button >
                      )
                    )
                    )}
                    <Button className="w-full" size="lg">Get a quote</Button>
                  </div>
                  :
                  <div className='space-y-6'>
                    <button onClick={closeMobileSubmenu} className="flex items-center gap-3 text-white cursor-pointer">
                      <ArrowLeft className="h-5 w-5" />
                      <span className="text-lg">Back</span>
                    </button>
                    <div className='space-y-6'>
                      <h2 className="text-2xl font-semibold text-white">{activeSubmenuData?.title}</h2>
                      <div className="grid gap-4">
                        {activeSubmenuData?.item && activeSubmenuData.item.map((item, index) => {
                          const Icon = item.icon ? (Icons[item.icon as keyof typeof Icons] as React.ElementType) : null;
                          return (
                            <Link href={item.href} className="nav-link flex items-start" onClick={closeMobileMenu} key={index}>
                              <div className="flex items-center gap-4">
                                <div className='bg-secondary rounded-md flex justify-center items-center flex-shrink-0 p-0.5 size-12'>
                                  {Icon && <Icon color="var(--primary)" className="size-6" />}
                                </div>
                                <div className="flex-1">
                                  <div className="text-white text-lg font-semibold leading-none">{item.title}</div>
                                  <p className="line-clamp-2 text-base leading-snug text-primary-foreground mt-1">{item.description}</p>
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        )}
      </nav >
    </>
  )
}

export default Navbar;
