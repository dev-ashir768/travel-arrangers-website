export type NavigationType = {
  title: string;
  description: string;
  icon: string | null;
  dropdown: boolean;
  item: NavigationType[] | null;
  href: string;
};

export type FeaturesType = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export type ServicesType = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
};

export type FooterLinksType = {
  Services: string[];
  Destinations: string[];
  Support: string[];
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
