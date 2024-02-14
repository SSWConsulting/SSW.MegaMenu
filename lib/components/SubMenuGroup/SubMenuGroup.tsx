"use client";
import React, { useContext } from "react";
import { useLinkComponent } from "../../hooks/useLinkComponent";
import { type AvailableIcons } from "../../types/icon";
import {
  NavMenuColumn,
  NavMenuColumnGroup,
  NavMenuColumnGroupItem,
  Sidebar,
  ViewAll,
} from "../../types/megamenu";
import { cx } from "../../util/cx";
import { ClosePopoverContext } from "../DesktopMenu/DesktopMenu";
import { MegaIcon } from "../MegaIcon";
import SubMenuWidget from "./SubMenuWidget";

export interface SubMenuGroupProps {
  menuColumns: NavMenuColumn[];
  sidebarItems: Sidebar[];
  viewAll?: ViewAll;
}

export const SubMenuGroup: React.FC<SubMenuGroupProps> = ({
  menuColumns,
  sidebarItems,
  viewAll,
}) => {
  return (
    <>
      <div className="mx-auto flex max-w-9xl flex-col lg:flex-row">
        <div className="grid gap-x-4 p-4 lg:grow lg:grid-flow-col">
          {menuColumns.map((column, i) => (
            <div key={"column" + i} className="flex grow flex-col gap-y-4">
              {column.menuColumnGroups?.map((item, j) => (
                <MenuItem
                  key={"menuItem" + item.name + i}
                  item={item}
                  viewAll={viewAll}
                  showViewAll={
                    !!column.menuColumnGroups &&
                    i === menuColumns.length - 1 &&
                    j == column.menuColumnGroups.length - 1
                  }
                />
              ))}
            </div>
          ))}
        </div>

        <div className="shrink-0 overflow-x-hidden bg-gray-50 lg:relative lg:w-[350px] lg:before:absolute lg:before:inset-0 lg:before:-z-10 lg:before:w-[1000px] lg:before:bg-gray-50">
          <div className="flex flex-col gap-y-2 px-8 py-4">
            {sidebarItems?.map((sideBarItem, i) => (
              <div key={i}>
                <Heading className={i > 0 ? "pt-6" : ""}>
                  {sideBarItem.name}
                </Heading>
                <div className="flex flex-col gap-y-4">
                  {sideBarItem.items?.map((item, i) => (
                    <SubMenuWidget key={i} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Heading: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h3 className={cx("pb-6 text-lg font-bold text-ssw-black", className)}>
      {children}
    </h3>
  );
};

const MenuItem: React.FC<{
  item: NavMenuColumnGroup;
  viewAll?: ViewAll;
  showViewAll: boolean;
}> = ({ item: { name, menuItems }, viewAll, showViewAll }) => {
  return (
    <div key={name} className="flex flex-col pb-4 last:grow">
      <Heading>{name}</Heading>
      <div className="flex flex-col">
        {menuItems?.map((subItem, i) => (
          <LinkItem key={name + i} link={subItem} />
        ))}
      </div>
      {showViewAll && viewAll && (
        <ViewAllLink href={viewAll.url} name={viewAll.name} />
      )}
    </div>
  );
};

const LinkItem: React.FC<{ link: NavMenuColumnGroupItem }> = ({
  link: { name, url, description, icon, iconImg },
}) => {
  const close = useContext(ClosePopoverContext);
  const CustomLink = useLinkComponent();

  return (
    <CustomLink
      href={url || ""}
      className={cx(
        "flex items-start gap-x-3 rounded-md bg-white hover:bg-gray-100 focus:outline-none",
        description ? "p-4" : "p-2",
      )}
      onClick={() => {
        if (close) close();
      }}
    >
      {(icon || iconImg) && (
        <div className="flex shrink-0 items-center justify-center text-ssw-red">
          <MegaIcon
            className="h-6 w-6"
            icon={icon as AvailableIcons}
            iconImg={iconImg}
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <span>
          {name && description ? (
            <>
              <p className="font-bold text-ssw-black">{name}</p>
              <p className="mt-1 text-sm font-normal text-ssw-gray">
                {description}
              </p>
            </>
          ) : (
            <p className="pl-4 text-sm font-normal text-ssw-black">{name}</p>
          )}
        </span>
      </div>
    </CustomLink>
  );
};

const ViewAllLink: React.FC<{ href?: string; name?: string }> = ({
  name,
  href,
}) => {
  const CustomLink = useLinkComponent();

  if (!name || !href) {
    return <></>;
  }

  return (
    <div className="flex grow flex-col-reverse items-end self-end pt-4">
      <CustomLink
        href={href}
        className="rounded-md px-3 py-1 text-sm font-semibold leading-6 text-ssw-red hover:bg-ssw-red hover:text-white"
      >
        {name} &rarr;
      </CustomLink>
    </div>
  );
};

export default SubMenuGroup;
