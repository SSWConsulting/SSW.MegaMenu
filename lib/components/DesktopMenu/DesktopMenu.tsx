import { Popover } from "@headlessui/react";
import React, { createContext } from "react";
import { NavMenuGroup } from "../../types/megamenu";
import { CountryDropdown } from "../CountryDropdown";
import { PhoneButton } from "../PhoneButton";
import { Search } from "../Search";
import Divider from "../divider";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemWithSubmenu } from "./MenuItemWithSubmenu";

export interface DesktopMenuProps {
  menuGroups: NavMenuGroup[];
}

export const ClosePopoverContext = createContext<((...args) => void) | null>(
  null,
);

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuGroups }) => {
  return (
    <>
      <div className="hidden flex-1 xl:block">
        <Popover.Group className="text-ssw-black flex items-center justify-center text-sm font-semibold outline-none">
          {menuGroups.map((group) => {
            if (
              !!group.menuColumns &&
              !!group.sidebarItems &&
              group.menuColumns.length > 0 &&
              group.sidebarItems.length > 0
            ) {
              return (
                <Popover key={group.name}>
                  {({ open, close }) => {
                    {
                      /* TODO: Duplicated check needed here to appease Typescript */
                    }
                    if (!group.menuColumns || !group.sidebarItems) return <></>;
                    return (
                      <ClosePopoverContext.Provider value={close}>
                        <MenuItemWithSubmenu
                          name={group.name}
                          menuColumns={group.menuColumns}
                          sidebarItems={group.sidebarItems}
                          isOpened={open}
                          viewAll={group.viewAll}
                        />
                      </ClosePopoverContext.Provider>
                    );
                  }}
                </Popover>
              );
            } else if (group.url) {
              return (
                <MenuItemLink
                  name={group.name}
                  href={group.url}
                  key={group.name}
                />
              );
            } else {
              return <></>;
            }
          })}
        </Popover.Group>
      </div>

      <div className="hidden shrink items-center justify-end xl:flex">
        <PhoneButton hideMobile />
        <Search />
        <Divider />
        <CountryDropdown />
      </div>
    </>
  );
};

export default DesktopMenu;
