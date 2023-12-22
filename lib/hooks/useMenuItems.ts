import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

const API_URL = "https://www.ssw.com.au/api/get-megamenu";

const refreshData = async () => {
  const res = await fetch(API_URL);

  const json = await res.json();
  if (window?.localStorage) {
    window.localStorage.setItem("megamenu", JSON.stringify(json));
  }

  return json;
};

export const useMenuItems = (
  menuBarItems?: NavMenuGroup[],
): { menuItems: NavMenuGroup[] } => {
  const [menuItems, setMenuItems] = useState<NavMenuGroup[] | null>([]);

  useEffect(() => {
    const cached = JSON.parse(window.localStorage.getItem("megamenu") || "{}");

    if (menuBarItems) {
      setMenuItems(menuBarItems);
    } else if (cached) {
      setMenuItems(cached);
    } else {
      refreshData().then((data) => {
        setMenuItems(data);
      });
    }
  }, [menuBarItems]);

  return { menuItems: menuItems || [] };
};
