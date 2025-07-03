import { createContext, useContext } from "react";

export const ClosePopoverContext = createContext<(() => void) | null>(null);

export const useClosePopover = () => useContext(ClosePopoverContext);

export const ClosePopoverProvider = ClosePopoverContext.Provider;
