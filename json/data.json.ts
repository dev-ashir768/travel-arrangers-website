import {
  AboutUsMediaGridType,
  AirlinePartnersType,
  DestinationsType,
  ExperienceType,
  FeaturesType,
  FooterLinksType,
  NavigationMenusType,
  ServicesType,
  SocialLinksType,
  StatsType,
  TestimonialsType,
} from "@/type/global.types";

export const NavigationMenusData: NavigationMenusType[] = [
  {
    title: "Home",
    description: "Welcome to our travel services",
    path: null,
    dropdown: false,
    item: null,
    href: "/",
  },
  {
    title: "Services",
    description: "Explore our travel solutions",
    path: null,
    dropdown: true,
    href: "#",
    item: [
      {
        title: "Corporate Travel",
        description: "Tailored travel for businesses",
        path: "corporate-travel.jpg",
        dropdown: false,
        item: null,
        href: "/corporate-travel",
      },
      {
        title: "Travel Insurance",
        description: "Protect your journey with our plans",
        path: "travel-insurance.jpg",
        dropdown: false,
        item: null,
        href: "/travel-insurance",
      },
      {
        title: "Umrah & Hajj",
        description: "Spiritual journeys to Mecca & Medina",
        path: "umrah-n-hajj.jpg",
        dropdown: false,
        item: null,
        href: "/umrah-hajj",
      },
      {
        title: "Ashura Travel",
        description: "Ziyarat trips to Iraq & Iran",
        path: "ashura-travel.jpg",
        dropdown: false,
        item: null,
        href: "/ashura-travel",
      },
      {
        title: "Rail Europe",
        description: "Explore the European continent by train",
        path: "rail-europe.jpg",
        dropdown: false,
        item: null,
        href: "/rail-europe",
      },
      {
        title: "Visa Services",
        description: "Hassle-free visa processing for you",
        path: "visa-service.jpg",
        dropdown: false,
        item: null,
        href: "/visa-services",
      },
    ],
  },
  {
    title: "Destinations",
    description: "Explore our top travel destinations.",
    path: null,
    dropdown: true,
    href: "#",
    item: [
      {
        title: "London",
        description: "Historic charm, modern vibe.",
        path: "london.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/london",
      },
      {
        title: "Istanbul",
        description: "Where East truly meets West.",
        path: "istanbul.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/istanbul",
      },
      {
        title: "Bali",
        description: "The tropical island of gods.",
        path: "bali.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/bali",
      },
      {
        title: "New York",
        description: "The city that never sleeps.",
        path: "new-york.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/new-york",
      },
      {
        title: "Karachi",
        description: "Pakistan's vibrant city of lights.",
        path: "karachi.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/karachi",
      },
      {
        title: "Bangkok",
        description: "Bustling markets, ornate shrines.",
        path: "bangkok.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/bangkok",
      },
      {
        title: "Mumbai",
        description: "The heart of Bollywood cinema.",
        path: "mumbai.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/mumbai",
      },
      {
        title: "Dubai",
        description: "Luxury shopping & modern marvels.",
        path: "dubai.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/dubai",
      },
      {
        title: "Tehran",
        description: "A bustling city with history.",
        path: "tehran.jpeg",
        dropdown: false,
        item: null,
        href: "/destinations/tehran",
      },
      {
        title: "Johannesburg",
        description: "South Africa's vibrant hub.",
        path: "johannesburg.jpeg",
        dropdown: false,
        item: null,
        href: "/destinations/johannesburg",
      },
      {
        title: "Colombo",
        description: "Port city with colonial charm.",
        path: "colombo.jpeg",
        dropdown: false,
        item: null,
        href: "/destinations/colombo",
      },
      {
        title: "Delhi",
        description: "India's bustling capital city.",
        path: "delhi.webp",
        dropdown: false,
        item: null,
        href: "/destinations/delhi",
      },
      {
        title: "Jeddah",
        description: "Major port city on the Red Sea.",
        path: "jeddah.jpg",
        dropdown: false,
        item: null,
        href: "/destinations/jeddah",
      },
      {
        title: "Dhaka",
        description: "The capital of Bangladesh.",
        path: "dhaka.jpeg",
        dropdown: false,
        item: null,
        href: "/destinations/dhaka",
      },
    ],
  },
  {
    title: "About",
    description: "Our story and mission",
    path: null,
    dropdown: false,
    item: null,
    href: "/",
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    path: null,
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

export const AboutUsMediaGridData: AboutUsMediaGridType[] = [
  {
    type: "image",
    src: "/professional-woman-working-on-laptop-in-modern-off.jpg",
    alt: "Professional woman working on laptop",
    title: "Focused Work",
    description: "Creating amazing digital experiences",
  },
  {
    type: "video",
    src: "/placeholder-66vth.png",
    alt: "Professional woman in green hijab",
    title: "Team Member",
    description: "Bringing creativity to life",
  },
  {
    type: "image",
    src: "/placeholder-i8dg4.png",
    alt: "Team member in office",
    title: "Collaboration",
    description: "Working together for success",
  },
];

export const ServicesData: ServicesType[] = [
  {
    path: "corporate-travel.jpg",
    title: "Corporate Travel",
    description:
      "Streamline your company's business travel with comprehensive management solutions, ensuring cost-effective and hassle-free journeys for your entire team.",
  },
  {
    path: "travel-insurance.jpg",
    title: "Travel Insurance",
    description:
      "Travel with complete peace of mind. Our robust insurance plans cover medical emergencies, trip cancellations, and lost baggage so you can focus on your journey.",
  },
  {
    path: "umrah-n-hajj.jpg",
    title: "Umrah & Hajj",
    description:
      "Embark on a profound spiritual journey with our all-inclusive packages. We manage visas, flights, and premium accommodations for a seamless pilgrimage.",
  },
  {
    path: "ashura-travel.jpg",
    title: "Ashura Travel",
    description:
      "Join our guided Ziyarat tours to the holy sites of Iraq and Iran. We provide secure, well-organized travel for a deeply meaningful spiritual experience.",
  },
  {
    path: "rail-europe.jpg",
    title: "Rail Europe",
    description:
      "Experience the charm of Europe with extensive rail passes. Travel seamlessly between iconic cities while enjoying breathtaking scenic routes from your seat.",
  },
  {
    path: "visa-service.jpg",
    title: "Visa Services",
    description:
      "Navigate complex visa procedures with our expert assistance. We provide end-to-end support, from document preparation to submission, for global destinations.",
  },
];

export const FooterLinksData: FooterLinksType = {
  Services: [
    "Corporate Travel",
    "Travel Insurance",
    "Umrah & Hajj",
    "Ashura Travel",
    "Rail Europe",
    "Visa Services",
  ],
  Experiences: [
    "Disney Vacations",
    "Cruises",
    "Tawed",
    "Europe Tours",
    "Vacation Packages",
    "All-Inclusive Resorts",
  ],
  Company: [
    "About",
    "Contact",
    "Travel Tips",
    "Booking Policy",
    "Terms & Conditions",
    "TICO Information",
  ],
};

export const SocialLinksData: SocialLinksType[] = [
  { icon: "Facebook", href: "#", label: "Facebook" },
  { icon: "Instagram", href: "#", label: "Instagram" },
  { icon: "Youtube", href: "#", label: "YouTube" },
];

export const TestimonialsData: TestimonialsType[] = [
  {
    name: "Sarah Johnson",
    location: "Toronto, ON",
    rating: 5,
    text: "They handled everything perfectly — from flights to hotels. Hassle-free from start to finish! The attention to detail and personalized service made our family vacation absolutely perfect.",
    trip: "Family Vacation to Europe",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Michael Chen",
    location: "Vancouver, BC",
    rating: 5,
    text: "Professional, friendly, and reliable. Our family vacation was flawless. The team went above and beyond to ensure every detail was perfect, and their expertise really showed.",
    trip: "Disney World Package",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Jennifer Martinez",
    location: "Calgary, AB",
    rating: 5,
    text: "For both personal and corporate bookings, I trust them every time. Their corporate travel solutions have saved our company time and money while ensuring our team travels comfortably.",
    trip: "Corporate Travel Management",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "David Thompson",
    location: "Ottawa, ON",
    rating: 5,
    text: "Exceptional service from start to finish. They found us the perfect honeymoon package within our budget and made sure every moment was magical. Highly recommend!",
    trip: "Honeymoon in Bali",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Lisa Wang",
    location: "Montreal, QC",
    rating: 5,
    text: "Their travel insurance saved us when we had to cancel our trip due to illness. The claims process was smooth and they supported us throughout. True professionals!",
    trip: "European River Cruise",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export const DestinationsData: DestinationsType[] = [
  {
    name: "London",
    country: "UK",
    price: "$549",
    image: "london.jpg",
    rating: 4.8,
    description: "Historic charm and modern culture",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    price: "$699",
    image: "istanbul.jpg",
    rating: 4.9,
    description: "Where East meets West",
  },
  {
    name: "Bali",
    country: "Indonesia",
    price: "$999",
    image:
     "bali.jpg",
    rating: 4.9,
    description: "Island of gods, a tropical paradise",
  },
  {
    name: "New York",
    country: "USA",
    price: "$649",
    image: "new-york.jpg",
    rating: 4.7,
    description: "The city that never sleeps",
  },
  {
    name: "Karachi",
    country: "Pakistan",
    price: "$299",
    image: "karachi.jpg",
    rating: 4.5,
    description: "The vibrant city of lights",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    price: "$749",
    image:
      "bangkok.jpg",
    rating: 4.8,
    description: "Bustling markets and ornate shrines",
  },
  {
    name: "Mumbai",
    country: "India",
    price: "$499",
    image:
    "mumbai.jpg",
    rating: 4.6,
    description: "The heart of the Bollywood film industry",
  },
  {
    name: "Dubai",
    country: "UAE",
    price: "$799",
    image:
      "dubai.jpg",
    rating: 4.8,
    description: "Luxury shopping and ultramodern architecture",
  },
  {
    name: "Tehran",
    country: "Iran",
    price: "$450",
    image:
     "tehran.jpeg",
    rating: 4.4,
    description: "A bustling capital with rich history",
  },
  {
    name: "Johannesburg",
    country: "South Africa",
    price: "$1099",
    image:
      "johannesburg.jpeg",
    rating: 4.7,
    description: "South Africa's biggest city and vibrant hub",
  },
  {
    name: "Colombo",
    country: "Sri Lanka",
    price: "$599",
    image:
     "colombo.jpeg",
    rating: 4.6,
    description: "A port city with a rich colonial heritage",
  },
  {
    name: "Delhi",
    country: "India",
    price: "$480",
    image:
    "delhi.webp",
    rating: 4.7,
    description: "India's capital territory and massive metro area",
  },
  {
    name: "Jeddah",
    country: "Saudi Arabia",
    price: "$650",
    image:
  "jeddah.jpg",
    rating: 4.5,
    description: "A major port city on the Red Sea",
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    price: "$420",
    image:
   "dhaka.jpeg",
    rating: 4.3,
    description: "The capital city of Bangladesh",
  },
];

export const StatsData: StatsType[] = [
  { key: "flights", label: "Flights Booked", value: 2, suffix: "K+" },
  { key: "customers", label: "Happy Customers", value: 1.2, suffix: "K+" },
  { key: "destinations", label: "Destinations", value: 14, suffix: "+" },
  { key: "satisfaction", label: "Satisfaction Rate", value: 98, suffix: "%" },
];

export const AirlinePartnersData: AirlinePartnersType[] = [
  { id: 1, airline: "air-france" },
  {
    id: 2,
    airline: "american-airlines",
  },
  {
    id: 3,
    airline: "british-airways",
  },
  {
    id: 4,
    airline: "delta-airlines",
  },
  {
    id: 5,
    airline: "emirates-airlines",
  },
  {
    id: 6,
    airline: "etihad-airways",
  },
  { id: 7, airline: "lufthansa" },
  {
    id: 8,
    airline: "qatar-airways",
  },
  {
    id: 9,
    airline: "turkish-airlines",
  },
  {
    id: 10,
    airline: "united-airlines",
  },
  {
    id: 11,
    airline: "pia",
  },
];

export const ExperienceData: ExperienceType[] = [
  {
    name: "Tawed",
    description:
      "Discover unique spiritual journeys and authentic local rituals.",
    bg_color: "bg-[#ffb900]",
    text_color: "text-orange-900",
  },
  {
    name: "Cruises",
    description: "Unpack once and wake up to a new horizon every single day.",
    bg_color: "bg-mid-night",
    text_color: "text-white",
  },
  {
    name: "Europe Tours",
    description: "Explore Europe's iconic landmarks and rich cultural history.",
    bg_color: "bg-[#344d94]",
    text_color: "text-white",
  },
  {
    name: "Vacation Packages",
    description: "Your dream getaway, perfectly planned from flights to stays.",
    bg_color: "bg-[#7d1941]",
    text_color: "text-white",
  },
];
