"use client";
import React from "react";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { useMenuState } from "../../hooks/useMenuState";
import { AvailableIcons } from "../../types/icon";
import { SidebarItem } from "../../types/megamenu";
import { FOCUS_RING } from "../../util/constants";
import { cx } from "../../util/cx";
import { MegaIcon } from "../MegaIcon";
import FeaturedCard from "./FeaturedCard";

interface SubMenuWidgetProps {
  item: SidebarItem;
}

const SubMenuWidget: React.FC<SubMenuWidgetProps> = ({ item }) => {
  const CustomLink = useLinkComponent();
  // Close the menu on click, like the main-area links, so it doesn't stay open
  // over the page after a client-side navigation.
  const { close } = useMenuState();

  switch (item.widgetType) {
    case "featured": {
      return (
        <CustomLink href={item.url} className={FOCUS_RING} onClick={close}>
          <FeaturedCard
            title={<span> {item.name}</span>}
            icon={item.icon as AvailableIcons}
          >
            {item.description}
          </FeaturedCard>
        </CustomLink>
      );
    }
    case "bookNow": {
      return (
        <CustomLink
          className={cx(
            "relative flex w-full cursor-pointer items-center justify-center rounded bg-ssw-red font-semibold !text-white hover:bg-ssw-light-red",
            FOCUS_RING,
          )}
          href={item.url}
          onClick={close}
        >
          <MegaIcon icon="phoneAlt" className="text-2xl" />
          <span className="ml-2 py-4">{item.name?.toUpperCase()}</span>
        </CustomLink>
      );
    }
    case "classicMenu":
    default: {
      return (
        <CustomLink
          className={cx("group block", FOCUS_RING)}
          href={item.url}
          onClick={close}
        >
          {item.name && item.description ? (
            <>
              <span className="font-bold transition-colors group-hover:text-ssw-red dark:text-white dark:group-hover:text-ssw-red">
                {item.name}
              </span>
              <p className="mt-2 text-sm dark:text-white/60">
                {item.description}
              </p>
            </>
          ) : (
            <span className="pl-4 text-sm font-normal text-ssw-black transition-colors group-hover:text-ssw-red dark:text-white dark:group-hover:text-ssw-red">
              {item.name}
            </span>
          )}
        </CustomLink>
      );
    }
  }
};

export default SubMenuWidget;
