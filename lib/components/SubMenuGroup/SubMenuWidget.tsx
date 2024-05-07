"use client";
import React from "react";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { AvailableIcons } from "../../types/icon";
import { SidebarItem } from "../../types/megamenu";
import { MegaIcon } from "../MegaIcon";
import FeaturedCard from "./FeaturedCard";

interface SubMenuWidgetProps {
  item: SidebarItem;
}

const SubMenuWidget: React.FC<SubMenuWidgetProps> = ({ item }) => {
  const CustomLink = useLinkComponent();

  switch (item.widgetType) {
    case "featured": {
      return (
        <CustomLink href={item.url}>
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
          className="relative flex w-full cursor-pointer items-center justify-center rounded bg-ssw-red font-semibold !text-white hover:bg-ssw-light-red"
          href={item.url}
        >
          <MegaIcon icon="phoneAlt" className="text-2xl" />
          <span className="ml-2 py-4">{item.name.toUpperCase()}</span>
        </CustomLink>
      );
    }
    case "classicMenu":
    default: {
      return (
        <CustomLink className="block" href={item.url}>
          {item.name && item.description ? (
            <>
              <span className="font-bold">{item.name}</span>
              <p className="mt-2 text-sm">{item.description}</p>
            </>
          ) : (
            <span className="pl-4 text-sm font-normal text-ssw-black">
              {item.name}
            </span>
          )}
        </CustomLink>
      );
    }
  }
};

export default SubMenuWidget;
