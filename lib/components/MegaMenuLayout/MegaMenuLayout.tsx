import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useMenuItems } from "../../hooks/useMenuItems";
import { NavMenuGroup } from "../../types/megamenu";
import { CustomLink } from "../CustomLink";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { Logo } from "../Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { PhoneButton } from "../PhoneButton";
import { Search } from "../Search";

export type MegaMenuWrapperProps = {
  menuBarItems?: NavMenuGroup[];
  url?: string;
  subtitle?: string;
  rightSideActionsOverride?: () => JSX.Element;
} & React.PropsWithChildren &
  (Tagline | Title);

type Tagline = {
  title?: never;
  tagline?: string;
};

type Title = {
  title: string;
  tagline?: never;
};

const MegaMenuLayout: React.FC<MegaMenuWrapperProps> = ({
  tagline,
  title,
  url,
  subtitle,
  menuBarItems,
  rightSideActionsOverride,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { menuItems } = useMenuItems(menuBarItems);

  const RightSideActions = rightSideActionsOverride;

  return (
    <>
      <div className="relative z-10 flex w-full items-center justify-center sm:h-[120px]">
        <nav
          className="flex h-full w-full items-center justify-between gap-x-4 overflow-hidden px-0"
          aria-label="Global"
        >
          <div className="flex items-center">
            <CustomLink href={url || "/"} className="gap-1 whitespace-nowrap">
              <div className="flex min-w-[4rem] max-w-[14rem] items-center justify-center">
                <Logo />

                {tagline && (
                  <div className="w-fit whitespace-break-spaces text-sm font-semibold uppercase leading-4 text-gray-700">
                    <span className="ml-4 hidden xl:block">{tagline}</span>
                  </div>
                )}
                {title && (
                  <div className="mb-3 ml-2 mt-2 text-4xl leading-5">
                    {title}
                  </div>
                )}
              </div>
              {subtitle && (
                <p className="relative text-xs text-ssw-black opacity-70">
                  {subtitle}
                </p>
              )}
            </CustomLink>
          </div>
          <div className="flex items-center xl:hidden">
            {RightSideActions ? (
              <div className="max-sm:hidden">
                <RightSideActions />
              </div>
            ) : (
              <PhoneButton className="max-sm:hidden" />
            )}
            <Search />
            <Divider />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md pl-6 pr-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <DesktopMenu
            menuGroups={menuItems}
            sideActionsOverride={rightSideActionsOverride}
          />
        </nav>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          menuBarItems={menuItems}
          closeMobileMenu={() => setMobileMenuOpen(false)}
        />
      </div>
      {RightSideActions ? (
        <div className="sm:hidden">
          <RightSideActions />
        </div>
      ) : (
        <PhoneButton className="flex-grow pb-4 sm:hidden" />
      )}
    </>
  );
};

const Divider: React.FC = () => {
  return <div className="h-4 w-px bg-gray-700/30 sm:block"></div>;
};

export default MegaMenuLayout;
