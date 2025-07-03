import { Popover } from "@headlessui/react";
import React from "react";
import { MenuContextProvider } from "../../hooks/useMenuState";
import { NavMenuGroup } from "../../types/megamenu";
import { CountryDropdown } from "../CountryDropdown";
import { PhoneButton } from "../PhoneButton";
import { Search, SearchTermProps } from "../Search";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemWithSubmenu } from "./MenuItemWithSubmenu";

export interface DesktopMenuProps extends SearchTermProps {
  menuGroups: NavMenuGroup[];
  sideActionsOverride?: () => JSX.Element;
  hidePhone?: boolean;
  searchUrl: string;
  callback?: (searchTerm: string) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  menuGroups,
  sideActionsOverride,
  hidePhone,
  searchUrl,
  callback,
  performSearch,
  searchTerm,
  setSearchTerm,
}) => {
  const SideActions = sideActionsOverride;

  return (
    <>
      <div className="hidden flex-1 xl:block">
        <Popover.Group className="flex items-center justify-center gap-1 text-sm font-semibold text-ssw-black outline-none">
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
                      <MenuContextProvider value={{ close }}>
                        <MenuItemWithSubmenu
                          name={group.name}
                          menuColumns={group.menuColumns}
                          sidebarItems={group.sidebarItems}
                          isOpened={open}
                          viewAll={group.viewAll}
                        />
                      </MenuContextProvider>
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

      <div className="hidden shrink items-center justify-end gap-1 xl:flex">
        {SideActions ? (
          <SideActions />
        ) : (
          <DefaultSideActions
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            performSearch={performSearch}
            hidePhone={hidePhone}
            searchUrl={searchUrl}
            callback={callback}
          />
        )}
      </div>
    </>
  );
};

interface DefaultSideActionsProps extends SearchTermProps {
  hidePhone?: boolean;
  searchUrl: string;
  callback?: (searchTerm: string) => void;
}

const DefaultSideActions = ({
  hidePhone,
  searchUrl,
  searchTerm,
  setSearchTerm,
  performSearch,
}: DefaultSideActionsProps) => {
  return (
    <>
      {!hidePhone && <PhoneButton />}
      <Search
        performSearch={performSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Divider />
      <CountryDropdown url={searchUrl} />
    </>
  );
};

const Divider: React.FC = () => {
  return <div className="hidden h-5 w-px bg-gray-700/30 sm:block"></div>;
};

export default DesktopMenu;
