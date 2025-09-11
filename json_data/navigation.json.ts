import { NavigationType } from "@/type/navigation.types";

export const navigationMenus: NavigationType[] = [
  {
    title: "Home",
    description: "Welcome to our travel services",
    icon: null,
    dropdown: false,
    item: null,
    href: "/"
  },
  {
    title: "Travel Services",
    description: "Explore our travel solutions",
    icon: null,
    dropdown: true,
    href: "#",
    item: [
      { title: "Corporate Travel", description: "Tailored travel for businesses", icon: "briefcase", dropdown: false, item: null, href: "/corporate-travel" },
      { title: "Cruises", description: "Luxury cruise experiences", icon: "sailboat", dropdown: false, item: null, href: "/cruises" },
      { title: "Rail Europe", description: "Explore Europe by rail", icon: "train-track", dropdown: false, item: null, href: "/rail-europe" },
    ],
  },
  {
    title: "Special Packages",
    description: "Unique travel packages",
    icon: null,
    dropdown: true,
    href: "#",
    item: [
      { title: "Disney Vacations", description: "Magical Disney holiday packages", icon: "castle", dropdown: false, item: null, href: "/disney-vacations" },
      { title: "Umrah & Hajj", description: "Spiritual travel arrangements", icon: "heart", dropdown: false, item: null, href: "/umrah-hajj" },
      { title: "Destawed", description: "Special destination packages", icon: "map-pin", dropdown: false, item: null, href: "/destawed" },
      { title: "Ashura Travel", description: "Customized Ashura travel", icon: "calendar", dropdown: false, item: null, href: "/ashura-travel" },
    ],
  },
  {
    title: "Support Services",
    description: "Additional travel support",
    icon: null,
    dropdown: true,
    href: "#",
    item: [
      { title: "Travel Insurance", description: "Protect your journey", icon: "shield-check", dropdown: false, item: null, href: "/travel-insurance" },
    ],
  },
  {
    title: "About",
    description: "Our story and mission",
    icon: null,
    dropdown: false,
    item: null,
    href: "/"
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    icon: null,
    dropdown: false,
    item: null,
    href: "/"
  },
];