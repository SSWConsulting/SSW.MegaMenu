import { createContext, useContext } from "react";

type MenuContext = {
  close: () => void;
};

export const MenuContext = createContext<MenuContext>({ close: () => {} });

export const useMenuState = () => useContext(MenuContext);

export const MenuContextProvider = MenuContext.Provider;
