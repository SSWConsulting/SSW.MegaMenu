import { useEffect, useState } from "react";
import { NavMenuGroup } from "../types/megamenu";

const CANONICAL_API_URL = "https://www.ssw.com.au/api/get-megamenu";

// SSW's own deployments (production, PR preview slots, local dev) read the menu
// from their OWN origin, so the nav reflects the content that shipped with that
// build — this is what lets a preview slot show menu changes before they reach
// production. Any other host falls back to SSW's canonical production endpoint,
// preserving the previous cross-site behaviour.
const SSW_HOST = /(^|\.)ssw\.com\.au$|\.azurewebsites\.net$|^localhost$/;

const getApiUrl = () => {
  if (
    typeof window !== "undefined" &&
    SSW_HOST.test(window.location.hostname)
  ) {
    return `${window.location.origin}/api/get-megamenu`;
  }
  return CANONICAL_API_URL;
};

const refreshData = async () => {
  const res = await fetch(getApiUrl());
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
