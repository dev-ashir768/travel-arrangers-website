export type NavigationType = {
  title: string;
  description: string;
  icon: string | null;
  dropdown: boolean;
  item: NavigationType[] | null;
  href: string;
};
