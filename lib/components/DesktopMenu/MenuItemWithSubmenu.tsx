"use client";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { NavMenuColumn, Sidebar, ViewAll } from "../../types/megamenu";
import { cx } from "../../util/cx";
import { MegaIcon } from "../MegaIcon";
import SubMenuGroup from "../SubMenuGroup/SubMenuGroup";

interface MenuItemWithSubmenuProps {
  name: string;
  menuColumns: NavMenuColumn[];
  sidebarItems: Sidebar[];
  viewAll?: ViewAll;
  isOpened: boolean;
}

export const MenuItemWithSubmenu: React.FC<MenuItemWithSubmenuProps> = ({
  name,
  menuColumns,
  sidebarItems,
  isOpened,
  viewAll,
}) => {
  return (
    <>
      <Popover.Button
        className={cx(
          "flex cursor-pointer items-center justify-center gap-x-1 whitespace-nowrap rounded-md px-3 py-1 text-ssw-black focus:outline-none focus-visible:ring-opacity-0",
          isOpened ? "text-ssw-red" : "hover:text-ssw-red",
        )}
      >
        {name}
        <MegaIcon icon="chevronDown" className="h-5 w-5 flex-none" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-[120px] -z-10 bg-white shadow-md shadow-gray-400">
          <SubMenuGroup
            menuColumns={menuColumns}
            sidebarItems={sidebarItems}
            viewAll={viewAll}
          />
        </Popover.Panel>
      </Transition>
    </>
  );
};
