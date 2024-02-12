import { Popover } from "@headlessui/react";
import React, { createContext } from "react";
import { NavMenuGroup } from "../../types/megamenu";
import { CountryDropdown } from "../CountryDropdown";
import { PhoneButton } from "../PhoneButton";
import { Search } from "../Search";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemWithSubmenu } from "./MenuItemWithSubmenu";

export interface DesktopMenuProps {
  menuGroups: NavMenuGroup[];
  sideActionsOverride?: () => JSX.Element;
  hidePhone?: boolean;
  searchUrl?: string;
}

export const ClosePopoverContext = createContext<(() => void) | null>(null);

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  menuGroups,
  sideActionsOverride,
  hidePhone,
  searchUrl,
}) => {
  const SideActions = sideActionsOverride;

  return (
    <>
      <div className="hidden flex-1 xl:block">
        <Popover.Group className="flex items-center justify-center text-sm font-semibold text-ssw-black outline-none">
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
        {SideActions ? (
          <SideActions />
        ) : (
          <DefaultSideActions hidePhone={hidePhone} searchUrl={searchUrl} />
        )}
      </div>
    </>
  );
};

type DefaultSideActionsProps = {
  hidePhone?: boolean;
  searchUrl?: string;
};

const DefaultSideActions = ({
  hidePhone,
  searchUrl,
}: DefaultSideActionsProps) => {
  return (
    <>
      {!hidePhone && <PhoneButton hideMobile />}
      <Search url={searchUrl} />
      <Divider />
      <CountryDropdown />
    </>
  );
};

const Divider: React.FC = () => {
  return <div className="hidden h-5 w-px bg-gray-700/30 sm:block"></div>;
};

export default DesktopMenu;
