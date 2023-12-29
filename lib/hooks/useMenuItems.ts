import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

const API_URL = "https://www.ssw.com.au/api/get-megamenu";

const refreshData = async () => {
  const res = await fetch(API_URL);

  const json = await res.json();

  const { menuGroups } = json;

  if (window?.localStorage && menuGroups?.length > 0) {
    window.localStorage.setItem("megamenu", JSON.stringify(menuGroups));
  }

  return menuGroups;
};

export const useMenuItems = (
  menuBarItems?: NavMenuGroup[],
): { menuItems: NavMenuGroup[] } => {
  const [menuItems, setMenuItems] = useState<NavMenuGroup[] | null>([]);

  useEffect(() => {
    const cached = JSON.parse(window.localStorage.getItem("megamenu") || "[]");
    console.log("cached", cached);

    if (menuBarItems) {
      setMenuItems(menuBarItems);
    } else if (cached?.length > 0) {
      setMenuItems(cached);
    } else {
      refreshData().then((data) => {
        setMenuItems(data);
      });
    }
  }, [menuBarItems]);

  return { menuItems: menuItems || [] };
};
