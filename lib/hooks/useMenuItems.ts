import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

const API_URL = "https://www.ssw.com.au/api/get-megamenu";

const refreshData = async () => {
  const res = await fetch(API_URL);
  const json = await res.json();

  const { menuGroups } = json;

  return menuGroups;
};

export const useMenuItems = (
  menuBarItems?: NavMenuGroup[],
): { menuItems: NavMenuGroup[] } => {
  const [menuItems, setMenuItems] = useState<NavMenuGroup[] | undefined>(
    menuBarItems,
  );

  useEffect(() => {
    refreshData()
      .then((data) => {
        setMenuItems(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (menuBarItems) {
      setMenuItems(menuBarItems);
    }
  }, [menuBarItems]);

  return { menuItems: menuItems || [] };
};
