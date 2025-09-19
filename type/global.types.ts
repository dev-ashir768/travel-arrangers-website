export type NavigationMenusType = {
  title: string;
  description: string;
  path: string | null;
  dropdown: boolean;
  item: NavigationMenusType[] | null;
  href: string;
};

export type FeaturesType = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export type AboutUsMediaGridType = {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type ServicesType = {
  path: string;
  title: string;
  description: string;
};

export type FooterLinksType = {
  Services: string[];
  Experiences: string[];
  Company: string[];
};

export type SocialLinksType = {
  icon: string;
  href: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  avatar: string;
};

export type DestinationsType = {
  name: string;
  country: string;
  price: string;
  image: string;
  rating: number;
  description: string;
};

export type StatKey = "flights" | "customers" | "destinations" | "satisfaction";

export type StatsType = {
  key: StatKey;
  label: string;
  value: number;
  suffix: string;
  description: string;
  bg_color: string;
  text_color: string;
};

export type AirlinePartnersType = { id: number; airline: string };

export type ExperienceType = {
  name: string;
  description: string;
  path: string;
  href: string;
};
