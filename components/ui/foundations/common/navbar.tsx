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
import { ArrowLeft, ChevronDown, Menu, X } from 'lucide-react'
import { navigationMenus } from '@/json_data/navigation.json'
import Icon from '@/components/ui/foundations/common/icon'

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

  const activeSubmenuData = navigationMenus.find(menu => menu.title === mobileSubmenu);

  return (
    <>
      <nav className={cn("w-full bg-slate-100 relative")}>
        <div className={cn("container mx-auto px-4 py-1 flex items-center justify-between")}>
          <Link href="/">
            <Image src="/images/branding/logo.svg" width={200} height={83} priority alt='travel arrangers.ca' />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden lg:flex items-center gap-2' viewport={false}>
            <NavigationMenuList>
              {navigationMenus.map((menus, index) => (
                menus.dropdown ?
                  (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger className='cursor-pointer'>{menus.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn("grid gap-2", menus.item && menus.item.length >= 3 ? "md:grid-cols-2 md:w-[500px]" : "md:grid-cols-1 w-[400px]")}>
                          {menus.item && menus.item.map((menus, index) => {
                            return (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link href={menus.href}>
                                    <div className="flex items-start gap-3">
                                      {menus.icon && <span className="text-lg mt-0.5"> <Icon name={menus.icon} size={24} color='red' /> </span>}
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <div className="text-sm font-medium leading-none">{menus.title}</div>
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">{menus.description}</p>
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
                      <NavigationMenuLink asChild>
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
          <div className={cn("flex items-center gap-4")}>
            <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
              Get a demo
            </Button>
            <button className="lg:hidden text-white/90 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden fixed inset-0 bg-slate-900 z-50 overflow-y-auto'>
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <Link href="/" onClick={closeMobileMenu}>
                <Image src="/images/branding/logo.svg" width={200} height={83} priority alt='travel arrangers.ca' />
              </Link>

              <button onClick={closeMobileMenu} className="text-white/90 hover:text-white transition-colors duration-200">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {!mobileSubmenu ?
                <div className="flex flex-col gap-6">
                  {navigationMenus.map((menus, index) => (
                    menus.dropdown ? (
                      <>
                        <Link href={menus.href} className="text-xl text-white/90 hover:text-white transition-colors duration-200" onClick={closeMobileMenu} key={index}>
                          {menus.title}
                        </Link>
                      </>
                    ) : (
                      <>
                        <button onClick={() => openMobileSubmenu(menus.title)} className="flex items-center justify-between text-xl text-white/90 hover:text-white transition-colors duration-200" key={index}>{menus.title}<ChevronDown className="h-5 w-5" />
                        </button >
                      </>
                    )
                  )
                  )}
                </div>
                :
                <div>
                  <button
                    onClick={closeMobileSubmenu}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 mb-6"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="text-lg">Back</span>
                  </button>
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-6">{activeSubmenuData?.title}</h2>
                    <div className="grid gap-4">
                      {activeSubmenuData?.item && activeSubmenuData.item.map((item, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="flex items-start gap-4 p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
                          onClick={closeMobileMenu}
                        >
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-white">{item.title}</span>
                            </div>
                            <p className="text-white/70 text-sm">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        )}
      </nav >
    </>
  )
}

export default Navbar;
