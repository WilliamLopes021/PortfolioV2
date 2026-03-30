import type { ReactElement } from "react";
import type { IconBaseProps, IconType } from "react-icons";

export interface ContactCardProps {
  type: string;
  contact: string;
  icon: ReactElement<IconBaseProps, IconType>;
}
