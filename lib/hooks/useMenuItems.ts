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
  refreshMenu = true,
): { menuItems: NavMenuGroup[] } => {
  const [menuItems, setMenuItems] = useState<NavMenuGroup[] | undefined>(
    menuBarItems,
  );

  // An empty array counts as no menu, so a host whose menu failed to load
  // still gets one from the API instead of rendering a blank bar.
  const hasHostMenu = !!menuBarItems?.length;

  useEffect(() => {
    if (hasHostMenu) {
      setMenuItems(menuBarItems);
    }
  }, [hasHostMenu, menuBarItems]);

  // By default the fetch still replaces the host's menu, so hosts that pass a
  // build-time copy (SSW.People, SSW.Rules) keep getting live updates. A host
  // that passes refreshMenu={false} has already rendered the menu it shipped
  // with, and fetching would only replace it with whatever the API's caches
  // are still holding.
  const shouldFetch = refreshMenu || !hasHostMenu;

  useEffect(() => {
    if (!shouldFetch) return;

    // If the host's menu arrives while this fetch is in flight, the cleanup
    // stops the stale API response from overwriting it.
    let cancelled = false;
    refreshData()
      .then((data) => {
        if (!cancelled) setMenuItems(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });

    return () => {
      cancelled = true;
    };
  }, [shouldFetch]);

  return { menuItems: menuItems || [] };
};
