import { ReactNode, createContext } from "react";
import type { LinkComponentType } from "./index";

const defaultLinkComponent: LinkComponentType = ({
  href,
  className,
  children,
  onClick,
}) => {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export const LinkContext =
  createContext<LinkComponentType>(defaultLinkComponent);

type LinkProviderProps = {
  linkComponent?: LinkComponentType;
  children?: ReactNode;
};

export const LinkProvider = ({
  children,
  linkComponent = defaultLinkComponent,
}: LinkProviderProps) => {
  return (
    <LinkContext.Provider value={linkComponent}>
      {children}
    </LinkContext.Provider>
  );
};
