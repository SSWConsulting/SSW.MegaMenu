import React, { useContext } from "react";
import { LinkContext } from "./components";

export type LinkComponentType = React.FC<
  {
    href: string;
    className?: string;
  } & React.HTMLAttributes<HTMLAnchorElement>
>;

export const useLinkComponent = () =>
  useContext<LinkComponentType>(LinkContext);
