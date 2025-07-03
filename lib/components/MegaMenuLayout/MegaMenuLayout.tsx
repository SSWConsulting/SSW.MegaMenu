import { Bars3Icon } from "@heroicons/react/24/outline";
import type { ClassValue } from "clsx";

import React, { useState } from "react";
import {
  LinkComponentType,
  useLinkComponent,
} from "../../hooks/useLinkComponent";
import { LinkProvider } from "../../hooks/useLinkComponent/components";
import { useMenuItems } from "../../hooks/useMenuItems";
import { NavMenuGroup } from "../../types/megamenu";
import { DEFAULT_URL } from "../../util/constants";
import { cx } from "../../util/cx";
import { CountryDropdown } from "../CountryDropdown";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { Logo } from "../Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { PhoneButton } from "../PhoneButton";

export type MegaMenuWrapperProps = {
  className?: ClassValue;
  menuBarItems?: NavMenuGroup[];
  url?: string;
  subtitle?: string;
  searchUrl?: string;
  rightSideActionsOverride?: () => JSX.Element;
  callback?: (searchTerm: string) => void;
  linkComponent?: LinkComponentType;
} & React.PropsWithChildren &
  (Tagline | Title);

export type Tagline = {
  title?: never;
  tagline?: string;
};

export type Title = {
  title: string;
  tagline?: never;
};

const MegaMenuContents: React.FC<MegaMenuWrapperProps> = ({
  className = "",
  tagline,
  title,
  url,
  subtitle,
  searchUrl = DEFAULT_URL,
  menuBarItems,
  rightSideActionsOverride,
  callback,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const performSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      if (callback) {
        callback(searchTerm);
      } else {
        const queryUrl = `https://www.google.com.au/search?q=site:${searchUrl}%20${encodeURIComponent(
          searchTerm,
        )}`;
        window.open(queryUrl, "_blank");
      }
    }
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { menuItems } = useMenuItems(menuBarItems);
  const CustomLink = useLinkComponent();

  const RightSideActions = rightSideActionsOverride;
  return (
    <>
      <div
        className={cx(
          className,
          "relative z-10 flex w-full items-center justify-center sm:h-[120px]",
        )}
      >
        <nav
          className="flex h-full w-full items-center justify-between gap-x-1 overflow-hidden px-0 xs:gap-x-2"
          aria-label="Global"
        >
          <div className="flex items-center">
            <CustomLink href={url || "/"} className="gap-1 whitespace-nowrap">
              <div className="flex min-w-[4rem] max-w-[14rem] items-center justify-center">
                <Logo />

                {tagline && (
                  <div className="w-fit whitespace-break-spaces text-xs font-semibold uppercase leading-3 text-gray-700">
                    <span className="ml-3 hidden xl:block">{tagline}</span>
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
            <CountryDropdown />
            <Divider />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md px-1 text-gray-700 xs:px-4"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <DesktopMenu
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            performSearch={performSearch}
            searchUrl={searchUrl}
            menuGroups={menuItems}
            sideActionsOverride={rightSideActionsOverride}
            callback={callback}
          />
        </nav>
        <MobileMenu
          closeMobileMenu={() => setMobileMenuOpen(false)}
          isMobileMenuOpen={isMobileMenuOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          performSearch={performSearch}
          menuBarItems={menuItems}
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

const MegaMenuLayout: React.FC<MegaMenuWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <LinkProvider linkComponent={props.linkComponent}>
      <MegaMenuContents {...props}>{children}</MegaMenuContents>
    </LinkProvider>
  );
};

export default MegaMenuLayout;
