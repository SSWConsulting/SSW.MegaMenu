import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

const DAY = 1000 * 60 * 60 * 24;

const refreshData = async () => {
  const res = await fetch("https://www.ssw.com.au/api/get-megamenu");

  const json = await res.json();
  if (window?.localStorage) {
    const cached = {
      value: json,
      ttl: new Date().getTime() + DAY,
    };
    window.localStorage.setItem("megamenu", JSON.stringify(cached));
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
      if (cached.ttl < new Date().getTime()) {
        refreshData().then((data) => {
          setMenuItems(data);
        });
      } else {
        setMenuItems(cached.value);
      }
    } else {
      refreshData().then((data) => {
        setMenuItems(data);
      });
    }
  }, [menuBarItems]);

  return { menuItems: menuItems || [] };
};
