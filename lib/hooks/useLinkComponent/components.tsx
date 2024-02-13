import { createContext } from "react";
import type { LinkComponentType } from "./index";

const defaultLinkComponent: LinkComponentType = ({
  href,
  className,
  children,
}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export const LinkContext =
  createContext<LinkComponentType>(defaultLinkComponent);

export const LinkProvider = ({
  children,
  linkComponent = defaultLinkComponent,
}: {
  children?: JSX.Element;
  linkComponent?: LinkComponentType;
}) => {
  return (
    <LinkContext.Provider value={linkComponent}>
      {children}
    </LinkContext.Provider>
  );
};
