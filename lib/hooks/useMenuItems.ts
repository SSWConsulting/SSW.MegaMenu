import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

export const useMenuItems = (
  menuBarItems?: NavMenuGroup[],
): { menuItems: NavMenuGroup[] } => {
  const [menuItems, setMenuItems] = useState<NavMenuGroup[]>([]);

  useEffect(() => {
    if (menuBarItems) {
      setMenuItems(menuBarItems);
    } else if (window?.localStorage?.megamenu) {
      setMenuItems(JSON.parse(window.localStorage.megamenu));
    } else {
      fetch("https://www.ssw.com.au/api/get-megamenu")
        .then((res) => res.json())
        .then((json) => {
          setMenuItems(json);
          if (window) window.localStorage.megamenu = JSON.stringify(json);
        })
        .catch((err) => console.error(err));
    }
  }, [menuBarItems]);

  return { menuItems: menuItems || [] };
};
