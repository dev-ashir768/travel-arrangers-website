import {
  FeaturesType,
  FooterLinksType,
  NavigationType,
  ServicesType,
  SocialLinksType,
} from "@/type/global.types";

export const navigationMenusData: NavigationType[] = [
  {
    title: "Home",
    description: "Welcome to our travel services",
    icon: null,
    dropdown: false,
    item: null,
    href: "/",
  },
  {
    title: "Travel Services",
    description: "Explore our travel solutions",
    icon: null,
    dropdown: true,
    href: "#",
    item: [
      {
        title: "Corporate Travel",
        description: "Tailored travel for businesses",
        icon: "Briefcase",
        dropdown: false,
        item: null,
        href: "/corporate-travel",
      },
      {
        title: "Travel Insurance",
        description: "Protect your journey",
        icon: "ShieldCheck",
        dropdown: false,
        item: null,
        href: "/travel-insurance",
      },
      {
        title: "Cruises",
        description: "Luxury cruise experiences",
        icon: "Sailboat",
        dropdown: false,
        item: null,
        href: "/cruises",
      },
      {
        title: "Rail Europe",
        description: "Explore Europe by rail",
        icon: "TrainTrack",
        dropdown: false,
        item: null,
        href: "/rail-europe",
      },
    ],
  },
  {
    title: "Special Packages",
    description: "Unique travel packages",
    icon: null,
    dropdown: true,
    href: "#",
    item: [
      {
        title: "Disney Vacations",
        description: "Magical Disney holiday packages",
        icon: "Castle",
        dropdown: false,
        item: null,
        href: "/disney-vacations",
      },
      {
        title: "Umrah & Hajj",
        description: "Spiritual travel arrangements",
        icon: "Heart",
        dropdown: false,
        item: null,
        href: "/umrah-hajj",
      },
      {
        title: "Destawed",
        description: "Special destination packages",
        icon: "MapPin",
        dropdown: false,
        item: null,
        href: "/destawed",
      },
      {
        title: "Ashura Travel",
        description: "Customized Ashura travel",
        icon: "Calendar",
        dropdown: false,
        item: null,
        href: "/ashura-travel",
      },
    ],
  },
  {
    title: "About",
    description: "Our story and mission",
    icon: null,
    dropdown: false,
    item: null,
    href: "/",
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    icon: null,
    dropdown: false,
    item: null,
    href: "/",
  },
];

export const FeaturesData: FeaturesType[] = [
  {
    icon: "Shield",
    title: "TICO Licensed & Trusted",
    description: "Travel with confidence knowing you're protected",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "Clock",
    title: "20+ Years of Expertise",
    description: "Serving travelers since 2001 with dedication",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "Globe",
    title: "Global Partners",
    description: "Access to airlines and hotels worldwide",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "Heart",
    title: "Personalized Support",
    description: "Real people, ready to help anytime",
    color: "from-pink-500 to-pink-600",
  },
];

export const ServicesData: ServicesType[] = [
  {
    icon: "Plane",
    title: "Flights & Ticketing",
    description:
      "Competitive fares and flexible booking options for all your travel needs.",
    features: [
      "Domestic & International",
      "Business Class Options",
      "Group Bookings",
      "Last Minute Deals",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: "Package",
    title: "Vacation Packages",
    description: "From Disney magic to exotic escapes in Bali and beyond.",
    features: [
      "All-Inclusive Resorts",
      "Disney Packages",
      "European Tours",
      "Custom Itineraries",
    ],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: "Building",
    title: "Corporate Travel",
    description: "Efficient, professional solutions for business travelers.",
    features: [
      "Business Travel Management",
      "Group Corporate Travel",
      "Expense Reporting",
      "Policy Setup",
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: "Hotel",
    title: "Hotels & Resorts",
    description: "Access to over 1,000+ trusted properties worldwide.",
    features: [
      "Luxury Hotels",
      "Budget Options",
      "Resort Bookings",
      "Extended Stay",
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: "Shield",
    title: "Travel Insurance",
    description: "Customized plans for worry-free journeys.",
    features: [
      "Medical Coverage",
      "Trip Cancellation",
      "Baggage Protection",
      "Emergency Support",
    ],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
];

export const FooterLinksData: FooterLinksType = {
  Services: [
    "Flight Bookings",
    "Vacation Packages",
    "Corporate Travel",
    "Hotel Reservations",
    "Travel Insurance",
    "Visa Services",
  ],
  Destinations: [
    "Europe Tours",
    "Asian Adventures",
    "Caribbean Getaways",
    "Disney Packages",
    "Cruise Packages",
    "All-Inclusive Resorts",
  ],
  Support: [
    "Contact Us",
    "Travel Tips",
    "Booking Policy",
    "Terms & Conditions",
    "Privacy Policy",
    "TICO Information",
  ],
  Company: ["About Us", "Contact Us", "Travel Blog"],
};

export const SocialLinksData: SocialLinksType[] = [
  { icon: "Facebook", href: "#", label: "Facebook" },
  { icon: "Twitter", href: "#", label: "Twitter" },
  { icon: "Instagram", href: "#", label: "Instagram" },
  { icon: "Youtube", href: "#", label: "YouTube" },
];
