import React from "react";
import { MenuContext } from "./components";

const useMenuState = () => React.useContext(MenuContext);

export { useMenuState };
