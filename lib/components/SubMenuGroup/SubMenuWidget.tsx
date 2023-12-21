"use client";
import React from "react";
import { SidebarItem } from "../../types/megamenu";
import { CustomLink } from "../CustomLink";
import { AvailableIcons, MegaIcon } from "../MegaIcon";
import FeaturedCard from "./FeaturedCard";

interface SubMenuWidgetProps {
  item: SidebarItem;
}

const SubMenuWidget: React.FC<SubMenuWidgetProps> = ({ item }) => {
  switch (item.widgetType) {
    case "featured": {
      return (
        <CustomLink className="unstyled" href={item.url}>
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
          className="unstyled hover:bg-ssw-red-light relative flex w-full cursor-pointer items-center justify-center rounded-md bg-ssw-red font-semibold text-white"
          href={item.url}
        >
          <MegaIcon icon="phone" className="h-6" />
          <span className="ml-2 py-4">{item.name}</span>
        </CustomLink>
      );
    }
    case "classicMenu":
    default: {
      return (
        <CustomLink className="unstyled block" href={item.url}>
          {item.name && item.description ? (
            <>
              <span className="font-bold">{item.name}</span>
              <p className="mt-2 text-sm">{item.description}</p>
            </>
          ) : (
            <span className="text-ssw-black pl-4 text-sm font-normal">
              {item.name}
            </span>
          )}
        </CustomLink>
      );
    }
  }
};

export default SubMenuWidget;
