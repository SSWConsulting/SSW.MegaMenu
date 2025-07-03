import { useState } from "react";

import React from "react";
import { NavMenuGroup } from "../../types/megamenu";

export const MenuContext = React.createContext<{
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;

  selectedMenuItem: NavMenuGroup | null;
  setSelectedMenuItem: React.Dispatch<
    React.SetStateAction<NavMenuGroup | null>
  >;
}>({
  selectedMenuItem: null,
  setSelectedMenuItem: () => {},
  isMenuOpen: false,
  setMenuOpen: () => {},
});

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<NavMenuGroup | null>(
    null,
  );

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setMenuOpen, selectedMenuItem, setSelectedMenuItem }}
    >
      {children}
    </MenuContext.Provider>
  );
};
