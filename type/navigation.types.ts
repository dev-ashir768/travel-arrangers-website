import { IconProps } from "@/components/ui/foundations/common/icon";

export type NavigationType = {
  title: string;
  description: string;
  icon: IconProps["name"] | null;
  dropdown: boolean;
  item: NavigationType[] | null;
  href: string;
};
