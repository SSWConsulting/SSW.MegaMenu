import React, { useContext } from "react";
import { LinkContext } from "./components";

export type LinkComponentType = React.FC<{
  href: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}>;

export const useLinkComponent = () =>
  useContext<LinkComponentType>(LinkContext);
